import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  geoOrthographic,
  geoEquirectangular,
  geoPath,
  geoGraticule,
  geoDistance,
  geoInterpolate,
} from 'd3-geo';
import * as topojson from 'topojson-client';
import landData from 'world-atlas/land-110m.json';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe2,
  Map,
  RotateCw,
  Compass,
  Radio,
  ShieldCheck,
  Zap,
  ArrowRight,
  Activity,
  Layers,
  Pause,
  Play,
  Maximize2,
  Sparkles,
} from 'lucide-react';
import { Language } from '../translations';

export interface HubNode {
  id: string;
  name: string;
  code: string;
  country: string;
  coordinates: [number, number]; // [lon, lat]
  role: string;
  activeCarriers: number;
}

export interface TransportCorridor {
  id: string;
  name: string;
  from: string;
  to: string;
  fromCoord: [number, number];
  toCoord: [number, number];
  distanceKm: number;
  cipher: string;
  status: string;
  latencyMs: number;
  carrierNode: string;
  cargoType: string;
  co2SavedPct: number;
  highlightColor: string;
}

const HUBS: HubNode[] = [
  {
    id: 'tokyo',
    name: 'Tokyo Hub',
    code: 'HND / NRT',
    country: 'Japan',
    coordinates: [139.767, 35.681],
    role: 'APAC Autonomous Routing Gateway',
    activeCarriers: 142,
  },
  {
    id: 'berlin',
    name: 'Berlin Gateway',
    code: 'BER',
    country: 'Germany',
    coordinates: [13.405, 52.52],
    role: 'EMEA Multimodal Operations Core',
    activeCarriers: 188,
  },
  {
    id: 'london',
    name: 'London Corporate',
    code: 'LHR',
    country: 'United Kingdom',
    coordinates: [-0.127, 51.507],
    role: 'Global Treasury & Cross-Border Dispatch',
    activeCarriers: 164,
  },
  {
    id: 'singapore',
    name: 'Singapore Maritime Hub',
    code: 'SIN',
    country: 'Singapore',
    coordinates: [103.819, 1.352],
    role: 'Southeast Asia Deep-Water Freight Terminal',
    activeCarriers: 119,
  },
  {
    id: 'rotterdam',
    name: 'Rotterdam Port',
    code: 'RTM',
    country: 'Netherlands',
    coordinates: [4.477, 51.924],
    role: 'Automated Container Logistics Facility',
    activeCarriers: 135,
  },
  {
    id: 'chicago',
    name: 'Chicago Intermodal Park',
    code: 'ORD',
    country: 'United States',
    coordinates: [-87.629, 41.878],
    role: 'North American Transcontinental Backbone',
    activeCarriers: 176,
  },
  {
    id: 'dubai',
    name: 'Dubai World Central',
    code: 'DWC',
    country: 'UAE',
    coordinates: [55.27, 25.204],
    role: 'Middle East Air-Cargo Free Zone',
    activeCarriers: 94,
  },
];

const CORRIDORS: TransportCorridor[] = [
  {
    id: 'corridor-tokyo-berlin',
    name: 'Tokyo &harr; Berlin Cargo Express',
    from: 'Tokyo Hub (HND)',
    to: 'Berlin Gateway (BER)',
    fromCoord: [139.767, 35.681],
    toCoord: [13.405, 52.52],
    distanceKm: 9140,
    cipher: 'AES-256-GCM / TLS 1.3',
    status: 'In-Transit · Telemetry Verified',
    latencyMs: 8.4,
    carrierNode: 'Carrier Node 041-JP',
    cargoType: 'High-Precision Automotive Castings',
    co2SavedPct: 18.4,
    highlightColor: '#d8b485', // champagne gold
  },
  {
    id: 'corridor-rotterdam-chicago',
    name: 'Rotterdam &harr; Chicago Transatlantic Corridor',
    from: 'Rotterdam Port (RTM)',
    to: 'Chicago Intermodal (ORD)',
    fromCoord: [4.477, 51.924],
    toCoord: [-87.629, 41.878],
    distanceKm: 6680,
    cipher: 'Mutual TLS 1.3 Strict',
    status: 'Autonomous Sync · Zero Trust',
    latencyMs: 11.2,
    carrierNode: 'Carrier Node 118-EU',
    cargoType: 'Temperature-Controlled Pharmaceuticals',
    co2SavedPct: 22.8,
    highlightColor: '#38bdf8', // cyan
  },
  {
    id: 'corridor-london-singapore',
    name: 'London &harr; Singapore Eurasian Conduit',
    from: 'London Corporate (LHR)',
    to: 'Singapore Hub (SIN)',
    fromCoord: [-0.127, 51.507],
    toCoord: [103.819, 1.352],
    distanceKm: 10870,
    cipher: 'AES-256-GCM / HSM Keys',
    status: 'Synchronized · Active Dispatched',
    latencyMs: 9.6,
    carrierNode: 'Carrier Node 209-UK',
    cargoType: 'Aerospace Titanium & Avionics',
    co2SavedPct: 16.7,
    highlightColor: '#a855f7', // purple
  },
  {
    id: 'corridor-tokyo-singapore',
    name: 'Tokyo &harr; Singapore Maritime Arterial',
    from: 'Tokyo Hub (HND)',
    to: 'Singapore Hub (SIN)',
    fromCoord: [139.767, 35.681],
    toCoord: [103.819, 1.352],
    distanceKm: 5320,
    cipher: 'AES-256-GCM / TLS 1.3',
    status: 'Real-Time Edge Synced',
    latencyMs: 6.8,
    carrierNode: 'Carrier Node 087-SG',
    cargoType: 'Micro-Semiconductor Assemblies',
    co2SavedPct: 21.2,
    highlightColor: '#34d399', // emerald
  },
  {
    id: 'corridor-berlin-london',
    name: 'Berlin &harr; London Rapid Link',
    from: 'Berlin Gateway (BER)',
    to: 'London Corporate (LHR)',
    fromCoord: [13.405, 52.52],
    toCoord: [-0.127, 51.507],
    distanceKm: 930,
    cipher: 'Zero Trust Ephemeral Tokens',
    status: 'Automated Dispatch Committed',
    latencyMs: 4.2,
    carrierNode: 'Carrier Node 014-EU',
    cargoType: 'Industrial Robotics & Mechatronics',
    co2SavedPct: 27.5,
    highlightColor: '#f59e0b', // amber
  },
  {
    id: 'corridor-rotterdam-dubai',
    name: 'Rotterdam &harr; Dubai Gulf Intermodal',
    from: 'Rotterdam Port (RTM)',
    to: 'Dubai World Central (DWC)',
    fromCoord: [4.477, 51.924],
    toCoord: [55.27, 25.204],
    distanceKm: 5050,
    cipher: 'AES-256 / FIPS-140-3',
    status: 'Dual-Write ERP Verified',
    latencyMs: 7.9,
    carrierNode: 'Carrier Node 330-ME',
    cargoType: 'Medical Vaccines & Diagnostics',
    co2SavedPct: 19.3,
    highlightColor: '#e879f9', // fuchsia
  },
];

interface GlobalNetworkGlobeProps {
  lang: Language;
  onExploreCorridor?: (corridor: TransportCorridor) => void;
}

export const GlobalNetworkGlobe: React.FC<GlobalNetworkGlobeProps> = ({ lang, onExploreCorridor }) => {
  const [viewMode, setViewMode] = useState<'globe' | 'map'>('globe');
  const [rotation, setRotation] = useState<[number, number]>([-40, -25]); // [lambda, phi]
  const [activeCorridorId, setActiveCorridorId] = useState<string>(CORRIDORS[0].id);
  const [selectedHubId, setSelectedHubId] = useState<string | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; r: [number, number] }>({ x: 0, y: 0, r: [-40, -25] });

  // Size of viewport for SVG
  const width = 640;
  const height = 480;

  // Extract land features using TopoJSON
  const landFeatures = useMemo(() => {
    try {
      return topojson.feature(landData as any, (landData as any).objects.land);
    } catch (e) {
      console.error('Error loading world land topojson', e);
      return null;
    }
  }, []);

  // Graticule grid generator
  const graticule = useMemo(() => geoGraticule().step([30, 30])(), []);

  // Configure Projection
  const projection = useMemo(() => {
    if (viewMode === 'globe') {
      return geoOrthographic()
        .scale(205)
        .translate([width / 2, height / 2])
        .rotate([rotation[0], rotation[1], 0])
        .clipAngle(90);
    } else {
      return geoEquirectangular()
        .scale(100)
        .translate([width / 2, height / 2])
        .rotate([rotation[0], 0, 0]);
    }
  }, [viewMode, rotation]);

  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection]);

  // Automated Smooth Rotation Loop
  useEffect(() => {
    if (!isAutoRotating || isDragging || viewMode === 'map') return;

    let animId: number;
    const rotate = () => {
      setRotation(([lambda, phi]) => [(lambda + 0.18) % 360, phi]);
      animId = requestAnimationFrame(rotate);
    };

    animId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotating, isDragging, viewMode]);

  // Handle Drag to Rotate
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      r: [...rotation],
    };
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const sensitivity = 0.35;

    const newLambda = dragStartRef.current.r[0] + dx * sensitivity;
    const newPhi = Math.max(-60, Math.min(60, dragStartRef.current.r[1] - dy * sensitivity));

    setRotation([newLambda, newPhi]);
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    setIsDragging(false);
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Quick Focal Transitions
  const handleFocusHub = (hub: HubNode) => {
    setIsAutoRotating(false);
    setSelectedHubId(hub.id);
    // Center globe on hub coordinates: lambda = -lon, phi = -lat
    const targetLambda = -hub.coordinates[0];
    const targetPhi = -hub.coordinates[1];

    setRotation([targetLambda, targetPhi]);
  };

  const handleFocusCorridor = (corridor: TransportCorridor) => {
    setActiveCorridorId(corridor.id);
    setIsAutoRotating(false);
    setSelectedHubId(null);

    // Compute midpoint of corridor to center the camera
    const midLon = (corridor.fromCoord[0] + corridor.toCoord[0]) / 2;
    const midLat = (corridor.fromCoord[1] + corridor.toCoord[1]) / 2;
    setRotation([-midLon, -midLat]);

    if (onExploreCorridor) {
      onExploreCorridor(corridor);
    }
  };

  const activeCorridor = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  // Helper to determine if a point is on the visible front hemisphere (for orthographic projection)
  const isVisiblePoint = useCallback(
    (coord: [number, number]) => {
      if (viewMode === 'map') return true;
      const centerLon = -rotation[0];
      const centerLat = -rotation[1];
      const dist = geoDistance(coord, [centerLon, centerLat]);
      return dist < Math.PI / 2;
    },
    [viewMode, rotation]
  );

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c12] overflow-hidden my-12">
      {/* Top Header Bar */}
      <div className="p-5 sm:p-6 border-b border-white/[0.08] bg-black/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-1">
            <Radio size={13} className="animate-pulse text-[#d8b485]" />
            <span>Planetary Logistics Telemetry</span>
            <span className="text-zinc-500">·</span>
            <span>D3.js Geodesic Corridors</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Global Supply Chain Network & Active Transport Corridors
          </h3>
        </div>

        {/* Action Controls: Globe / Map view toggle, Auto-Rotate Toggle */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <div className="flex items-center p-1 rounded-lg bg-white/5 border border-white/10">
            <button
              onClick={() => setViewMode('globe')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'globe'
                  ? 'bg-white/15 text-white font-medium border border-white/10'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Globe2 size={13} />
              <span>3D Globe</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'map'
                  ? 'bg-white/15 text-white font-medium border border-white/10'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Map size={13} />
              <span>Flat Map</span>
            </button>
          </div>

          {viewMode === 'globe' && (
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`px-3 py-1.5 rounded border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer ${
                isAutoRotating
                  ? 'bg-[#d8b485]/10 text-[#d8b485] border-[#d8b485]/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white'
              }`}
              title={isAutoRotating ? 'Pause rotation' : 'Resume auto-rotation'}
            >
              {isAutoRotating ? <Pause size={12} /> : <Play size={12} />}
              <span>{isAutoRotating ? 'Auto-Spin' : 'Spin Paused'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Stage: 2-Column Split (Interactive Globe on Left, Corridor Dossier on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Globe Visualization Canvas (7 Cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between relative bg-radial from-blue-950/20 via-black/80 to-[#0c0c12]">
          {/* Quick Hub Focus Navigation Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-mono scrollbar-none z-10 mb-2">
            <span className="text-zinc-500 uppercase text-[10px] shrink-0 pr-1">Focus Hub:</span>
            {HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => handleFocusHub(hub)}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap text-[11px] cursor-pointer ${
                  selectedHubId === hub.id
                    ? 'bg-[#d8b485] text-zinc-950 font-bold'
                    : 'bg-white/5 text-zinc-300 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {hub.name.split(' ')[0]} ({hub.code.split('/')[0].trim()})
              </button>
            ))}
          </div>

          {/* Interactive D3.js SVG Viewport */}
          <div className="relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] select-none touch-none">
            {/* Atmospheric Outer Glow Ring (Globe only) */}
            {viewMode === 'globe' && (
              <div
                className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(216,180,133,0.06) 60%, rgba(56,189,248,0.1) 85%, transparent 100%)',
                }}
              />
            )}

            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto max-w-[560px] cursor-grab active:cursor-grabbing transition-transform"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              aria-label="Interactive global supply chain transport map"
            >
              <defs>
                {/* Globe Sphere Gradient */}
                <radialGradient id="oceanGradient" cx="45%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#111625" />
                  <stop offset="70%" stopColor="#080c14" />
                  <stop offset="100%" stopColor="#04060a" />
                </radialGradient>

                {/* Corridor Pulse Gradients */}
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d8b485" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d8b485" stopOpacity="0.2" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Globe Ocean Background */}
              {viewMode === 'globe' && (
                <>
                  <circle
                    cx={width / 2}
                    cy={height / 2}
                    r={205}
                    fill="url(#oceanGradient)"
                    stroke="rgba(216, 180, 133, 0.25)"
                    strokeWidth="1.2"
                  />
                  {/* Subtle edge shadow ring */}
                  <circle
                    cx={width / 2}
                    cy={height / 2}
                    r={205}
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.15)"
                    strokeWidth="4"
                    strokeDasharray="4 8"
                  />
                </>
              )}

              {/* Flat Map Background */}
              {viewMode === 'map' && (
                <rect
                  x={10}
                  y={10}
                  width={width - 20}
                  height={height - 20}
                  rx={8}
                  fill="#080c14"
                  stroke="rgba(255,255,255,0.06)"
                />
              )}

              {/* Graticule Grid Lines */}
              <path
                d={pathGenerator(graticule) || ''}
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.6"
              />

              {/* World Landmass Polygons */}
              {landFeatures && (
                <path
                  d={pathGenerator(landFeatures as any) || ''}
                  fill="#181d28"
                  stroke="rgba(216, 180, 133, 0.3)"
                  strokeWidth="0.75"
                  className="transition-colors duration-200"
                />
              )}

              {/* Active Transport Corridor Arcs (Great Circle) */}
              <g className="corridors-layer">
                {CORRIDORS.map((corridor) => {
                  const isActive = corridor.id === activeCorridorId;
                  const geoLine: any = {
                    type: 'Feature',
                    geometry: {
                      type: 'LineString',
                      coordinates: [corridor.fromCoord, corridor.toCoord],
                    },
                  };

                  const d = pathGenerator(geoLine);
                  if (!d) return null;

                  return (
                    <g key={corridor.id} className="cursor-pointer">
                      {/* Wider transparent hit-area */}
                      <path
                        d={d}
                        fill="none"
                        stroke="transparent"
                        strokeWidth="18"
                        onClick={() => handleFocusCorridor(corridor)}
                      />

                      {/* Corridor Track Background */}
                      <path
                        d={d}
                        fill="none"
                        stroke={isActive ? corridor.highlightColor : 'rgba(255, 255, 255, 0.18)'}
                        strokeWidth={isActive ? 2.8 : 1.2}
                        strokeOpacity={isActive ? 0.95 : 0.4}
                        strokeDasharray={isActive ? 'none' : '3 3'}
                        filter={isActive ? 'url(#glow)' : undefined}
                      />

                      {/* Animated Traveling Packet Pulse on Active Corridor */}
                      {isActive && (
                        <path
                          d={d}
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeDasharray="16 120"
                          className="animate-dash"
                          filter="url(#glow)"
                        />
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Hub Node Markers */}
              <g className="hubs-layer">
                {HUBS.map((hub) => {
                  const pos = projection(hub.coordinates);
                  const isVisible = isVisiblePoint(hub.coordinates);
                  if (!pos || !isVisible) return null;

                  const isHubSelected = selectedHubId === hub.id;
                  const isHubPartOfActiveCorridor =
                    activeCorridor.fromCoord[0] === hub.coordinates[0] ||
                    activeCorridor.toCoord[0] === hub.coordinates[0];

                  return (
                    <g
                      key={`hub-marker-${hub.id}`}
                      transform={`translate(${pos[0]}, ${pos[1]})`}
                      onClick={() => handleFocusHub(hub)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse Ring for active hub */}
                      {(isHubSelected || isHubPartOfActiveCorridor) && (
                        <circle
                          r="9"
                          fill="none"
                          stroke="#d8b485"
                          strokeWidth="1.2"
                          className="animate-ping opacity-60"
                        />
                      )}

                      {/* Outer Hub Ring */}
                      <circle
                        r={isHubPartOfActiveCorridor ? 5.5 : 4}
                        fill="#0c0c12"
                        stroke={isHubPartOfActiveCorridor ? '#d8b485' : 'rgba(255,255,255,0.7)'}
                        strokeWidth="1.8"
                      />

                      {/* Inner Dot */}
                      <circle
                        r={isHubPartOfActiveCorridor ? 2.5 : 1.8}
                        fill={isHubPartOfActiveCorridor ? '#ffffff' : '#38bdf8'}
                      />

                      {/* Label for key hubs */}
                      <text
                        x={8}
                        y={3}
                        fill={isHubPartOfActiveCorridor ? '#ffffff' : '#94a3b8'}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight={isHubPartOfActiveCorridor ? 'bold' : 'normal'}
                        className="pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      >
                        {hub.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Drag & Rotation Guide Overlay */}
            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-zinc-500 pointer-events-none flex items-center gap-1.5">
              <Compass size={11} className="text-[#d8b485]" />
              <span>Drag globe to rotate · Click corridor or hub for telemetry</span>
            </div>
          </div>

          {/* Quick Corridor Carousel Buttons */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-mono uppercase text-zinc-500 shrink-0">Corridors:</span>
            {CORRIDORS.map((corridor, idx) => (
              <button
                key={`tab-corridor-${corridor.id}`}
                onClick={() => handleFocusCorridor(corridor)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeCorridorId === corridor.id
                    ? 'bg-white/15 text-white font-medium border border-white/15'
                    : 'text-zinc-400 hover:text-white bg-black/40 border border-white/5'
                }`}
              >
                0{idx + 1}. {corridor.from.split(' ')[0]} &rarr; {corridor.to.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Corridor Technical Dossier (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#0e0e15]">
          <div>
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">
                  Active Corridor Ledger
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Verified
              </span>
            </div>

            {/* Corridor Title & Route */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <span dangerouslySetInnerHTML={{ __html: activeCorridor.name }} />
              </h4>
              <p className="text-xs font-mono text-zinc-400">
                {activeCorridor.from} &rarr; {activeCorridor.to}
              </p>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs mb-6">
              <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase">Great Circle Distance</div>
                <div className="text-base font-bold text-white mt-0.5 tabular-nums">
                  {activeCorridor.distanceKm.toLocaleString()} km
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase">Telemetry Latency</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5 tabular-nums">
                  {activeCorridor.latencyMs}ms
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase">Cryptographic Cipher</div>
                <div className="text-xs font-medium text-[#d8b485] mt-1 truncate">
                  {activeCorridor.cipher}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase">Scope 3 CO2 Reduction</div>
                <div className="text-xs font-medium text-emerald-400 mt-1 tabular-nums">
                  -{activeCorridor.co2SavedPct}% Empty Miles
                </div>
              </div>
            </div>

            {/* Assigned Carrier & Manifest Specifications */}
            <div className="p-4 rounded-lg bg-black/30 border border-white/5 font-mono text-xs space-y-2 mb-6">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-500">Allocated Fleet Node:</span>
                <span className="text-white font-medium">{activeCorridor.carrierNode}</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-500">Cargo Classification:</span>
                <span className="text-zinc-200">{activeCorridor.cargoType}</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-zinc-500">Integrity State:</span>
                <span className="text-emerald-400">{activeCorridor.status}</span>
              </div>
            </div>
          </div>

          {/* Quick Hub Focus Summary */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span>Primary Corridor Operations Nodes:</span>
              <span className="text-white">Tokyo · Berlin · London</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
              All transit telemetry is synchronized in real-time across enterprise ERP connectors with sub-second event streaming and Zero Trust endpoint validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
