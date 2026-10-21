import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import * as topojson from 'topojson-client';
import countriesData from 'world-atlas/countries-110m.json';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Radio,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Pause,
  Play,
  RotateCw,
  Compass,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Lock,
  Globe2,
  Navigation,
  Eye,
  Sliders,
  Sparkles,
  Plane,
  Truck,
  Ship,
  TrendingDown,
  Clock,
  Wifi,
} from 'lucide-react';
import { geoInterpolate } from 'd3-geo';
import { Language } from '../translations';

export interface HubNode {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
  lat: number;
  lng: number;
  role: string;
  color: string;
  activeCarriers: number;
  throughputTonsDay: number;
  latencyMs: number;
  customsClearedToday: number;
  encryptionCert: string;
  coldChainTemp: string;
}

export interface TransportCorridor {
  id: string;
  name: string;
  from: string;
  to: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: [string, string];
  stroke: number;
  distanceKm: number;
  latencyMs: number;
  cipher: string;
  cargoType: string;
  carrierNode: string;
  co2SavedPct: number;
  status: string;
  transportMode: 'AIR' | 'MARITIME' | 'MULTIMODAL';
  activeShipmentCode: string;
}

export interface LiveShipment {
  id: string;
  code: string;
  corridorId: string;
  fromCity: string;
  toCity: string;
  cargoDesc: string;
  mode: 'AIR' | 'MARITIME' | 'ROAD';
  speedKmH: number;
  altitudeFt: number;
  tempC: number;
  progress: number; // 0.0 to 1.0
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

// Global Operations Hubs - Special Spotlight on Riyadh, Cairo (Egypt), and Accra (Ghana)
const HUBS: HubNode[] = [
  {
    id: 'riyadh',
    name: 'Riyadh Sovereign Hub (KSA)',
    city: 'Riyadh',
    code: 'RUH / KSA',
    country: 'Saudi Arabia',
    lat: 24.7136,
    lng: 46.6753,
    role: 'Middle East Sovereign Trans-Arabian Gateway & GCC Freight Command',
    color: '#d8b485', // Champagne gold
    activeCarriers: 248,
    throughputTonsDay: 4820,
    latencyMs: 3.8,
    customsClearedToday: 1420,
    encryptionCert: 'FIPS 140-3 HSM Root of Trust / KSA SAMA Compliant',
    coldChainTemp: '4.0°C (Pharma & Food Security)',
  },
  {
    id: 'cairo',
    name: 'Cairo Gateway (Egypt)',
    city: 'Cairo',
    code: 'CAI / EGY',
    country: 'Egypt',
    lat: 30.0444,
    lng: 31.2357,
    role: 'Suez Maritime & North Africa Multimodal High-Capacity Core',
    color: '#38bdf8', // Sky/Cyan
    activeCarriers: 212,
    throughputTonsDay: 6150,
    latencyMs: 4.4,
    customsClearedToday: 1890,
    encryptionCert: 'Mutual TLS 1.3 Strict / ISO 27001 Certified',
    coldChainTemp: '3.8°C (Vaccine Cold Storage)',
  },
  {
    id: 'accra',
    name: 'Accra Terminal (Ghana)',
    city: 'Accra',
    code: 'ACC / GHA',
    country: 'Ghana',
    lat: 5.6037,
    lng: -0.187,
    role: 'West African Atlantic Trade Conduit & AfCFTA Regional Center',
    color: '#34d399', // Radiant Emerald
    activeCarriers: 164,
    throughputTonsDay: 3290,
    latencyMs: 6.2,
    customsClearedToday: 940,
    encryptionCert: 'AES-256-GCM Ephemeral Tokens / AfCFTA Protocol',
    coldChainTemp: '2.4°C (Perishable Export Cargo)',
  },
  {
    id: 'tokyo',
    name: 'Tokyo Autonomous Hub',
    city: 'Tokyo',
    code: 'HND / NRT',
    country: 'Japan',
    lat: 35.6812,
    lng: 139.7671,
    role: 'APAC Autonomous Robotics Routing & High-Tech Components Gateway',
    color: '#d8b485',
    activeCarriers: 198,
    throughputTonsDay: 5400,
    latencyMs: 5.1,
    customsClearedToday: 1650,
    encryptionCert: 'Zero Trust Hardware Enclave',
    coldChainTemp: '-18.0°C (Deep Frozen Specimen)',
  },
  {
    id: 'berlin',
    name: 'Berlin Gateway',
    city: 'Berlin',
    code: 'BER / DE',
    country: 'Germany',
    lat: 52.52,
    lng: 13.405,
    role: 'Central European Multimodal Hub & Industrial Rail Conduit',
    color: '#a855f7', // Purple
    activeCarriers: 204,
    throughputTonsDay: 4620,
    latencyMs: 4.9,
    customsClearedToday: 1340,
    encryptionCert: 'BSI C5 / EU NIS2 Certified',
    coldChainTemp: '5.2°C (Automotive Polymers)',
  },
  {
    id: 'london',
    name: 'London Corporate Node',
    city: 'London',
    code: 'LHR / UK',
    country: 'United Kingdom',
    lat: 51.5074,
    lng: -0.1278,
    role: 'Global Treasury, Cross-Border Dispatch & Clearing Settlement',
    color: '#f59e0b', // Amber
    activeCarriers: 178,
    throughputTonsDay: 3880,
    latencyMs: 5.4,
    customsClearedToday: 1120,
    encryptionCert: 'SOC 2 Type II / Financial Grade API',
    coldChainTemp: 'N/A (Bonded High-Value Cargo)',
  },
  {
    id: 'dubai',
    name: 'Dubai World Central',
    city: 'Dubai',
    code: 'DWC / UAE',
    country: 'UAE',
    lat: 25.2048,
    lng: 55.2708,
    role: 'Gulf Air-Cargo Sovereign Node & Intercontinental Airway Junction',
    color: '#d8b485',
    activeCarriers: 186,
    throughputTonsDay: 5900,
    latencyMs: 3.5,
    customsClearedToday: 1780,
    encryptionCert: 'FIPS 140-3 HSM Root of Trust',
    coldChainTemp: '4.1°C (Aviation Line Replaceable Units)',
  },
  {
    id: 'rotterdam',
    name: 'Rotterdam Port Terminal',
    city: 'Rotterdam',
    code: 'RTM / NL',
    country: 'Netherlands',
    lat: 51.9244,
    lng: 4.4777,
    role: 'Automated Deep-Water Container Terminal & Continental Sea Gate',
    color: '#38bdf8',
    activeCarriers: 195,
    throughputTonsDay: 9800,
    latencyMs: 5.8,
    customsClearedToday: 2450,
    encryptionCert: 'Maritime Cyber Security Framework',
    coldChainTemp: '-20.0°C (Reefer Containers)',
  },
];

// Active Corridors connecting Riyadh, Egypt, Ghana, and Global Gateways with live traveling lines
const CORRIDORS: TransportCorridor[] = [
  {
    id: 'corridor-riyadh-cairo',
    name: 'Riyadh (KSA) ⇄ Cairo (Egypt) Red Sea Express',
    from: 'Riyadh Hub (RUH)',
    to: 'Cairo Gateway (CAI)',
    startLat: 24.7136,
    startLng: 46.6753,
    endLat: 30.0444,
    endLng: 31.2357,
    color: ['#d8b485', '#38bdf8'],
    stroke: 2.4,
    distanceKm: 1640,
    latencyMs: 3.8,
    cipher: 'AES-256-GCM / TLS 1.3 Strict',
    cargoType: 'Sovereign Petrochem & Certified MedTech Cargo',
    carrierNode: 'Carrier Fleet 710-KSA / 204-EG',
    co2SavedPct: 26.4,
    status: 'In-Transit · Telemetry Verified',
    transportMode: 'AIR',
    activeShipmentCode: 'RUH-CAI-992',
  },
  {
    id: 'corridor-cairo-accra',
    name: 'Cairo (Egypt) ⇄ Accra (Ghana) Pan-African Arterial',
    from: 'Cairo Gateway (CAI)',
    to: 'Accra Terminal (ACC)',
    startLat: 30.0444,
    startLng: 31.2357,
    endLat: 5.6037,
    endLng: -0.187,
    color: ['#38bdf8', '#34d399'],
    stroke: 2.4,
    distanceKm: 4020,
    latencyMs: 6.8,
    cipher: 'Zero Trust Ephemeral Tokens (AfCFTA Secured)',
    cargoType: 'AfCFTA Multimodal Agriculture & High-Value Minerals',
    carrierNode: 'Carrier Fleet 088-GH / 112-EG',
    co2SavedPct: 22.1,
    status: 'Synchronized · Continuous Ingestion',
    transportMode: 'MULTIMODAL',
    activeShipmentCode: 'CAI-ACC-314',
  },
  {
    id: 'corridor-accra-london',
    name: 'Accra (Ghana) ⇄ London (UK) Atlantic Trade Conduit',
    from: 'Accra Terminal (ACC)',
    to: 'London Corporate (LHR)',
    startLat: 5.6037,
    startLng: -0.187,
    endLat: 51.5074,
    endLng: -0.1278,
    color: ['#34d399', '#f59e0b'],
    stroke: 2.1,
    distanceKm: 5110,
    latencyMs: 7.9,
    cipher: 'FIPS 140-3 HSM Attestation',
    cargoType: 'Critical Commodities & Institutional Trade Clearances',
    carrierNode: 'Carrier Fleet 209-UK / 034-GH',
    co2SavedPct: 19.6,
    status: 'Automated Dual-Write ERP Verified',
    transportMode: 'AIR',
    activeShipmentCode: 'ACC-LON-108',
  },
  {
    id: 'corridor-cairo-berlin',
    name: 'Cairo (Egypt) ⇄ Berlin (Germany) Euro-Med High-Speed Link',
    from: 'Cairo Gateway (CAI)',
    to: 'Berlin Gateway (BER)',
    startLat: 30.0444,
    startLng: 31.2357,
    endLat: 52.52,
    endLng: 13.405,
    color: ['#38bdf8', '#a855f7'],
    stroke: 2.2,
    distanceKm: 2890,
    latencyMs: 5.6,
    cipher: 'AES-256-GCM / SOC 2 Certified',
    cargoType: 'Precision Industrial Machinery & Diagnostics',
    carrierNode: 'Carrier Fleet 114-DE / 092-EG',
    co2SavedPct: 24.8,
    status: 'Real-Time Edge Streaming',
    transportMode: 'AIR',
    activeShipmentCode: 'CAI-BER-210',
  },
  {
    id: 'corridor-riyadh-dubai',
    name: 'Riyadh (KSA) ⇄ Dubai (UAE) Gulf Sovereign Corridor',
    from: 'Riyadh Hub (RUH)',
    to: 'Dubai Central (DWC)',
    startLat: 24.7136,
    startLng: 46.6753,
    endLat: 25.2048,
    endLng: 55.2708,
    color: ['#d8b485', '#d8b485'],
    stroke: 2.4,
    distanceKm: 860,
    latencyMs: 2.8,
    cipher: 'Mutual TLS 1.3 Strict / Sovereign Enclave',
    cargoType: 'High-Value Strategic Reserves & Rapid Air Cargo',
    carrierNode: 'Carrier Fleet 330-ME / 710-KSA',
    co2SavedPct: 31.5,
    status: 'Sub-Second Synchronized',
    transportMode: 'AIR',
    activeShipmentCode: 'RUH-DXB-440',
  },
  {
    id: 'corridor-riyadh-tokyo',
    name: 'Riyadh (KSA) ⇄ Tokyo (Japan) Trans-Eurasian Trade Arterial',
    from: 'Riyadh Hub (RUH)',
    to: 'Tokyo Hub (HND)',
    startLat: 24.7136,
    startLng: 46.6753,
    endLat: 35.6812,
    endLng: 139.7671,
    color: ['#d8b485', '#ffffff'],
    stroke: 2.0,
    distanceKm: 8720,
    latencyMs: 10.4,
    cipher: 'AES-256-GCM / Mutual TLS 1.3',
    cargoType: 'Next-Gen Robotics & Advanced Energy Assemblies',
    carrierNode: 'Carrier Fleet 041-JP / 710-KSA',
    co2SavedPct: 18.2,
    status: 'Neural Model Dispatch Locked',
    transportMode: 'AIR',
    activeShipmentCode: 'RUH-TYO-880',
  },
  {
    id: 'corridor-accra-rotterdam',
    name: 'Accra (Ghana) ⇄ Rotterdam (NL) Deep-Water Atlantic Route',
    from: 'Accra Terminal (ACC)',
    to: 'Rotterdam Port (RTM)',
    startLat: 5.6037,
    startLng: -0.187,
    endLat: 51.9244,
    endLng: 4.4777,
    color: ['#34d399', '#38bdf8'],
    stroke: 2.0,
    distanceKm: 5380,
    latencyMs: 8.2,
    cipher: 'Blockchain Bill of Lading / Cryptographic Seals',
    cargoType: 'Sustainable Cocoa, Specialty Minerals & Bulk Agro',
    carrierNode: 'Carrier Fleet 018-NL / 088-GH',
    co2SavedPct: 28.5,
    status: 'Sea-Lane Monitored · Sensor Verified',
    transportMode: 'MARITIME',
    activeShipmentCode: 'ACC-RTM-505',
  },
  {
    id: 'corridor-tokyo-berlin',
    name: 'Tokyo (Japan) ⇄ Berlin (Germany) Intercontinental Link',
    from: 'Tokyo Hub (HND)',
    to: 'Berlin Gateway (BER)',
    startLat: 35.6812,
    startLng: 139.7671,
    endLat: 52.52,
    endLng: 13.405,
    color: ['#ffffff', '#a855f7'],
    stroke: 2.0,
    distanceKm: 9140,
    latencyMs: 9.1,
    cipher: 'AES-256-GCM / FIPS 140-3',
    cargoType: 'High-Precision Automotive Castings & Sensors',
    carrierNode: 'Carrier Node 041-JP',
    co2SavedPct: 18.4,
    status: 'In-Transit · Telemetry Verified',
    transportMode: 'AIR',
    activeShipmentCode: 'TYO-BER-712',
  },
];

interface GlobalNetworkGlobeProps {
  lang: Language;
  onExploreCorridor?: (corridor: TransportCorridor) => void;
}

export const GlobalNetworkGlobe: React.FC<GlobalNetworkGlobeProps> = ({
  lang,
  onExploreCorridor,
}) => {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 620, height: 490 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState<number>(0.85);
  const [activeCorridorId, setActiveCorridorId] = useState<string>(CORRIDORS[0].id);
  const [selectedHubId, setSelectedHubId] = useState<string>('riyadh');
  const [livePingCounter, setLivePingCounter] = useState(84920);
  const [packetsRouted, setPacketsRouted] = useState(1849120);
  const [liveLatencyOsc, setLiveLatencyOsc] = useState(4.2);
  const [currentOrbitCoords, setCurrentOrbitCoords] = useState({ lat: 24.71, lng: 46.68, alt: 2.1 });
  const [showAtmosphere, setShowAtmosphere] = useState(true);
  const [activeShipmentIndex, setActiveShipmentIndex] = useState(0);

  // Live real-time traveling cargo shipment animation along great-circle corridors
  const [shipmentsProgress, setShipmentsProgress] = useState<Record<string, number>>({
    'corridor-riyadh-cairo': 0.65,
    'corridor-cairo-accra': 0.42,
    'corridor-accra-london': 0.78,
    'corridor-cairo-berlin': 0.28,
    'corridor-riyadh-dubai': 0.88,
    'corridor-riyadh-tokyo': 0.52,
    'corridor-accra-rotterdam': 0.34,
    'corridor-tokyo-berlin': 0.61,
  });

  // Extract Country Polygons from local TopoJSON to render landmasses and highlight Saudi Arabia, Egypt, and Ghana
  const countryPolygons = useMemo(() => {
    try {
      const geo = topojson.feature(countriesData as any, (countriesData as any).objects.countries);
      return (geo as any).features || [];
    } catch (e) {
      console.error('Error loading world countries topojson', e);
      return [];
    }
  }, []);

  // Setup responsive container dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth < 1024;
        const targetWidth = rect.width > 0 ? Math.floor(rect.width) : 320;
        const targetHeight = isMobile ? 340 : isTablet ? 420 : 480;
        setDimensions({
          width: targetWidth,
          height: targetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Configure OrbitControls auto-rotation and initial focus on Riyadh / Cairo / Accra
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = isAutoRotating;
        controls.autoRotateSpeed = orbitSpeed;
        // Disable mouse-wheel scroll hijacking so the page scrolls calmly and smoothly
        controls.enableZoom = false;
      }
      // Initial focal viewpoint centered on Riyadh, Cairo, and Accra region
      globeRef.current.pointOfView({ lat: 22.0, lng: 34.0, altitude: 2.15 }, 1200);
    }
  }, [isAutoRotating, orbitSpeed]);

  // Periodic simulated telemetry ping ticks and live packet counter
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePingCounter((prev) => prev + 1);
      setPacketsRouted((prev) => prev + Math.floor(Math.random() * 4) + 2);
      setLiveLatencyOsc(+(4.2 + (Math.random() * 0.5 - 0.25)).toFixed(1));

      // Advance moving shipments along the lines
      setShipmentsProgress((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          updated[key] = (updated[key] + 0.015) % 1.0;
        });
        return updated;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  // Rotate featured active shipment ticker every 3.5 seconds
  useEffect(() => {
    const ticker = setInterval(() => {
      setActiveShipmentIndex((prev) => (prev + 1) % CORRIDORS.length);
    }, 3500);
    return () => clearInterval(ticker);
  }, []);

  // Interpolate traveling cargo points on the globe lines using geoInterpolate
  const movingShipmentPoints = useMemo(() => {
    return CORRIDORS.map((corridor) => {
      const p = shipmentsProgress[corridor.id] || 0.5;
      const interpolator = geoInterpolate(
        [corridor.startLng, corridor.startLat],
        [corridor.endLng, corridor.endLat]
      );
      const [curLng, curLat] = interpolator(p);

      return {
        id: `shipment-${corridor.id}`,
        lat: curLat,
        lng: curLng,
        name: corridor.activeShipmentCode,
        color: '#fef08a', // High-visibility laser yellow
        altitude: 0.05,
        radius: 0.55,
        corridorId: corridor.id,
        fromCity: corridor.from.split(' ')[0],
        toCity: corridor.to.split(' ')[0],
      };
    });
  }, [shipmentsProgress]);

  // Focus on a specific hub with smooth camera transition
  const handleFocusHub = (hub: HubNode) => {
    setSelectedHubId(hub.id);
    setIsAutoRotating(false);

    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: hub.lat, lng: hub.lng, altitude: 1.75 },
        1400
      );
      setCurrentOrbitCoords({ lat: hub.lat, lng: hub.lng, alt: 1.75 });
    }
  };

  // Focus on regional corridor triangle (Riyadh - Cairo - Accra)
  const handleFocusTriHub = () => {
    setIsAutoRotating(false);
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 21.0, lng: 32.0, altitude: 2.1 },
        1400
      );
      setCurrentOrbitCoords({ lat: 21.0, lng: 32.0, alt: 2.1 });
    }
  };

  // Focus on a specific active transport corridor
  const handleFocusCorridor = (corridor: TransportCorridor) => {
    setActiveCorridorId(corridor.id);
    setIsAutoRotating(false);

    // Compute midpoint
    const midLat = (corridor.startLat + corridor.endLat) / 2;
    const midLng = (corridor.startLng + corridor.endLng) / 2;

    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: midLat, lng: midLng, altitude: 1.95 },
        1400
      );
      setCurrentOrbitCoords({ lat: midLat, lng: midLng, alt: 1.95 });
    }

    if (onExploreCorridor) {
      onExploreCorridor(corridor);
    }
  };

  const handleZoom = (delta: number) => {
    if (!globeRef.current) return;
    const currentView = globeRef.current.pointOfView();
    const newAlt = Math.max(1.1, Math.min(3.8, currentView.altitude + delta));
    globeRef.current.pointOfView({ ...currentView, altitude: newAlt }, 500);
    setCurrentOrbitCoords((prev) => ({ ...prev, alt: newAlt }));
  };

  const activeCorridor =
    CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  const selectedHub =
    HUBS.find((h) => h.id === selectedHubId) || HUBS[0];

  // Radar Pulsing Rings Data - Specially configured for Riyadh, Cairo, and Accra
  const ringsData = useMemo(() => {
    return HUBS.map((hub) => ({
      id: `ring-${hub.id}`,
      lat: hub.lat,
      lng: hub.lng,
      color: hub.color,
      maxR:
        hub.id === 'riyadh'
          ? 8.5
          : hub.id === 'cairo'
          ? 8.0
          : hub.id === 'accra'
          ? 7.5
          : 5.0,
      propagationSpeed:
        hub.id === 'riyadh'
          ? 3.2
          : hub.id === 'cairo'
          ? 2.8
          : hub.id === 'accra'
          ? 2.6
          : 2.0,
      repeatPeriod:
        hub.id === 'riyadh'
          ? 750
          : hub.id === 'cairo'
          ? 850
          : hub.id === 'accra'
          ? 900
          : 1200,
    }));
  }, []);

  // Hub Labels Data for 3D Globe with highlighted font sizes for Riyadh, Cairo, and Accra
  const labelsData = useMemo(() => {
    return HUBS.map((hub) => ({
      lat: hub.lat,
      lng: hub.lng,
      text: hub.id === selectedHubId ? `★ ${hub.name}` : hub.name,
      color:
        hub.id === selectedHubId
          ? '#ffffff'
          : hub.id === 'riyadh'
          ? '#d8b485'
          : hub.id === 'cairo'
          ? '#38bdf8'
          : hub.id === 'accra'
          ? '#34d399'
          : '#cbd5e1',
      size:
        hub.id === selectedHubId
          ? 1.35
          : hub.id === 'riyadh' || hub.id === 'cairo' || hub.id === 'accra'
          ? 1.2
          : 0.95,
      dotRadius:
        hub.id === 'riyadh' || hub.id === 'cairo' || hub.id === 'accra'
          ? 0.55
          : 0.4,
    }));
  }, [selectedHubId]);

  // Combined points: Fixed Hub nodes + Live traveling shipments
  const combinedPointsData = useMemo(() => {
    const hubPoints = HUBS.map((hub) => ({
      id: hub.id,
      lat: hub.lat,
      lng: hub.lng,
      color: hub.color,
      altitude: hub.id === 'riyadh' || hub.id === 'cairo' || hub.id === 'accra' ? 0.04 : 0.025,
      radius: hub.id === 'riyadh' || hub.id === 'cairo' || hub.id === 'accra' ? 0.95 : 0.65,
      name: hub.name,
      isHub: true,
    }));

    const shipmentPoints = movingShipmentPoints.map((pt) => ({
      ...pt,
      isHub: false,
    }));

    return [...hubPoints, ...shipmentPoints];
  }, [movingShipmentPoints]);

  const featuredShipment = CORRIDORS[activeShipmentIndex];

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c12] overflow-hidden my-12 shadow-2xl">
      {/* Top Header Bar */}
      <div className="p-5 sm:p-6 border-b border-white/[0.08] bg-black/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#d8b485] uppercase tracking-wider mb-1">
            <Radio size={13} className="animate-pulse text-[#d8b485]" />
            <span>Interactive WebGL 3D Globe</span>
            <span className="text-zinc-500">·</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              Riyadh · Cairo · Accra Real-Time Corridors
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Global Supply Chain Network & Autonomous Transport Corridors
          </h3>
        </div>

        {/* Global Network Action Controls: Auto-Rotate, Speed, Tri-Hub Focus */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`min-h-[44px] px-3.5 py-2 rounded-lg border border-white/10 transition-colors flex items-center gap-2 cursor-pointer ${
              isAutoRotating
                ? 'bg-[#d8b485]/15 text-[#d8b485] border-[#d8b485]/40 font-bold'
                : 'bg-white/5 text-zinc-300 hover:text-white'
            }`}
            title={isAutoRotating ? 'Pause rotation' : 'Resume auto-rotation'}
          >
            {isAutoRotating ? <Pause size={13} /> : <Play size={13} />}
            <span>{isAutoRotating ? 'Auto-Rotating' : 'Spin Paused'}</span>
          </button>

          <button
            onClick={handleFocusTriHub}
            className="min-h-[44px] px-3.5 py-2 rounded-lg border border-[#d8b485]/30 bg-[#d8b485]/10 hover:bg-[#d8b485]/20 text-[#d8b485] font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            title="Focus on Middle East & African Artery"
          >
            <Compass size={13} />
            <span>KSA ⇄ Egypt ⇄ Ghana Core</span>
          </button>

          <button
            onClick={() => {
              setIsAutoRotating(true);
              setOrbitSpeed(0.85);
              globeRef.current?.pointOfView({ lat: 20.0, lng: 15.0, altitude: 2.35 }, 1200);
            }}
            className="min-h-[44px] px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Reset to Full Overview"
          >
            <RotateCw size={13} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage: 2-Column Split (WebGL 3D Globe on Left, Dynamic Dossier on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* WebGL 3D Globe Canvas (7 Cols) — Selected Element styled as high-tech tactical operations deck */}
        <div className="lg:col-span-7 p-3 sm:p-6 flex flex-col justify-between relative bg-radial from-blue-950/25 via-black/90 to-[#0a0a10]">
          {/* Tactical Corner HUD Reticles */}
          <div className="absolute top-3 left-4 text-[#d8b485] font-mono text-[9px] pointer-events-none select-none z-10 flex items-center gap-1.5 opacity-75">
            <span>┌ [ORBIT: {currentOrbitCoords.lat.toFixed(1)}°N {currentOrbitCoords.lng.toFixed(1)}°E · ALT {currentOrbitCoords.alt.toFixed(2)}]</span>
          </div>
          <div className="absolute top-3 right-4 text-emerald-400 font-mono text-[9px] pointer-events-none select-none z-10 flex items-center gap-1.5 opacity-75">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>[AES-256 TELEMETRY STREAMING] ┐</span>
          </div>

          {/* Quick Regional Nodes Selector Strip with glowing beacon indicators */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono scrollbar-none z-10 mb-2 mt-5">
            <span className="text-zinc-500 uppercase text-[10px] shrink-0 pr-1">Pulsing Nodes:</span>
            {HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => handleFocusHub(hub)}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg transition-all whitespace-nowrap text-xs cursor-pointer flex items-center gap-2 ${
                  selectedHubId === hub.id
                    ? 'bg-[#d8b485] text-zinc-950 font-bold shadow-[0_0_12px_rgba(216,180,133,0.5)] border border-[#d8b485]'
                    : hub.id === 'riyadh'
                    ? 'bg-[#d8b485]/10 text-[#d8b485] border border-[#d8b485]/30 hover:bg-[#d8b485]/20'
                    : hub.id === 'cairo'
                    ? 'bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20'
                    : hub.id === 'accra'
                    ? 'bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/30 hover:bg-[#34d399]/20'
                    : 'bg-white/5 text-zinc-300 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {(hub.id === 'riyadh' || hub.id === 'cairo' || hub.id === 'accra') && (
                  <span
                    className={`w-2 h-2 rounded-full animate-ping ${
                      hub.id === 'riyadh'
                        ? 'bg-[#d8b485]'
                        : hub.id === 'cairo'
                        ? 'bg-[#38bdf8]'
                        : 'bg-[#34d399]'
                    }`}
                  />
                )}
                <span>{hub.city}</span>
                <span className="text-[10px] opacity-75">({hub.code.split('/')[0].trim()})</span>
              </button>
            ))}
          </div>

          {/* Interactive react-globe.gl 3D Viewport with touch-pan-y for smooth vertical scrolling */}
          <div
            ref={containerRef}
            className="relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden select-none rounded-lg border border-white/5 bg-black/40 touch-pan-y"
          >
            {/* Atmospheric Background Radial Glow */}
            <div
              className="absolute w-[460px] h-[460px] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(216,180,133,0.07) 50%, rgba(56,189,248,0.12) 75%, transparent 100%)',
              }}
            />

            <Globe
              ref={globeRef}
              width={dimensions.width}
              height={dimensions.height}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              showAtmosphere={showAtmosphere}
              atmosphereColor="#d8b485"
              atmosphereAltitude={0.18}
              // Country Polygons highlighting Saudi Arabia, Egypt, Ghana
              polygonsData={countryPolygons}
              polygonCapColor={(d: any) => {
                const name = d.properties?.name;
                if (name === 'Saudi Arabia') return 'rgba(216, 180, 133, 0.4)';
                if (name === 'Egypt') return 'rgba(56, 189, 248, 0.4)';
                if (name === 'Ghana') return 'rgba(52, 211, 153, 0.4)';
                return '#131822';
              }}
              polygonSideColor={(d: any) => {
                const name = d.properties?.name;
                if (name === 'Saudi Arabia') return 'rgba(216, 180, 133, 0.3)';
                if (name === 'Egypt') return 'rgba(56, 189, 248, 0.3)';
                if (name === 'Ghana') return 'rgba(52, 211, 153, 0.3)';
                return '#0c1017';
              }}
              polygonStrokeColor={(d: any) => {
                const name = d.properties?.name;
                if (name === 'Saudi Arabia') return 'rgba(216, 180, 133, 0.95)';
                if (name === 'Egypt') return 'rgba(56, 189, 248, 0.95)';
                if (name === 'Ghana') return 'rgba(52, 211, 153, 0.95)';
                return 'rgba(255, 255, 255, 0.1)';
              }}
              polygonAltitude={(d: any) => {
                const name = d.properties?.name;
                if (name === 'Saudi Arabia' || name === 'Egypt' || name === 'Ghana') {
                  return 0.018;
                }
                return 0.007;
              }}
              onPolygonClick={(polygon: any) => {
                const name = polygon.properties?.name;
                if (name === 'Saudi Arabia') handleFocusHub(HUBS[0]);
                else if (name === 'Egypt') handleFocusHub(HUBS[1]);
                else if (name === 'Ghana') handleFocusHub(HUBS[2]);
              }}
              // Active Transport Corridor Arcs with live traveling pulses
              arcsData={CORRIDORS}
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor="color"
              arcAltitude={0.25}
              arcStroke="stroke"
              arcDashLength={0.44}
              arcDashGap={0.22}
              arcDashInitialGap={(d: any) => 0.15}
              arcDashAnimateTime={2000}
              onArcClick={(arc: any) => handleFocusCorridor(arc)}
              // Concentric Pulsing Radar Rings at Riyadh, Cairo, Accra + Global Hubs
              ringsData={ringsData}
              ringLat="lat"
              ringLng="lng"
              ringColor={(d: any) => (t: number) => {
                const alpha = Math.max(0, 1 - t);
                return d.color === '#d8b485'
                  ? `rgba(216, 180, 133, ${alpha})`
                  : d.color === '#38bdf8'
                  ? `rgba(56, 189, 248, ${alpha})`
                  : d.color === '#34d399'
                  ? `rgba(52, 211, 153, ${alpha})`
                  : `rgba(216, 180, 133, ${alpha})`;
              }}
              ringMaxRadius="maxR"
              ringPropagationSpeed="propagationSpeed"
              ringRepeatPeriod="repeatPeriod"
              // Combined Points: Hubs + Live Moving Cargo Ships/Planes
              pointsData={combinedPointsData}
              pointLat="lat"
              pointLng="lng"
              pointColor="color"
              pointAltitude="altitude"
              pointRadius="radius"
              pointsMerge={false}
              onPointClick={(pt: any) => {
                if (pt.isHub) {
                  const targetHub = HUBS.find((h) => h.id === pt.id);
                  if (targetHub) handleFocusHub(targetHub);
                } else if (pt.corridorId) {
                  const targetCorridor = CORRIDORS.find((c) => c.id === pt.corridorId);
                  if (targetCorridor) handleFocusCorridor(targetCorridor);
                }
              }}
              // Hub Text Labels
              labelsData={labelsData}
              labelLat="lat"
              labelLng="lng"
              labelText="text"
              labelSize="size"
              labelColor="color"
              labelDotRadius="dotRadius"
              labelAltitude={0.035}
              onLabelClick={(label: any) => {
                const matchingHub = HUBS.find((h) => label.text.includes(h.name));
                if (matchingHub) handleFocusHub(matchingHub);
              }}
            />

            {/* Tactical Camera & Zoom Dock */}
            <div className="absolute bottom-3 right-3 flex flex-col gap-1.5 z-10">
              <button
                onClick={() => handleZoom(-0.25)}
                className="w-8 h-8 rounded bg-black/80 hover:bg-black text-white border border-white/20 flex items-center justify-center font-mono text-sm transition-colors cursor-pointer shadow-md"
                title="Zoom in"
              >
                +
              </button>
              <button
                onClick={() => handleZoom(0.25)}
                className="w-8 h-8 rounded bg-black/80 hover:bg-black text-white border border-white/20 flex items-center justify-center font-mono text-sm transition-colors cursor-pointer shadow-md"
                title="Zoom out"
              >
                -
              </button>
              <button
                onClick={() => setShowAtmosphere(!showAtmosphere)}
                className={`w-8 h-8 rounded border flex items-center justify-center transition-colors cursor-pointer shadow-md ${
                  showAtmosphere
                    ? 'bg-[#d8b485]/20 text-[#d8b485] border-[#d8b485]/40'
                    : 'bg-black/80 text-zinc-400 border-white/20'
                }`}
                title="Toggle Atmospheric Halo"
              >
                <Sparkles size={14} />
              </button>
            </div>

            {/* Drag & Rotation Guide Overlay */}
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-400 pointer-events-none flex items-center gap-1.5 bg-black/75 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
              <Compass size={11} className="text-[#d8b485]" />
              <span>3D Orbit: Drag to rotate · Scroll to zoom · Click Riyadh, Cairo, or Accra nodes</span>
            </div>

            {/* Live Streaming Signal Badge */}
            <div className="absolute top-3 right-3 font-mono text-[10px] px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-white/15 flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-zinc-300">TELEMETRY:</span>
              <span className="text-white font-bold tabular-nums">#{livePingCounter}</span>
              <span className="text-emerald-400 font-bold tabular-nums">{liveLatencyOsc}ms</span>
            </div>
          </div>

          {/* Live Traveling Shipment Floating Banner */}
          <div className="mt-3 p-2.5 rounded bg-black/60 border border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#fef08a] animate-pulse shrink-0" />
              <span className="text-[#d8b485] font-bold shrink-0">ACTIVE TRANSIT:</span>
              <span className="text-zinc-200 truncate font-semibold">
                {featuredShipment.activeShipmentCode} · {featuredShipment.name}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-emerald-400 text-[11px] tabular-nums font-bold">
                {featuredShipment.carrierNode.split('/')[0].trim()}
              </span>
              <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {featuredShipment.cipher.split('/')[0].trim()}
              </span>
            </div>
          </div>

          {/* Quick Corridor Carousel Tabs */}
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-mono uppercase text-zinc-500 shrink-0">All Corridors:</span>
            {CORRIDORS.map((corridor, idx) => (
              <button
                key={`tab-corridor-${corridor.id}`}
                onClick={() => handleFocusCorridor(corridor)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeCorridorId === corridor.id
                    ? 'bg-white/15 text-white font-bold border border-white/20 shadow-sm'
                    : 'text-zinc-400 hover:text-white bg-black/40 border border-white/5'
                }`}
              >
                0{idx + 1}. {corridor.from.split(' ')[0]} ⇄ {corridor.to.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Corridor & Node Technical Dossier (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#0e0e16]">
          <div>
            {/* Dossier Header with Live Status Tag */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">
                  Real-Time Corridor Telemetry
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  LIVE LOCKED
                </span>
              </div>
            </div>

            {/* Corridor Title & Route */}
            <div className="mb-6">
              <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center justify-between">
                <span>Active Track:</span>
                <span className="text-[#d8b485] font-bold">#{activeCorridor.activeShipmentCode}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {activeCorridor.name}
              </h4>
              <p className="text-xs font-mono text-[#d8b485] flex items-center gap-1.5">
                <span>{activeCorridor.from}</span>
                <span>&rarr;</span>
                <span>{activeCorridor.to}</span>
              </p>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs mb-6">
              <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase">Geodesic Distance</div>
                <div className="text-base font-bold text-white mt-0.5 tabular-nums">
                  {activeCorridor.distanceKm.toLocaleString()} km
                </div>
              </div>

              <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase">Telemetry Latency</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5 tabular-nums flex items-center gap-1">
                  <span>{activeCorridor.latencyMs}ms</span>
                  <span className="text-[10px] text-zinc-400">({liveLatencyOsc}ms net)</span>
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
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs space-y-2.5 mb-6">
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
                <span className="text-emerald-400 font-bold">{activeCorridor.status}</span>
              </div>
              <div className="flex justify-between items-center text-[11px] pt-1.5 border-t border-white/5">
                <span className="text-zinc-500">Packets Ingested:</span>
                <span className="text-[#d8b485] font-bold tabular-nums">
                  {packetsRouted.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Regional Featured Hub Deep-Dive Card (Riyadh, Cairo, Accra) */}
          <div className="pt-4 border-t border-white/5 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#d8b485] font-bold uppercase tracking-wider">
                Active Node Dossier: {selectedHub.city}
              </span>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Radar Wave Active
              </span>
            </div>

            {/* 3 Quick Hub Buttons */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <button
                type="button"
                onClick={() => handleFocusHub(HUBS[0])}
                className={`p-3 min-h-[48px] rounded-lg transition-all cursor-pointer border flex flex-col items-center justify-center ${
                  selectedHubId === 'riyadh'
                    ? 'bg-[#d8b485]/20 border-[#d8b485] text-white shadow-[0_0_8px_rgba(216,180,133,0.3)]'
                    : 'bg-black/60 border-white/5 hover:border-[#d8b485]/40 text-zinc-300'
                }`}
              >
                <div className="font-bold text-white flex items-center justify-center gap-1">
                  <span>🇸🇦 Riyadh</span>
                </div>
                <div className="text-[10px] text-[#d8b485] font-semibold mt-0.5">248 Carriers</div>
                <div className="text-[9px] text-zinc-500">RUH / KSA</div>
              </button>

              <button
                type="button"
                onClick={() => handleFocusHub(HUBS[1])}
                className={`p-3 min-h-[48px] rounded-lg transition-all cursor-pointer border flex flex-col items-center justify-center ${
                  selectedHubId === 'cairo'
                    ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-white shadow-[0_0_8px_rgba(56,189,248,0.3)]'
                    : 'bg-black/60 border-white/5 hover:border-[#38bdf8]/40 text-zinc-300'
                }`}
              >
                <div className="font-bold text-white flex items-center justify-center gap-1">
                  <span>🇪🇬 Cairo</span>
                </div>
                <div className="text-[10px] text-[#38bdf8] font-semibold mt-0.5">212 Carriers</div>
                <div className="text-[9px] text-zinc-500">CAI / EGY</div>
              </button>

              <button
                type="button"
                onClick={() => handleFocusHub(HUBS[2])}
                className={`p-3 min-h-[48px] rounded-lg transition-all cursor-pointer border flex flex-col items-center justify-center ${
                  selectedHubId === 'accra'
                    ? 'bg-[#34d399]/20 border-[#34d399] text-white shadow-[0_0_8px_rgba(52,211,153,0.3)]'
                    : 'bg-black/60 border-white/5 hover:border-[#34d399]/40 text-zinc-300'
                }`}
              >
                <div className="font-bold text-white flex items-center justify-center gap-1">
                  <span>🇬🇭 Accra</span>
                </div>
                <div className="text-[10px] text-[#34d399] font-semibold mt-0.5">164 Carriers</div>
                <div className="text-[9px] text-zinc-500">ACC / GHA</div>
              </button>
            </div>

            {/* Selected Hub Spec Box */}
            <div className="p-3 rounded bg-zinc-950/80 border border-white/5 text-[11px] space-y-1.5 text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Role:</span>
                <span className="text-white text-right font-medium max-w-[240px] truncate">
                  {selectedHub.role}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Throughput:</span>
                <span className="text-emerald-400 font-bold tabular-nums">
                  {selectedHub.throughputTonsDay.toLocaleString()} Tons/Day
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Customs Cleared Today:</span>
                <span className="text-[#d8b485] font-bold tabular-nums">
                  {selectedHub.customsClearedToday.toLocaleString()} Manifests
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Root Certification:</span>
                <span className="text-zinc-300 truncate max-w-[200px]">
                  {selectedHub.encryptionCert}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-zinc-500 leading-relaxed font-sans">
              Live orbital rendering via Three.js WebGL & react-globe.gl. All transport lines stream authenticated telemetry packets in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
