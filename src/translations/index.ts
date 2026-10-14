export type Language = 'en' | 'ar';

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  kicker: string;
  headline: string;
  summary: string;
  capabilities: string[];
  takeaway: string;
  badge: string;
  ctaText: string;
  specDetails: {
    sla: string;
    protocol: string;
    compliance: string;
    custodyOrLatency: string;
  };
}

export interface PillarsSectionTranslation {
  badge: string;
  heading: string;
  leadThesis: string;
  filterAll: string;
  inspectSpecs: string;
  closeSpecs: string;
  items: PillarItem[];
}

export interface TranslationDictionary {
  nav: {
    brand: string;
    tagline: string;
    pillars: string;
    process: string;
    calculator: string;
    solutions: string;
    audit: string;
    faq: string;
    startProject: string;
    start: string;
    switchLang: string;
    themeToggleDark: string;
    themeToggleLight: string;
  };
  hero: {
    pilotBadge: string;
    titlePrimary: string;
    titleSecondary: string;
    subtitle: string;
    startBtn: string;
    auditBtn: string;
    metrics: {
      value: string;
      label: string;
    }[];
  };
  marquee: {
    title: string;
  };
  pillars: PillarsSectionTranslation;
  problem: {
    badge: string;
    heading: string;
    compareBtnShow: string;
    compareBtnHide: string;
    card1: {
      badge: string;
      title: string;
      desc: string;
      statLabel: string;
      statValue: string;
    };
    card2: {
      badge: string;
      title: string;
      desc: string;
      statLabel: string;
      statValue: string;
    };
    matrix: {
      title: string;
      colDimension: string;
      colRent: string;
      colMortgage: string;
      colUnion: string;
      rows: {
        dimension: string;
        rent: string;
        mortgage: string;
        union: string;
      }[];
    };
  };
  calculator: {
    badge: string;
    heading: string;
    subtitle: string;
    incomeLabel: string;
    incomeTooltip: string;
    savingsLabel: string;
    savingsTooltip: string;
    dualIncomeLabel: string;
    coinvestLabel: string;
    soloCapLabel: string;
    unionBoostLabel: string;
    totalPowerLabel: string;
    chartTitle: string;
    chartSoloLabel: string;
    chartUnionLabel: string;
    chartDesc: string;
    applyCta: string;
  };
  process: {
    badge: string;
    heading: string;
    subtitle: string;
    footnote: string;
    footnoteLink: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      time: string;
      benefit: string;
    }[];
  };
  stats: {
    heading: string;
    headingAccent: string;
    startLink: string;
    card1: {
      quote: string;
      body: string;
      author: string;
      role: string;
    };
    card2: {
      badge: string;
      title: string;
      metric: string;
      sub: string;
      caseStudyBtn: string;
    };
    card3: {
      title: string;
      body: string;
      emailLabel: string;
      phoneLabel: string;
    };
    telemetry: {
      badge: string;
      title: string;
      subtitle: string;
      liveStatus: string;
      viewConsolidated: string;
      viewRisk: string;
      viewVelocity: string;
      kpiRiskTitle: string;
      kpiRiskValue: string;
      kpiRiskSub: string;
      kpiVelocityTitle: string;
      kpiVelocityValue: string;
      kpiVelocitySub: string;
      kpiVolumeTitle: string;
      kpiVolumeValue: string;
      kpiVolumeSub: string;
      kpiSlippageTitle: string;
      kpiSlippageValue: string;
      kpiSlippageSub: string;
      streamingActive: string;
      streamingPaused: string;
      feedEventPrefix: string;
      chartRiskLabel: string;
      chartBaselineLabel: string;
      chartVelocityLabel: string;
      chartThroughputLabel: string;
      timeRange1h: string;
      timeRange24h: string;
      timeRange7d: string;
      timeRange30d: string;
      footerProof: string;
    };
  };
  caseStudy: {
    badge: string;
    tag: string;
    title: string;
    meta: string;
    statTarget: string;
    statBank: string;
    statUnion: string;
    statSaving: string;
    section1Title: string;
    section1Body: string;
    section2Title: string;
    section2Body: string;
    calloutTitle: string;
    calloutBody: string;
    footerCert: string;
    footerCta: string;
  };
  leadMagnet: {
    badge: string;
    title: string;
    desc: string;
    bullets: string[];
    emailLabel: string;
    urlLabel: string;
    submitBtn: string;
    submittingBtn: string;
    spamNote: string;
    successTitle: string;
    successDispatched: string;
    downloadBtn: string;
    resetBtn: string;
  };
  solutions: {
    badge: string;
    heading: string;
    card1: {
      tag: string;
      title: string;
      desc: string;
      features: string[];
      btnText: string;
    };
    card2: {
      tag: string;
      title: string;
      desc: string;
      features: string[];
      btnText: string;
    };
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    websiteLabel: string;
    budgetLabel: string;
    budgetOptions: { value: string; label: string }[];
    timelineLabel: string;
    timelineOptions: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    routingDirect: string;
    draftAutosaved: string;
    resetDraft: string;
    successBadge: string;
    successHeading: string;
    successBody: string;
    summaryHeading: string;
    openMailClient: string;
    submitAnother: string;
  };
  faq: {
    badge: string;
    heading: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    copyright: string;
    links: { label: string; href: string }[];
    status: string;
    directEmail: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      brand: 'Union.svc',
      tagline: 'Institutional Infrastructure',
      pillars: 'FOUR PILLARS',
      process: 'PROTOCOL',
      calculator: 'SIMULATOR',
      solutions: 'SOLUTIONS',
      audit: 'INTELLIGENCE',
      faq: 'FAQ',
      startProject: 'Deploy Infrastructure',
      start: 'Deploy',
      switchLang: 'العربية',
      themeToggleDark: 'Dark Mode',
      themeToggleLight: 'Light Mode',
    },
    hero: {
      pilotBadge: 'INSTITUTIONAL INFRASTRUCTURE',
      titlePrimary: 'Risk Mitigation. Operational Scale.',
      titleSecondary: 'Liquidity Efficiency & Structural Trust.',
      subtitle:
        'Deploying institutional-grade programmable escrow, liquidity brokerage, intelligent supply-chain layers, and enterprise systems integration for sovereign and commercial stakeholders.',
      startBtn: 'DEPLOY INFRASTRUCTURE',
      auditBtn: 'ACCESS INTELLIGENCE DOSSIER',
      metrics: [
        { value: '$2.4B+', label: 'Escrow Volume Secured' },
        { value: '<15ms', label: 'API & Telemetry Latency' },
        { value: '40+', label: 'Regulated Jurisdictions' },
        { value: '99.99%', label: 'Settlement Uptime' },
      ],
    },
    marquee: {
      title: 'TRUSTED BY INSTITUTIONAL PARTNERS, CUSTODIANS & ENTERPRISE NETWORKS',
    },
    pillars: {
      badge: 'THE FOUR STRATEGIC PILLARS // INVESTOR-GRADE EXPANSION',
      heading: 'Infrastructure Engineered for High-Value Stakeholders',
      leadThesis:
        'Institutional architecture for risk mitigation, operational scale, and structural trust.',
      filterAll: 'All 4 Pillars',
      inspectSpecs: 'Inspect Architecture',
      closeSpecs: 'Hide Specs',
      items: [
        {
          id: 'escrow',
          number: '01',
          title: 'Escrow Solutions',
          kicker: 'INSTITUTIONAL ESCROW INFRASTRUCTURE',
          headline: 'Eradicating counterparty risk through automated capital containment.',
          summary:
            'We deploy programmable escrow architecture that safeguards high-value transactions. Capital remains securely sequestered in regulated custodian accounts, releasing programmatically only when predefined operational or legal milestones are met. This structure creates an immutable audit trail, providing absolute legal certainty for both buyers and sellers.',
          capabilities: [
            'Multi-jurisdictional compliance frameworks',
            'Automated programmatic settlement',
            'Enterprise dispute mitigation workflows',
            'High-value commercial & real estate execution',
          ],
          takeaway: '“Absolute capital protection until verified delivery.”',
          badge: 'Capital Containment',
          ctaText: 'Deploy Escrow Solutions',
          specDetails: {
            sla: '< 60 seconds milestone release',
            protocol: 'Smart Custodian Multi-Sig Vault',
            compliance: 'FINRA / Dutch Civil Code Art. 166 Compliant',
            custodyOrLatency: 'Tier-1 Regulated Custodial Banking',
          },
        },
        {
          id: 'brokerage',
          number: '02',
          title: 'Financial Brokerage',
          kicker: 'LIQUIDITY & MARKET BROKERAGE',
          headline: 'Transparent asset exchange engineered for institutional velocity.',
          summary:
            'Navigate multi-currency environments and complex asset exchanges with deep liquidity access and real-time market telemetry. We eliminate pricing opacity by delivering verified, competitive rates and deep market analytics prior to execution—minimizing slippage and maximizing capital efficiency.',
          capabilities: [
            'Real-time market data telemetry',
            'Deep institutional liquidity access',
            'Multi-currency settlement routing',
            'Pre-execution rate transparency',
          ],
          takeaway: '“Absolute price visibility before capital commitment.”',
          badge: 'Liquidity Access',
          ctaText: 'Access Brokerage Liquidity',
          specDetails: {
            sla: '< 12ms trade telemetry quote rate',
            protocol: 'FIX 4.4 / REST / WebSocket Streaming',
            compliance: 'MiFID II & SEC Rule 606 Disclosure Standard',
            custodyOrLatency: 'Sub-second multi-currency routing',
          },
        },
        {
          id: 'logistics',
          number: '03',
          title: 'Logistics & Technology Networks',
          kicker: 'INTELLIGENT SUPPLY-CHAIN LAYERS',
          headline: 'End-to-end operational visibility from source to final destination.',
          summary:
            'Transform complex supply chains into unified, observable assets. Our logistics infrastructure combines real-time geographic tracking, warehouse optimization, and fleet automation into a single executive control panel, removing operational blind spots and reducing overhead.',
          capabilities: [
            'End-to-end telemetry tracking',
            'Automated warehouse orchestration',
            'Fleet management & route optimization',
            'Unified operational dashboard control',
          ],
          takeaway: '“Total asset visibility across the entire logistical lifecycle.”',
          badge: 'Supply Telemetry',
          ctaText: 'Connect Logistics Telemetry',
          specDetails: {
            sla: '99.98% GPS & Waypoint Ping Accuracy',
            protocol: 'MQTT / CoAP / Real-time Geofence Webhooks',
            compliance: 'ISO 28000 / TAPA Freight Security Certified',
            custodyOrLatency: 'Sub-second container telemetry pings',
          },
        },
        {
          id: 'telecom',
          number: '04',
          title: 'Telecom, Media & Integration',
          kicker: 'ENTERPRISE SYSTEMS INTEGRATION',
          headline: 'Seamless data orchestration powering modern commercial infrastructure.',
          summary:
            'Connect fragmented corporate systems into a cohesive operating fabric. Through robust, low-latency API architectures and enterprise-grade communication channels, we ensure that critical business signals, data streams, and media payloads integrate natively into your existing technological ecosystem.',
          capabilities: [
            'Low-latency API architecture',
            'Cross-system data synchronization',
            'Enterprise communication channels',
            'Secure tech-stack expansion',
          ],
          takeaway: '“Every critical data signal routed precisely where it belongs.”',
          badge: 'Systems Fabric',
          ctaText: 'Integrate Enterprise APIs',
          specDetails: {
            sla: '< 8ms Gateway Round-Trip Latency',
            protocol: 'gRPC / OpenAPI 3.1 / WebRTC Stream Pipes',
            compliance: 'SOC 2 Type II / ISO 27001 Security Standard',
            custodyOrLatency: '99.999% High Availability Carrier-Grade',
          },
        },
      ],
    },
    problem: {
      badge: 'STAKEHOLDER RISK ANALYSIS',
      heading: 'Why legacy structures fail high-value transactions.',
      compareBtnShow: 'Show Counterparty Risk Matrix',
      compareBtnHide: 'Hide Risk Matrix',
      card1: {
        badge: 'UNPROTECTED WIRE & SETTLEMENT',
        title: 'Capital Vulnerability & Blind Trust',
        desc: 'Traditional bank wires and opaque brokerages demand premature capital release, exposing buyers and asset managers to irrecoverable counterparty default.',
        statLabel: 'Counterparty Dispute Rate',
        statValue: '21.4% in unsequestered trade',
      },
      card2: {
        badge: 'UNION.SVC PROGRAMMABLE SHIELD',
        title: 'Automated Containment & Real-Time Telemetry',
        desc: 'By locking capital in multi-jurisdictional segregated custodian accounts with automated milestone release, risk drops to mathematical zero.',
        statLabel: 'Capital Protection Ratio',
        statValue: '100% Segregated & Audited',
      },
      matrix: {
        title: 'Structural Comparison Matrix',
        colDimension: 'Operational Dimension',
        colRent: 'Legacy Bank Wire',
        colMortgage: 'Standard Brokerage',
        colUnion: 'Union.svc Infrastructure',
        rows: [
          {
            dimension: 'Capital Protection',
            rent: 'Zero after dispatch',
            mortgage: 'T+3 delayed clawback',
            union: 'Automated escrow containment',
          },
          {
            dimension: 'Pricing Transparency',
            rent: 'Spread hidden in FX markup',
            mortgage: '30-45 bps hidden slippage',
            union: 'Verified pre-trade telemetry',
          },
          {
            dimension: 'Supply-Chain Visibility',
            rent: 'Manual manifests & PDF logs',
            mortgage: 'Siloed carrier portals',
            union: 'Unified real-time control panel',
          },
          {
            dimension: 'Data Integration Latency',
            rent: 'Batch EOD sync (24h)',
            mortgage: 'Fragmented Webhooks (hours)',
            union: '<15ms low-latency gRPC/API',
          },
        ],
      },
    },
    calculator: {
      badge: 'CAPITAL & SETTLEMENT SIMULATOR',
      heading: 'Simulate Escrow Containment & Velocity',
      subtitle:
        'Calculate projected capital security, liquidity slippage reduction, and milestone release efficiency under Union.svc architecture.',
      incomeLabel: 'Transaction / Escrow Capital Tranche (€)',
      incomeTooltip: 'Total capital value to be sequestered and programmatically routed.',
      savingsLabel: 'Target Milestone Duration (Days)',
      savingsTooltip: 'Time frame for operational milestone verification and asset handover.',
      dualIncomeLabel: 'Multi-Currency Settlement Routing Required',
      coinvestLabel: 'Select Strategic Infrastructure Pillar',
      soloCapLabel: 'Legacy Unprotected Exposure',
      unionBoostLabel: 'Slippage & Dispute Savings',
      totalPowerLabel: 'Total Capital Sequestered & Protected',
      chartTitle: '15-Year Projected Institutional Efficiency (Cumulative Yield)',
      chartSoloLabel: 'Legacy Disconnected Settlement (€)',
      chartUnionLabel: 'Union.svc Programmable Protocol (€)',
      chartDesc:
        'Projected cumulative retained enterprise value achieved through zero counterparty default, zero hidden FX spreads, and optimized supply-chain telemetry.',
      applyCta: 'Initiate Escrow Deployment With This Model',
    },
    process: {
      badge: 'THE EXECUTION PROTOCOL',
      heading: 'From capital containment to verified settlement.',
      subtitle: 'Four programmatic steps engineered for institutional velocity and legal certainty.',
      footnote:
        'Fully audited and legally enforced under international custodian standards and regulated multi-jurisdictional banking frameworks.',
      footnoteLink: 'Review compliance documentation →',
      steps: [
        {
          num: '01',
          title: 'Ingestion & Legal Audit',
          desc: 'Establish multi-jurisdictional compliance protocols, KYC/KYB tiering, and milestone definition criteria.',
          time: '24-48 Hours Onboarding',
          benefit: 'Clear legal certainty',
        },
        {
          num: '02',
          title: 'Segregated Escrow Containment',
          desc: 'Capital is locked into regulated Tier-1 custodian accounts. Zero counterparty exposure during transit.',
          time: 'Instant programmatic vaulting',
          benefit: '100% capital containment',
        },
        {
          num: '03',
          title: 'Real-Time Telemetry & Verification',
          desc: 'Logistics sensors, market data streams, and legal attestations feed directly into the execution engine.',
          time: 'Continuous telemetry stream',
          benefit: 'Zero operational blind spots',
        },
        {
          num: '04',
          title: 'Programmatic Settlement',
          desc: 'Milestones met trigger instant multi-currency disbursement and immutable cryptographic ledger logging.',
          time: 'Sub-minute automated release',
          benefit: 'Zero dispute overhead',
        },
      ],
    },
    stats: {
      heading: 'Infrastructure delivering structural trust to',
      headingAccent: 'global enterprise leaders.',
      startLink: 'Initiate Stakeholder Onboarding',
      card1: {
        quote: '“Counterparty friction in high-value trade is an engineering failure—not a legal inevitability.”',
        body: 'Large institutions lose billions each year to pricing opacity and settlement delays. Union.svc replaces hope and paper contracts with automated, observable execution.',
        author: 'Ference Feenstra',
        role: 'Managing Partner // Union.svc',
      },
      card2: {
        badge: 'INTEGRITY BENCHMARK',
        title: 'Settlement Accuracy & Retention',
        metric: '99.98%',
        sub: 'Audited Multi-Jurisdictional Transactions',
        caseStudyBtn: 'VIEW CASE DOSSIER',
      },
      card3: {
        title: 'Direct Executive Intake Desk',
        body: 'Our senior infrastructure partners review every enterprise proposal and custom transaction structure directly.',
        emailLabel: 'Contact@unionsvc.com',
        phoneLabel: '+1 (555) 019-2834',
      },
      telemetry: {
        badge: 'REAL-TIME PROOF TELEMETRY // DATA-DRIVEN AUDIT',
        title: 'Risk Mitigation & Liquidity Velocity Telemetry',
        subtitle: 'Continuous data-driven proof: monitoring programmable counterparty containment and sub-second settlement velocity across active capital corridors.',
        liveStatus: 'LIVE SECURE STREAM',
        viewConsolidated: 'Consolidated Metric Matrix',
        viewRisk: 'Risk Mitigation Containment',
        viewVelocity: 'Liquidity Velocity & Latency',
        kpiRiskTitle: 'Risk Mitigation Score',
        kpiRiskValue: '99.98%',
        kpiRiskSub: 'Zero unauthorized disbursements across $1.2B+',
        kpiVelocityTitle: 'Median Settlement Latency',
        kpiVelocityValue: '185 ms',
        kpiVelocitySub: 'Compared to 72-120 hrs legacy wire delay',
        kpiVolumeTitle: 'Active Capital Sequestered',
        kpiVolumeValue: '$184.2M',
        kpiVolumeSub: 'Bankruptcy-remote Tier-1 custodian accounts',
        kpiSlippageTitle: 'Pre-Execution Pricing Slippage',
        kpiSlippageValue: '0.00%',
        kpiSlippageSub: 'Guaranteed order-book depth verification',
        streamingActive: 'LIVE STREAM ACTIVE',
        streamingPaused: 'STREAM PAUSED',
        feedEventPrefix: 'LATEST VERIFIED TELEMETRY EVENT',
        chartRiskLabel: 'Union.svc Risk Mitigation (%)',
        chartBaselineLabel: 'Legacy Counterparty Risk Baseline (%)',
        chartVelocityLabel: 'Settlement Latency (ms)',
        chartThroughputLabel: 'Hourly Routed Volume ($M)',
        timeRange1h: '1H LIVE',
        timeRange24h: '24H TELEMETRY',
        timeRange7d: '7D AUDIT',
        timeRange30d: '30D SETTLEMENT',
        footerProof: 'Cryptographically validated against Tier-1 bank APIs and ISO 20022 message feeds. Immutable audit trail updated continuously.',
      },
    },
    caseStudy: {
      badge: 'CASE DOSSIER // MARITIME & REAL ESTATE',
      tag: 'Verified Transaction Audit',
      title: 'Apex Global: $18.4M Multi-Jurisdiction Escrow & Fleet Telemetry',
      meta: 'Sector: Cross-Border Commercial Infrastructure • Settlement: Multi-Currency USD/EUR',
      statTarget: 'Contract Value',
      statBank: 'Legacy Delay',
      statUnion: 'Union.svc Delivery',
      statSaving: 'Slippage Eliminated',
      section1Title: 'The Operational Problem',
      section1Body:
        'A multi-national consortium required instant escrow containment for an $18.4M commercial logistics acquisition with 12 distinct delivery waypoints across Northern Europe and the Mediterranean.',
      section2Title: 'The Union.svc Architecture',
      section2Body:
        'Union.svc deployed programmable escrow linked directly to automated IoT waypoint telemetry. As vessel GPS confirmed entry into port territorial waters, milestone disbursements fired automatically.',
      calloutTitle: 'Legal & Custody Certainty',
      calloutBody:
        'Both buyer and seller maintained continuous, verifiable visibility in a single executive dashboard with zero currency conversion slippage.',
      footerCert: 'Certified by International Chamber of Commerce (ICC) Guidelines',
      footerCta: 'Model Your Enterprise Transaction',
    },
    leadMagnet: {
      badge: 'EXECUTIVE INTELLIGENCE',
      title: 'Institutional Whitepaper: Risk Mitigation & Programmable Escrow',
      desc: 'Download our comprehensive 2024 institutional brief covering multi-currency liquidity routing, supply-chain IoT telemetry, and automated escrow frameworks.',
      bullets: [
        'Multi-Jurisdictional Capital Containment Blueprints',
        'Pre-Execution Telemetry & Slippage Elimination Formulas',
        'Directly Dispatched to Your Professional Inbox',
      ],
      emailLabel: 'Work / Corporate Email',
      urlLabel: 'Enterprise Domain or Target Asset URL',
      submitBtn: 'DISPATCH INTELLIGENCE DOSSIER',
      submittingBtn: 'ROUTING DOSSIER TO DESK...',
      spamNote: 'Zero marketing spam. Delivered directly to your inbox and our desk.',
      successTitle: 'Dossier Dispatched!',
      successDispatched: 'Your institutional intelligence brief was routed to',
      downloadBtn: 'Download Plaintext Intelligence Summary',
      resetBtn: 'Request Another Intelligence Audit',
    },
    solutions: {
      badge: 'ENTERPRISE INTEGRATION TIERS',
      heading: 'Select your operational entry point.',
      card1: {
        tag: 'DIAGNOSTIC & AUDIT',
        title: 'The Infrastructure & Counterparty Audit',
        desc: 'For enterprise leadership seeking to identify pricing leakage, counterparty vulnerabilities, and integration bottlenecks across active commerce channels.',
        features: [
          'Counterparty Risk & Custody Audit',
          'Slippage & FX Fee Telemetry Benchmark',
          'Detailed Protocol Integration Roadmap',
        ],
        btnText: 'Select Architecture Audit',
      },
      card2: {
        tag: 'FULL DEPLOYMENT',
        title: 'Full Multi-Pillar Enterprise Suite',
        desc: 'End-to-end integration: Programmable Escrow, Deep Brokerage Liquidity, Intelligent Supply Telemetry, and Carrier-Grade APIs.',
        features: [
          'Direct Dedicated Custodian Vaulting',
          'Real-time FIX/API & Dashboard Access',
          '24/7 Dedicated Infrastructure Partner Desk',
        ],
        btnText: 'Select Enterprise Suite',
      },
    },
    contact: {
      badge: 'DIRECT EXECUTIVE INTAKE',
      heading: 'Initiate Enterprise Infrastructure Deployment',
      subtitle:
        'Every application is routed directly to Contact@unionsvc.com for rapid evaluation by our senior infrastructure team.',
      nameLabel: 'Full Legal / Officer Name',
      emailLabel: 'Corporate Work Email',
      websiteLabel: 'Enterprise Domain / Company Website',
      budgetLabel: 'Target Capital Tranche / Engagement Scope',
      budgetOptions: [
        { value: '500k-2m', label: '$500K - $2M (Direct Escrow / Brokerage)' },
        { value: '2m-10m', label: '$2M - $10M (Multi-Jurisdiction Capital Settlement)' },
        { value: '10m-50m', label: '$10M - $50M+ (Enterprise Systems & Supply Suite)' },
        { value: '50m+', label: '$50M+ Sovereign / Institutional Tranche' },
      ],
      timelineLabel: 'Deployment Horizon',
      timelineOptions: [
        { value: 'immediate', label: 'Immediate Active Transaction (< 14 Days)' },
        { value: '30days', label: 'Quarterly Deployment (30 - 60 Days)' },
        { value: 'evaluation', label: 'Strategic Evaluation & Architecture Review' },
      ],
      messageLabel: 'Transaction Details / Operational Bottleneck',
      messagePlaceholder:
        'Specify asset class, jurisdictions involved, target currency pairs, or supply-chain telemetry scope...',
      submitBtn: 'TRANSMIT APPLICATION DIRECTLY TO CONTACT@UNIONSVC.COM',
      submittingBtn: 'TRANSMITTING SECURELY TO CONTACT@UNIONSVC.COM...',
      routingDirect: 'Transmitting Directly To:',
      draftAutosaved: 'Draft encrypted and autosaved',
      resetDraft: 'Reset Draft',
      successBadge: 'VERIFIED INTAKE AT CONTACT@UNIONSVC.COM',
      successHeading: 'Enterprise Application Transmitted',
      successBody:
        'Your infrastructure request has been securely recorded and dispatched directly to Contact@unionsvc.com. A senior managing partner will review your specifications and reply within 24 business hours.',
      summaryHeading: 'TRANSMISSION RECEIPT & ROUTING',
      openMailClient: 'Open in Local Email Client',
      submitAnother: 'Submit Another Transaction Dossier',
    },
    faq: {
      badge: 'LEGAL, REGULATORY & ARCHITECTURE FAQ',
      heading: 'Frequently Asked Questions',
      subtitle: 'Clear answers on custody safeguards, settlement velocity, and technical integration.',
      items: [
        {
          q: 'Where is capital stored during Escrow Solutions deployment?',
          a: 'All capital is sequestered exclusively in segregated, bankruptcy-remote accounts with Tier-1 regulated custodian banks across certified jurisdictions. Union.svc never co-mingles operational funds with client capital.',
        },
        {
          q: 'How does the Financial Brokerage pillar eliminate pricing opacity?',
          a: 'We provide verified, real-time market data telemetry and pre-execution rate transparency via FIX protocol and WebSocket streams. Institutional participants observe true depth of book and verified execution quotes before committing capital.',
        },
        {
          q: 'Can Logistics & Technology Networks integrate with legacy ERPs (SAP, Oracle, NetSuite)?',
          a: 'Yes. Our Telecom, Media & Integration layer provides sub-15ms REST and gRPC API adapters, enabling automated two-way synchronization between your existing ERP and our real-time telemetry control panel.',
        },
        {
          q: 'What triggers automated escrow release?',
          a: 'Release conditions are codified in programmable smart milestone agreements. These require dual cryptographic confirmation or authenticated real-time telemetry signals (e.g. verified GPS port entry, customs clearance, or signed legal bill of lading).',
        },
        {
          q: 'Who reviews submitted applications?',
          a: 'Every intake sent through this portal is dispatched directly to Contact@unionsvc.com and evaluated by a designated senior managing partner within one business day.',
        },
      ],
    },
    footer: {
      copyright: '© 2024 Union.svc Corporation. All rights reserved.',
      links: [
        { label: 'Escrow Infrastructure', href: '#pillar-escrow' },
        { label: 'Financial Brokerage', href: '#pillar-brokerage' },
        { label: 'Logistics Telemetry', href: '#pillar-logistics' },
        { label: 'Systems API', href: '#pillar-telecom' },
        { label: 'Direct Intake Desk', href: '#contact' },
      ],
      status: 'ALL INSTITUTIONAL SYSTEMS OPERATIONAL',
      directEmail: 'Contact@unionsvc.com',
    },
  },
  ar: {
    nav: {
      brand: 'Union.svc',
      tagline: 'البنية التحتية المؤسسية',
      pillars: 'الركائز الأربع',
      process: 'بروتوكول التنفيذ',
      calculator: 'محاكي رأس المال',
      solutions: 'الحلول المؤسسية',
      audit: 'تقرير الجدوى',
      faq: 'الأسئلة الشائعة',
      startProject: 'نشر البنية التحتية',
      start: 'بدء التنفيذ',
      switchLang: 'English',
      themeToggleDark: 'الوضع الداكن',
      themeToggleLight: 'الوضع الفاتح',
    },
    hero: {
      pilotBadge: 'بنية تحتية للمؤسسات وكبار المستثمرين',
      titlePrimary: 'الحد من المخاطر. التوسع التشغيلي.',
      titleSecondary: 'كفاءة السيولة النقدية والموثوقية الهيكلية.',
      subtitle:
        'نشر معمارية الضمان المالي المبرمج، وساطة السيولة العميقة، وطبقات سلاسل الإمداد الذكية، وتكامل نظم المؤسسات الكبرى لخدمة الكيانات السيادية والتجارية العالمية.',
      startBtn: 'نشر البنية التحتية للمؤسسات',
      auditBtn: 'طلب تقرير الجدوى التنفيذي',
      metrics: [
        { value: '+$2.4B', label: 'حجم الأموال المحمية بالضمان' },
        { value: '15ms>', label: 'زمن استجابة واجهات البرمجة' },
        { value: '+40', label: 'اختصاص قضائي ومنظم دولياً' },
        { value: '99.99%', label: 'جاهزية التسويات البرمجية' },
      ],
    },
    marquee: {
      title: 'معتمد وموثوق من شركاء مؤسسيين، أمناء حفظ، وشبكات تجارية كبرى',
    },
    pillars: {
      badge: 'الركائز الاستراتيجية الأربع // المعمارية المؤسسية',
      heading: 'بنية تحتية مصممة لأصحاب المصلحة وكبار المستثمرين',
      leadThesis:
        'معمارية مؤسسية لإدارة المخاطر، التوسع التشغيلي، والموثوقية الهيكلية.',
      filterAll: 'كافة الركائز الأربع',
      inspectSpecs: 'فحص المعمارية التقنية',
      closeSpecs: 'إخفاء المواصفات',
      items: [
        {
          id: 'escrow',
          number: '01',
          title: 'حلول الضمان المالي',
          kicker: 'البنية التحتية المؤسسية للضمان المالي (Escrow)',
          headline: 'القضاء على مخاطر الطرف المقابل من خلال الاحتواء الآلي لرأس المال.',
          summary:
            'نقوم بتطبيق هندسة برمجية متطورة للضمان المالي لحماية الصفقات ذات القيمة العالية. يبقى رأس المال محتجزاً بأمان في حسابات أمناء خاضعة للتنظيم والرقابة، ولا يتم تحريره إلا برمجياً عند استيفاء المعالم التشغيلية أو القانونية المحددة مسبقاً، مما يخلق سجلاً تدقيقياً غير قابل للتلاعب يوفر يقيناً قانونياً مطلقاً للمشتري والبائع.',
          capabilities: [
            'أطر امتثال تنظيمية متعددة الاختصاصات القضائية',
            'تسوية برمجية آلية للأموال والصفقات',
            'مسارات عمل متقدمة لفض النزاعات التجارية',
            'تنفيذ صفقات تجارية وعقارية عالية القيمة',
          ],
          takeaway: '“حماية مطلقة لرأس المال حتى التحقق التام من التسليم.”',
          badge: 'احتواء رأس المال',
          ctaText: 'نشر حلول الضمان المالي',
          specDetails: {
            sla: 'تحرير الأموال خلال أقل من 60 ثانية بعد التحقق',
            protocol: 'خزائن متعددة التواقيع معتمدة لدى أمناء الحفظ',
            compliance: 'متوافق مع لوائح FINRA والقانون المدني الأوروبي',
            custodyOrLatency: 'حسابات بنكية منفصلة ومحمية من الإفلاس',
          },
        },
        {
          id: 'brokerage',
          number: '02',
          title: 'الوساطة المالية والسيولة',
          kicker: 'وساطة السيولة والأسواق المالية',
          headline: 'تبادل شفاف للأصول مصمم للسرعة المؤسسية القصوى.',
          summary:
            'تنقل بسلاسة عبر بيئات متعددة العملات وعمليات تبادل الأصول المعقدة بفضل الوصول المباشر إلى سيولة مؤسسية عميقة وقياس فوري لبيانات السوق. نحن نزيل ضبابية الأسعار عبر تقديم أسعار تنافسية موثقة وتحليلات عميقة للسوق قبل التنفيذ—مما يقلل الانزلاق السعري ويعظم كفاءة رأس المال.',
          capabilities: [
            'قياس وبث فوري لبيانات السوق عن بُعد',
            'نفاذ مباشر لسيولة مؤسسية عميقة',
            'توجيه التسويات عبر عملات متعددة',
            'شفافية الأسعار المسبقة قبل التنفيذ',
          ],
          takeaway: '“وضوح مطلق للأسعار قبل الالتزام برأس المال.”',
          badge: 'نفاذ السيولة',
          ctaText: 'طلب الوصول لسيولة الوساطة',
          specDetails: {
            sla: 'بث تسعير الأصول خلال أقل من 12 ميلي ثانية',
            protocol: 'بروتوكولات FIX 4.4 و WebSockets اللحظية',
            compliance: 'معايير الإفصاح والتنفيذ الأمثل MiFID II و SEC',
            custodyOrLatency: 'توجيه آلي فوري عبر مختلف العملات العالمية',
          },
        },
        {
          id: 'logistics',
          number: '03',
          title: 'شبكات اللوجستيات والتكنولوجيا',
          kicker: 'طبقات سلاسل الإمداد الذكية',
          headline: 'رؤية تشغيلية شاملة من المصدر حتى الوجهة النهائية.',
          summary:
            'حوّل سلاسل الإمداد المعقدة إلى أصول موحدة ومرئية بالكامل. تجمع بنيتنا التحتية للخدمات اللوجستية بين التتبع الجغرافي الفوري، وتحسين المستودعات، وأتمتة الأساطيل ضمن لوحة تحكم تنفيذية موحدة، مما يقضي على النقاط العمياء ويخفض التكاليف التشغيلية.',
          capabilities: [
            'تتبع شامل وقياس متواصل عبر دورة الإمداد',
            'إدارة وتنسيق آلي للمستودعات',
            'إدارة الأساطيل وتحسين مسارات النقل',
            'لوحة تحكم تنفيذية موحدة للعمليات',
          ],
          takeaway: '“رؤية شاملة للأصول عبر كامل دورة حياة العمليات اللوجستية.”',
          badge: 'تتبع سلاسل الإمداد',
          ctaText: 'ربط تتبع اللوجستيات الذكية',
          specDetails: {
            sla: 'دقة تتبع موقعي وتحديثات جغرافية بنسبة 99.98%',
            protocol: 'أجهزة استشعار إنترنت الأشياء (IoT) عبر MQTT',
            compliance: 'شهادات أمن الشحن وسلاسل الإمداد ISO 28000',
            custodyOrLatency: 'تحديثات لحظية لحاويات الشحن والبضائع',
          },
        },
        {
          id: 'telecom',
          number: '04',
          title: 'الاتصالات والإعلام وتكامل النظم',
          kicker: 'تكامل أنظمة المؤسسات الكبرى',
          headline: 'تنسيق سلس للبيانات يدير البنية التحتية التجارية الحديثة.',
          summary:
            'اربط الأنظمة المؤسسية المجزأة في نسيج تشغيلي موحد ومتماسك. من خلال بنيات واجهات البرمجة (APIs) منخفضة زمن الاستجابة وقنوات الاتصال المؤسسية الآمنة، نضمن تكامل الإشارات التجارية الحيوية وتدفقات البيانات وحمولات الوسائط بسلاسة في منظومتك التقنية الحالية.',
          capabilities: [
            'بنية واجهات برمجة تطبيقات (API) فائقة السرعة ومنخفضة الكمون',
            'مزامنة موحدة للبيانات عبر مختلف الأنظمة',
            'قنوات اتصال مؤسسية مشفرة وعالية الموثوقية',
            'توسيع آمن للبنية التكنولوجية للمنشأة',
          ],
          takeaway: '“توجيه دقيق لكل إشارة بيانات حيوية إلى موقعها المستهدف.”',
          badge: 'تكامل النظم',
          ctaText: 'تكامل واجهات البرمجة المؤسسية',
          specDetails: {
            sla: 'زمن استجابة أقل من 8 ميلي ثانية لبوابة البيانات',
            protocol: 'واجهات gRPC فائقة الأداء و WebRTC و REST',
            compliance: 'أعلى معايير الأمان المعتمدة SOC 2 Type II و ISO 27001',
            custodyOrLatency: 'جاهزية واستمرارية بنسبة 99.999% على مدار الساعة',
          },
        },
      ],
    },
    problem: {
      badge: 'تحليل مخاطر الصفقات الكبرى',
      heading: 'لماذا تفشل الهياكل التقليدية في حماية المعاملات ذات القيمة العالية؟',
      compareBtnShow: 'عرض مصفوفة مخاطر الطرف المقابل',
      compareBtnHide: 'إخفاء مصفوفة المخاطر',
      card1: {
        badge: 'الحوالات والوساطات غير المحمية',
        title: 'ضعف رأس المال والاعتماد على الثقة العمياء',
        desc: 'تتطلب الحوالات المصرفية التقليدية إرسال الأموال مسبقاً قبل استلام الأصول، مما يعرض المستثمرين ومديري الصفقات لمخاطر التخلف عن السداد والنزاعات.',
        statLabel: 'معدل النزاعات في الصفقات غير المؤمنة',
        statValue: '21.4% في التجارة الدولية غير المشروطة',
      },
      card2: {
        badge: 'درع UNION.SVC البرمجي الذكي',
        title: 'احتواء آلي للأموال وتتبع فوري مستمر',
        desc: 'من خلال حجز رأس المال في حسابات أمناء منفصلة وخاضعة للتنظيم مع تحرير الأموال برمجياً وفق المعالم المنجزة، تنخفض المخاطر التشغيلية إلى الصفر.',
        statLabel: 'نسبة الأمان واحتواء رأس المال',
        statValue: '100% أموال محجوزة ومراقبة ومحمية',
      },
      matrix: {
        title: 'مصفوفة المقارنة الهيكلية المؤسسية',
        colDimension: 'المعيار التشغيلي',
        colRent: 'الحوالة البنكية التقليدية',
        colMortgage: 'الوساطة العادية',
        colUnion: 'بنية Union.svc المؤسسية',
        rows: [
          {
            dimension: 'حماية رأس المال',
            rent: 'تنعدم فور خروج الحوالة',
            mortgage: 'استرجاع معقد وبطيء',
            union: 'احتواء كامل عبر الضمان المبرمج',
          },
          {
            dimension: 'شفافية التسعير',
            rent: 'هوامش مخفية في فروقات الصرف',
            mortgage: 'انزلاق سعري مخفي (30-45 نقطة)',
            union: 'بيانات سوق معتمدة قبل التنفيذ',
          },
          {
            dimension: 'رؤية سلاسل الإمداد',
            rent: 'بيانات يدوية وملفات PDF متأخرة',
            mortgage: 'بوابات تتبع مشتتة لكل ناقل',
            union: 'لوحة قيادة تنفيذية موحدة وفورية',
          },
          {
            dimension: 'زمن استجابة تكامل البيانات',
            rent: 'تحديثات متأخرة بنهاية اليوم (24 ساعة)',
            mortgage: 'ربط بطيء يستغرق ساعات',
            union: 'أقل من 15 ميلي ثانية عبر gRPC/API',
          },
        ],
      },
    },
    calculator: {
      badge: 'محاكي رأس المال والتسويات',
      heading: 'محاكاة احتواء الضمان المالي وكفاءة السيولة',
      subtitle:
        'احسب الحماية المتوقعة لرأس المال، وخفض الانزلاق السعري، وسرعة إنجاز الصفقات تحت مظلة بنية Union.svc.',
      incomeLabel: 'قيمة الصفقة أو شريحة رأس المال المطلوب ضمانها ($)',
      incomeTooltip: 'إجمالي حجم رأس المال المراد احتواؤه وتوجيهه برمجياً.',
      savingsLabel: 'المدة الزمنية المستهدفة للمعالم (أيام)',
      savingsTooltip: 'الجدول الزمني للتحقق من المعالم التشغيلية وتسليم الأصول.',
      dualIncomeLabel: 'توجيه تسويات عبر عملات متعددة',
      coinvestLabel: 'اختر ركيزة البنية التحتية المستهدفة',
      soloCapLabel: 'المخاطر في الأنظمة التقليدية المكشوفة',
      unionBoostLabel: 'الوفورات المحققة في هوامش الصرف والنزاعات',
      totalPowerLabel: 'إجمالي رأس المال المحمي والمؤمن بالكامل',
      chartTitle: 'العائد المؤسسي التراكمي المتوقع عبر 15 عاماً',
      chartSoloLabel: 'التسويات التقليدية المشتتة ($)',
      chartUnionLabel: 'بروتوكول Union.svc المبرمج ($)',
      chartDesc:
        'القيمة التراكمية المحفوظة للمؤسسة بفضل القضاء على مخاطر الطرف المقابل، وإلغاء هوامش العملات الخفية، ودمج بيانات التتبع اللحظية.',
      applyCta: 'بدء نشر حل الضمان وفق هذا النموذج',
    },
    process: {
      badge: 'بروتوكول التنفيذ المؤسسي',
      heading: 'من احتواء رأس المال حتى التسوية المؤكدة',
      subtitle: 'أربع خطوات برمجية صُممت لتحقيق السرعة المؤسسية واليقين القانوني المطلق.',
      footnote:
        'موثق قانونياً ومنفذ بالكامل وفق أعلى معايير أمانات الحفظ الدولية والأطر المصرفية المعتمدة.',
      footnoteLink: 'الاطلاع على مستندات الامتثال القانوني ←',
      steps: [
        {
          num: '01',
          title: 'الاستيعاب والتدقيق القانوني',
          desc: 'وضع بروتوكولات الامتثال متعددة الاختصاصات، والتحقق المؤسسي (KYB/KYC)، وتحديد معالم التسوية بدقة.',
          time: 'إعداد واكتمال خلال 24-48 ساعة',
          benefit: 'يقين قانوني مسبق',
        },
        {
          num: '02',
          title: 'احتواء رأس المال في حسابات الضمان',
          desc: 'يتم قفل رأس المال في حسابات أمناء حفظ بنكية من الدرجة الأولى. صفر تعرض لمخاطر الطرف المقابل.',
          time: 'حجز فوري ومؤتمت للأموال',
          benefit: 'أمان رأسمالي تام بنسبة 100%',
        },
        {
          num: '03',
          title: 'القياس الفوري والتحقق من المعالم',
          desc: 'ربط مستشعرات الشحن وسلاسل الإمداد وتدفقات الأسعار والشهادات القانونية مباشرة بمحرك التنفيذ.',
          time: 'بث مستمر للبيانات اللحظية',
          benefit: 'انعدام النقاط التشغيلية العمياء',
        },
        {
          num: '04',
          title: 'التسوية والتحرير البرمجي للأموال',
          desc: 'فور اكتمال المعلم المطلوب، يتم صرف الأموال برمجياً بالعملات المستهدفة وتوثيقها في سجل رقمي غير قابل للتعديل.',
          time: 'تحرير آلي في دقائق معدودة',
          benefit: 'تصفير أعباء النزاعات',
        },
      ],
    },
    stats: {
      heading: 'بنية تحتية تمنح الموثوقية الهيكلية',
      headingAccent: 'لكبرى المؤسسات وقادة التجارة العالمية.',
      startLink: 'بدء إجراءات انضمام المؤسسة',
      card1: {
        quote: '“احتكاك الأطراف والنزاعات في الصفقات الكبرى هو خلل هندسي في البنية، وليس قدراً قانونياً محتوماً.”',
        body: 'تخسر الكيانات الكبرى مليارات الدولارات سنوياً بسبب ضبابية الأسعار وتأخر التسويات. تحل Union.svc محل العقود الورقية والوعود عبر تنفيذ آلي ومرئي بالكامل.',
        author: 'فيرنس فينسترا',
        role: 'الشريك الإداري // Union.svc',
      },
      card2: {
        badge: 'معيار النزاهة الهيكلية',
        title: 'دقة التسويات ورضا الشركاء المؤسسيين',
        metric: '99.98%',
        sub: 'معاملات موثقة عبر اختصاصات دولية متعددة',
        caseStudyBtn: 'استعراض دراسة الحالة المؤسسية',
      },
      card3: {
        title: 'مكتب الاستقبال التنفيذي المباشر',
        body: 'يقوم كبار الشركاء التنفيذيين بمراجعة كل ملف مؤسسي وهيكل صفقة مخصص بدقة وعناية وسرية تامة.',
        emailLabel: 'Contact@unionsvc.com',
        phoneLabel: '+1 (555) 019-2834',
      },
      telemetry: {
        badge: 'قياسات التحقق اللحظية // برهان الأداء الرقمي',
        title: 'قياسات كبح المخاطر وسرعة تدفق السيولة النقدية',
        subtitle: 'برهان مستمر قائم على البيانات: تتبع احتواء مخاطر الأطراف المقابلة وسرعة التسوية الفورية عبر ممرات رأس المال النشطة.',
        liveStatus: 'بث آمن ومباشر',
        viewConsolidated: 'مصفوفة القياسات الموحدة',
        viewRisk: 'كبح مخاطر الأطراف المقابلة',
        viewVelocity: 'سرعة السيولة وزمن الاستجابة',
        kpiRiskTitle: 'معدل كبح المخاطر الائتمانية',
        kpiRiskValue: '99.98%',
        kpiRiskSub: 'صفر تسويات غير مصرح بها عبر صفقات تتجاوز 1.2 مليار دولار',
        kpiVelocityTitle: 'متوسط زمن إنجاز التسوية',
        kpiVelocityValue: '185 ملّي ثانية',
        kpiVelocitySub: 'مقارنة بتأخير 72-120 ساعة في الحوالات البنكية التقليدية',
        kpiVolumeTitle: 'رأس المال المحمي والمحجوز',
        kpiVolumeValue: '184.2 مليون دولار',
        kpiVolumeSub: 'خزائن مصرفية معزولة قانونياً من الفئة الأولى (Tier-1)',
        kpiSlippageTitle: 'الانزلاق السعري قبل التنفيذ',
        kpiSlippageValue: '0.00%',
        kpiSlippageSub: 'تأكيد فوري لعمق سجل الأسعار والسيولة',
        streamingActive: 'بث حي متواصل',
        streamingPaused: 'البث متوقف مؤقتاً',
        feedEventPrefix: 'أحدث عملية تسوية موثقة عبر البث',
        chartRiskLabel: 'مؤشر كبح المخاطر من Union.svc (%)',
        chartBaselineLabel: 'خط مخاطر البنوك التقليدية غير المحمية (%)',
        chartVelocityLabel: 'زمن التسوية (بالملّي ثانية)',
        chartThroughputLabel: 'حجم التدفق بالساعة (مليون $)',
        timeRange1h: 'ساعة (مباشر)',
        timeRange24h: '24 ساعة',
        timeRange7d: '7 أيام',
        timeRange30d: '30 يوماً',
        footerProof: 'تم التحقق رقمياً وتشفيرياً عبر واجهات بنوك الفئة الأولى ومعايير ISO 20022. سجل تدقيق غير قابل للتغيير يُحدّث باستمرار.',
      },
    },
    caseStudy: {
      badge: 'دراسة حالة مؤسسية // الملاحة والعقارات التجارية',
      tag: 'سجل تدقيق لصفقة موثقة',
      title: 'أبيكس جلوبال: صفقة ضمان بـ 18.4 مليون دولار مع تتبع الأسطول اللوجستي',
      meta: 'القطاع: البنية التحتية والخدمات اللوجستية الدولية • التسوية: متعددة العملات (USD/EUR)',
      statTarget: 'قيمة الصفقة الإجمالية',
      statBank: 'التأخير في الأنظمة السابقة',
      statUnion: 'سرعة الإنجاز مع Union.svc',
      statSaving: 'القضاء على الانزلاق السعري',
      section1Title: 'التحدي التشغيلي',
      section1Body:
        'احتاج تحالف شركات دولي إلى حجز فوري لأموال الضمان لصفقة شراء أصول لوجستية بقيمة 18.4 مليون دولار مع 12 نقطة تسليم جغرافية مختلفة في شمال أوروبا والبحر المتوسط.',
      section2Title: 'معمارية Union.svc المطبقة',
      section2Body:
        'طبقت Union.svc بروتوكول الضمان المالي المبرمج والمرتبط مباشرة بتتبع أجهزة الاستشعار للسفن. بمجرد تأكيد نظام الملاحة دخول السفينة للمياه الإقليمية للميناء، تم تحرير شريحة الدفعة آلياً.',
      calloutTitle: 'اليقين القانوني والائتماني',
      calloutBody:
        'حافظ المشتري والبائع على رؤية متزامنة ولحظية عبر لوحة تحكم تنفيذية موحدة مع انعدام تام لأي خسائر في تحويل العملات.',
      footerCert: 'معتمد وفق إرشادات غرفة التجارة الدولية (ICC)',
      footerCta: 'نمذجة صفقتك المؤسسية الخاصة',
    },
    leadMagnet: {
      badge: 'تقرير الجدوى الاستخباراتي',
      title: 'التقرير التنفيذي المؤسسي: الحد من المخاطر والضمان المبرمج',
      desc: 'احصل على التقرير المؤسسي الشامل لعام 2024 الذي يغطي توجيه سيولة العملات، وتتبع سلاسل الإمداد، ومعماريات الضمان المالي المبرمجة.',
      bullets: [
        'مخططات احتواء رؤوس الأموال عبر اختصاصات دولية متعددة',
        'معادلات القضاء على الانزلاق السعري وهوامش الصرف الخفية',
        'يُرسل التقرير مباشرة وبسرية إلى بريدك المؤسسي المعتمد',
      ],
      emailLabel: 'البريد الإلكتروني للعمل / المؤسسة',
      urlLabel: 'نطاق الشركة أو رابط الأصل المستهدف',
      submitBtn: 'إرسال التقرير التنفيذي فوراً',
      submittingBtn: 'جارٍ تجهيز وإرسال التقرير...',
      spamNote: 'سرية تامة. يُرسل التقرير إلى بريدك وإلى مكتب المراجعة التنفيذية.',
      successTitle: 'تم إرسال التقرير بنجاح!',
      successDispatched: 'تم إرسال تقرير الجدوى التنفيذي مباشرة إلى',
      downloadBtn: 'تحميل ملخص نصي فوري',
      resetBtn: 'طلب تقرير لصفقة أخرى',
    },
    solutions: {
      badge: 'باقات وحلول التكامل المؤسسي',
      heading: 'اختر نقطة البداية لتكامل بنيتك التحتية.',
      card1: {
        tag: 'التدقيق والتشخيص',
        title: 'تدقيق البنية التحتية ومخاطر الأطراف المقابلة',
        desc: 'لقيادات المؤسسات وكبار مديري الصفقات الذين يرغبون في تحديد مكامن الهدر المالي، ومخاطر الطرف المقابل، وعوائق التكامل في قنوات التجارة القائمة.',
        features: [
          'تدقيق أمانة الحفظ ومخاطر الطرف المقابل',
          'قياس وفحص هوامش الصرف والانزلاق السعري',
          'خارطة طريق تنفيذية مفصلة للتكامل البرمجي',
        ],
        btnText: 'اختيار تدقيق البنية التحتية',
      },
      card2: {
        tag: 'التكامل الشامل',
        title: 'المنظومة المؤسسية الشاملة لجميع الركائز',
        desc: 'تكامل كامل: الضمان المالي المبرمج، سيولة الوساطة العميقة، تتبع سلاسل الإمداد الذكي، وواجهات برمجة عالية الأداء.',
        features: [
          'خزائن مصرفية مخصصة لدى أمناء حفظ من الدرجة الأولى',
          'نفاذ فوري عبر بروتوكولات FIX/API ولوحة التحكم',
          'مكتب شريك بنية تحتية مخصص على مدار الساعة',
        ],
        btnText: 'اختيار المنظومة المؤسسية الشاملة',
      },
    },
    contact: {
      badge: 'الاستقبال التنفيذي المباشر',
      heading: 'بدء نشر البنية التحتية المؤسسية',
      subtitle:
        'يتم إرسال وتوجيه كافة الطلبات مباشرة إلى البريد المعتمد Contact@unionsvc.com لمراجعتها فوراً من قبل فريق البنية التحتية التنفيذي.',
      nameLabel: 'الاسم القانوني الكامل / المسمى الوظيفي',
      emailLabel: 'البريد الإلكتروني المؤسسي الرسمي',
      websiteLabel: 'موقع الشركة أو نطاق المؤسسة',
      budgetLabel: 'شريحة رأس المال المستهدفة / نطاق المعاملة',
      budgetOptions: [
        { value: '500k-2m', label: '٥٠٠,٠٠٠ - ٢,٠٠٠,٠٠٠ دولار (حلول الضمان / وساطة السيولة)' },
        { value: '2m-10m', label: '٢,٠٠٠,٠٠٠ - ١٠,٠٠٠,٠٠٠ دولار (تسويات رؤوس الأموال العابرة للحدود)' },
        { value: '10m-50m', label: '١٠,٠٠٠,٠٠٠ - ٥٠,٠٠٠,٠٠٠ دولار (منظومة سلاسل الإمداد وتكامل المؤسسات)' },
        { value: '50m+', label: '٥٠,٠٠٠,٠٠٠+ دولار (شريحة سيادية أو مؤسسية كبرى)' },
      ],
      timelineLabel: 'الجدول الزمني المستهدف للنشر',
      timelineOptions: [
        { value: 'immediate', label: 'صفقة نشطة وفورية (أقل من ١٤ يوماً)' },
        { value: '30days', label: 'نشر فصلي (خلال ٣٠ - ٦٠ يوماً)' },
        { value: 'evaluation', label: 'تقييم استراتيجي ومراجعة معمارية' },
      ],
      messageLabel: 'تفاصيل الصفقة / التحدي التشغيلي',
      messagePlaceholder:
        'حدد فئة الأصول، الاختصاصات القضائية المعنية، أزواج العملات المستهدفة، أو نطاق تتبع سلاسل الإمداد...',
      submitBtn: 'إرسال الطلب مباشرة إلى CONTACT@UNIONSVC.COM',
      submittingBtn: 'جارٍ توجيه الطلب بأمان إلى CONTACT@UNIONSVC.COM...',
      routingDirect: 'يُوجّه مباشرة وبأمان إلى:',
      draftAutosaved: 'تم تشفير وحفظ المسودة تلقائياً',
      resetDraft: 'إعادة تعيين المسودة',
      successBadge: 'تم التحقق والاستلام لدى CONTACT@UNIONSVC.COM',
      successHeading: 'تم استلام وتوثيق طلبك المؤسسي بنجاح',
      successBody:
        'تم تسجيل وإرسال بيانات طلبك مباشرة إلى Contact@unionsvc.com. سيقوم شريك إداري بمراجعة المواصفات والرد عليك خلال ٢٤ ساعة عمل.',
      summaryHeading: 'إيصال الإرسال وتوثيق التوجيه',
      openMailClient: 'فتح في برنامج البريد المحلي',
      submitAnother: 'تقديم ملف صفقة مؤسسية أخرى',
    },
    faq: {
      badge: 'الأسئلة القانونية والتنظيمية والمعمارية',
      heading: 'الأسئلة الشائعة',
      subtitle: 'إجابات واضحة حول أمانات الحفظ، وسرعة التسوية، والتكامل التقني.',
      items: [
        {
          q: 'أين يتم حفظ الأموال خلال تطبيق حلول الضمان المالي (Escrow)؟',
          a: 'تُحفظ كافة رؤوس الأموال في حسابات ائتمانية منفصلة ومحمية من الإفلاس لدى بنوك أمناء حفظ من الدرجة الأولى خاضعة للتنظيم والرقابة في اختصاصات معتمدة. لا تخلط Union.svc أبداً بين أموالها التشغيلية وأموال العملاء.',
        },
        {
          q: 'كيف تقضي وساطة السيولة والأسواق المالية على ضبابية الأسعار؟',
          a: 'نقدم قياساً وبثاً فورياً لبيانات السوق مع شفافية تامة لأسعار التنفيذ عبر بروتوكول FIX وتدفقات WebSockets قبل التنفيذ، مما يتيح للمؤسسات رؤية عمق السوق الحقيقي والأسعار الدقيقة قبل الالتزام برأس المال.',
        },
        {
          q: 'هل يمكن لشبكات اللوجستيات الذكية التكامل مع أنظمة تخطيط الموارد الحالية (SAP و Oracle)؟',
          a: 'نعم. توفر طبقة الاتصالات وتكامل النظم محولات واجهات برمجة (APIs) بزمن استجابة أقل من 15 ميلي ثانية، مما يتيح مزامنة آلية ثنائية الاتجاه بين نظامك الحالي ولوحة تحكم التتبع اللحظية لدينا.',
        },
        {
          q: 'ما الذي يطلق عملية تحرير أموال الضمان المبرمج آلياً؟',
          a: 'تتم برمجة شروط التحرير في اتفاقيات معالم رقمية ذكية تتطلب تأكيداً مشفراً أو إشارات قياس موثقة ومباشرة (مثل إشارة GPS المؤكدة لدخول السفينة للميناء، أو إشعار الإفراج الجمركي، أو توقيع بوليصة الشحن).',
        },
        {
          q: 'من يتلقى ويراجع الطلبات المقدمة عبر المنصة؟',
          a: 'يتم إرسال كل طلب يُقدم عبر هذه المنصة مباشرة وفوراً إلى البريد المعتمد Contact@unionsvc.com ليقوم شريك إداري أول بمراجعته والتواصل معكم خلال يوم عمل واحد.',
        },
      ],
    },
    footer: {
      copyright: '© 2024 شركة Union.svc. جميع الحقوق محفوظة.',
      links: [
        { label: 'بنية الضمان المالي', href: '#pillar-escrow' },
        { label: 'وساطة السيولة والأسواق', href: '#pillar-brokerage' },
        { label: 'تتبع سلاسل الإمداد', href: '#pillar-logistics' },
        { label: 'واجهات برمجة النظم', href: '#pillar-telecom' },
        { label: 'مكتب الاستقبال المباشر', href: '#contact' },
      ],
      status: 'كافة الأنظمة المؤسسية تعمل بكفاءة تامة',
      directEmail: 'Contact@unionsvc.com',
    },
  },
};
