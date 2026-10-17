export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  nav: {
    brand: string;
    home: string;
    about: string;
    solutions: string;
    investors: string;
    contact: string;
    requestDemo: string;
    clientLogin: string;
    switchLang: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subHeadline: string;
    ctaExplore: string;
    ctaInvestor: string;
    telemetryTitle: string;
    securityBadge: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
    }[];
  };
  ticker: {
    kicker: string;
    title: string;
    liveStatus: string;
    pausedStatus: string;
    pauseTooltip: string;
    resumeTooltip: string;
    transactionsLabel: string;
    transactionsDetail: string;
    nodesLabel: string;
    nodesDetail: string;
    incidentsLabel: string;
    incidentsDetail: string;
    uptimeLabel: string;
    uptimeDetail: string;
    latencyLabel: string;
    latencyDetail: string;
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    pillarsTitle: string;
    pillars: {
      index: string;
      title: string;
      desc: string;
      highlight: string;
    }[];
  };
  visionMission: {
    kicker: string;
    title: string;
    subtitle: string;
    visionLabel: string;
    visionText: string;
    missionLabel: string;
    missionText: string;
    impactKicker: string;
    impactTitle: string;
    impactSubtitle: string;
    impactItems: {
      category: string;
      title: string;
      desc: string;
      stat: string;
      statLabel: string;
    }[];
    simulator: {
      title: string;
      desc: string;
      sliderLabel: string;
      unit: string;
      costSavings: string;
      co2Reduced: string;
      emptyRunsSaved: string;
    };
  };
  solutions: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      number: string;
      title: string;
      subtitle: string;
      bullets: string[];
      techTags: string[];
      metricLabel: string;
      metricValue: string;
    }[];
    erpTabTitle: string;
    erpDesc: string;
  };
  investors: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    points: {
      number: string;
      title: string;
      desc: string;
      highlight: string;
    }[];
    metrics: {
      value: string;
      label: string;
      subtext: string;
    }[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailValue: string;
    hqLabel: string;
    hqValue: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      inquiryTypeLabel: string;
      inquiryOptions: { value: string; label: string }[];
      messageLabel: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
    };
  };
  footer: {
    copyright: string;
    quickLinksTitle: string;
    links: { label: string; href: string }[];
    contactInfoTitle: string;
    email: string;
    corporateHq: string;
    locations: string;
    terms: string;
    privacy: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      brand: 'Union|svc Group',
      home: 'Home',
      about: 'About Us',
      solutions: 'Solutions & Tech',
      investors: 'Investors',
      contact: 'Contact Us',
      requestDemo: 'Request Demo',
      clientLogin: 'Client Login',
      switchLang: 'العربية',
    },
    hero: {
      kicker: 'Enterprise Logistics Intelligence · Encrypted Neural Network',
      headline: 'Redefining Smart Logistics Through Encrypted Communications and Advanced Tech Integration.',
      subHeadline:
        'Unionsvc Group delivers the next generation of digital freight forwarding and logistics brokerage for enterprises and large corporations—powered by artificial intelligence, end-to-end encryption, and ultra-high reliability to secure and manage complete supply chains.',
      ctaExplore: 'Explore Solutions',
      ctaInvestor: 'Investor Pitch Deck',
      telemetryTitle: 'Global Network Telemetry & Routing',
      securityBadge: 'AES-256 / TLS 1.3 Certified',
      metrics: [
        { value: '$4.2B+', label: 'Freight Volume Secured', detail: 'Audited enterprise volume' },
        { value: '< 12ms', label: 'Telemetry Stream Latency', detail: 'Sub-second event pipeline' },
        { value: '99.999%', label: 'Zero-Downtime SLA', detail: 'High-availability failover' },
        { value: 'Zero Trust', label: 'Endpoint Verification', detail: 'Mutual TLS & HSM protection' },
      ],
    },
    ticker: {
      kicker: 'Live Infrastructure Telemetry',
      title: 'Platform Reliability & Performance Stream',
      liveStatus: 'Live Feed Synchronized',
      pausedStatus: 'Feed Paused',
      pauseTooltip: 'Pause real-time updates',
      resumeTooltip: 'Resume real-time updates',
      transactionsLabel: 'Transactions Processed',
      transactionsDetail: 'Encrypted freight settlements & manifests',
      nodesLabel: 'Active Nodes',
      nodesDetail: 'Verified telematics & IoT gateway endpoints',
      incidentsLabel: 'Security Incidents Prevented',
      incidentsDetail: 'Zero Trust intrusion & tamper blocks',
      uptimeLabel: 'Zero-Downtime Availability',
      uptimeDetail: 'High-availability multi-region cluster',
      latencyLabel: 'Average Stream Latency',
      latencyDetail: 'Real-time telemetry event transit',
    },
    about: {
      kicker: 'Institutional Profile',
      title: 'Architecting the Future of High-Stakes Supply Chain Infrastructure',
      lead: 'Unionsvc Group is a leading logistics technology company empowering global supply chains through a secure, highly reliable digital brokerage platform. By combining predictive AI, end-to-end communication encryption, and seamless enterprise system integration, we deliver an unprecedented logistics and resource management experience for high-stakes industries and corporate sectors.',
      pillarsTitle: 'Core Engineering Tenets',
      pillars: [
        {
          index: '01',
          title: 'Predictive AI Freight Brokerage',
          desc: 'High-frequency algorithms continuously evaluate carrier velocity, route congestion, weather telemetry, and spot price volatility in milliseconds.',
          highlight: 'Autonomous Capacity Allocation',
        },
        {
          index: '02',
          title: 'Defense-Grade Cryptographic Security',
          desc: 'End-to-end AES-256-GCM encryption and mutual TLS 1.3 protocol layers safeguard multi-modal freight telemetry against cyber interference.',
          highlight: 'Zero Compromise Integrity',
        },
        {
          index: '03',
          title: 'Direct Enterprise ERP Integration',
          desc: 'Seamless two-way integration with SAP, Oracle, and Microsoft Dynamics ensures instantaneous inventory sync and automated dispatching.',
          highlight: 'Unified Systems Fabric',
        },
      ],
    },
    visionMission: {
      kicker: 'Strategic Purpose & Ethos',
      title: 'Vision, Mission & Societal Impact',
      subtitle: 'Building a sustainable, resilient, and cryptographically verified foundation for global commerce.',
      visionLabel: 'Our Vision',
      visionText: 'To become the world’s most secure, reliable, and intelligent neural network for logistics and system integration.',
      missionLabel: 'Our Mission',
      missionText: 'To provide enterprises and large corporations with a risk-free, intelligent resource and transport management ecosystem that maximizes operational efficiency while minimizing carbon footprint and capital waste.',
      impactKicker: 'Quantifiable Global Impact',
      impactTitle: 'Real-World Macro Impact',
      impactSubtitle: 'Driving measurable value across operational expenditure, ecological sustainability, and digital infrastructure.',
      impactItems: [
        {
          category: 'Efficiency',
          title: 'Supply Chain Efficiency',
          desc: 'Lowering operational expenses and reducing end-product costs for consumers through automated routing and algorithmic rate parity.',
          stat: '-28.4%',
          statLabel: 'Average Logistics OpEx',
        },
        {
          category: 'Sustainability',
          title: 'Environmental Sustainability',
          desc: 'Cutting carbon emissions through AI-driven route optimization and minimizing empty backhauls across commercial freight fleets.',
          stat: '34.2kt',
          statLabel: 'CO2e Eliminated Annually',
        },
        {
          category: 'Infrastructure',
          title: 'Digital Transformation',
          desc: 'Driving a secure, sustainable digital economy for critical industries and infrastructure with sovereign-grade data integrity.',
          stat: '100%',
          statLabel: 'Cryptographic Auditability',
        },
      ],
      simulator: {
        title: 'Macro ROI & Carbon Savings Estimator',
        desc: 'Estimate operational expense reduction and carbon abatement based on your annual freight volume.',
        sliderLabel: 'Annual Enterprise Freight Volume',
        unit: 'Loads / Year',
        costSavings: 'Estimated OpEx Savings',
        co2Reduced: 'Metric Tons CO2e Eliminated',
        emptyRunsSaved: 'Empty Backhauls Prevented',
      },
    },
    solutions: {
      kicker: 'Enterprise Solutions & Tech Stack',
      title: 'Key Solutions & Tech Stack',
      subtitle: 'Engineered for Tier-1 corporations requiring uncompromised security, automated dispatch, and deep systems integration.',
      items: [
        {
          id: 'freight-brokerage',
          number: '01',
          title: 'AI-Powered Smart Freight Brokerage',
          subtitle: 'Predictive matching & autonomous market dispatch',
          bullets: [
            'Precision AI matching connecting cargo demand with optimal carrier capacity.',
            'Real-time dynamic pricing driven by live market analytics and variable cost factors.',
            'Automated end-to-end documentation, dispatching, and order workflows.',
          ],
          techTags: ['Predictive ML Models', 'Dynamic Pricing Engine', 'Autonomous Dispatch', 'Smart Bill of Lading'],
          metricLabel: 'Average Dispatch Latency',
          metricValue: '< 45 Seconds',
        },
        {
          id: 'encrypted-comms',
          number: '02',
          title: 'Ultra-Secure & Encrypted Communications',
          subtitle: 'Defense-grade telemetry protection & zero trust controls',
          bullets: [
            'End-to-end encryption for all shipment data, telemetry, and financial transactions (AES-256 / TLS 1.3).',
            'Advanced IoT and telematics security protecting fleet sensors against tampering and cyber threats.',
            'Strict Zero Trust Architecture controlling system access across all endpoints.',
          ],
          techTags: ['AES-256-GCM', 'TLS 1.3 / mTLS', 'Hardware Security Modules', 'Zero Trust IAM', 'Edge Attestation'],
          metricLabel: 'Security Incident Rate',
          metricValue: '0 Incidents',
        },
        {
          id: 'erp-integration',
          number: '03',
          title: 'Enterprise System Integration (Unified API)',
          subtitle: 'Bidirectional synchronization with leading ERP ecosystems',
          bullets: [
            'Seamless, direct API integration with leading ERP platforms (SAP, Oracle, Microsoft Dynamics).',
            'Automated real-time synchronization of inventory, warehouse management (WMS), and shipment tracking without manual data entry.',
          ],
          techTags: ['SAP S/4HANA Certified', 'Oracle Cloud ERP Gateway', 'MS Dynamics 365 Connector', 'GraphQL & REST Webhooks'],
          metricLabel: 'Manual Re-entry Eliminated',
          metricValue: '99.4%',
        },
        {
          id: 'zero-downtime',
          number: '04',
          title: 'High Reliability & Zero-Downtime Operations',
          subtitle: 'Fault-tolerant event stream with offline-first synchronization',
          bullets: [
            'Sub-second real-time data streaming and event processing powered by robust event-driven architectures.',
            'Offline-first mobile capabilities enabling drivers to log critical telemetry seamlessly during connectivity blackouts.',
          ],
          techTags: ['Event-Driven Kafka Cluster', 'Offline-First Edge Cache', 'Multi-Region Active Failover', '99.999% SLA Guarantee'],
          metricLabel: 'Platform Availability SLA',
          metricValue: '99.999%',
        },
      ],
      erpTabTitle: 'Unified Enterprise Integration Matrix',
      erpDesc: 'Connect your corporate systems without legacy middleware or custom bridging.',
    },
    investors: {
      kicker: 'Investor Relations & Capital Structure',
      title: 'Why Invest in Unionsvc Group?',
      subtitle: 'Positioned at the intersection of the multi-trillion dollar supply chain economy and cryptographic deep technology.',
      ctaButton: 'Request Investment Deck',
      points: [
        {
          number: '01',
          title: 'Multi-Billion Dollar Addressable Market',
          desc: 'Capitalizing on the high-growth intersection of Deep Tech and Enterprise Logistics, addressing soaring global demand for supply resilience, cybersecurity, and ESG compliance.',
          highlight: '$4.2T Global Addressable Market',
        },
        {
          number: '02',
          title: 'Predictable & Scalable Revenue Model',
          desc: 'A hybrid framework combining high-margin SaaS subscriptions for enterprise logistics software with transaction-based brokerage commissions on executed freight volume.',
          highlight: '84% Software Gross Margin',
        },
        {
          number: '03',
          title: 'Defensible Technological Moat',
          desc: 'Proprietary security protocols, IoT hardware attestation, and deep enterprise ERP integration frameworks create significant switching costs and structural competitive barriers.',
          highlight: 'High Enterprise Switching Moat',
        },
      ],
      metrics: [
        { value: '$4.2T', label: 'Global Addressable Market', subtext: 'Deep Tech & Enterprise Logistics' },
        { value: '138%', label: 'Net Revenue Retention', subtext: 'Annual contract expansion rate' },
        { value: '3.8x', label: 'YoY Transaction Volume', subtext: 'Verified carrier network scaling' },
      ],
    },
    contact: {
      kicker: 'Direct Inquiries & Executive Engagement',
      title: 'Connect with Unionsvc Group',
      subtitle: 'Schedule an enterprise architectural consultation, request a live platform demonstration, or obtain investor materials.',
      emailLabel: 'Direct Communications',
      emailValue: 'Contact@unionsvc.com',
      hqLabel: 'Global Operations Hubs',
      hqValue: 'Tokyo · Berlin · London · Global',
      form: {
        nameLabel: 'Full Name & Title',
        emailLabel: 'Corporate Email',
        companyLabel: 'Enterprise / Organization',
        inquiryTypeLabel: 'Inquiry Category',
        inquiryOptions: [
          { value: 'demo', label: 'Request Platform Demo' },
          { value: 'investor', label: 'Investor Relations & Pitch Deck' },
          { value: 'carrier', label: 'Carrier Network & Freight Brokerage' },
          { value: 'api', label: 'ERP & Systems Integration (SAP/Oracle/MS)' },
        ],
        messageLabel: 'Operational Requirements or Notes',
        submitBtn: 'Transmit Direct Inquiry',
        submittingBtn: 'Encrypting & Dispatching...',
        successMsg: 'Inquiry received and encrypted. Our executive team will respond within 4 business hours.',
      },
    },
    footer: {
      copyright: '© 2024 Unionsvc Group. All Rights Reserved.',
      quickLinksTitle: 'Quick Links',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Solutions & Tech', href: '#solutions' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Privacy Policy', href: '#privacy' },
      ],
      contactInfoTitle: 'Contact Information',
      email: 'Contact@unionsvc.com',
      corporateHq: 'Corporate Headquarters',
      locations: 'Tokyo · Berlin · London · Global',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
    },
  },
  ar: {
    nav: {
      brand: 'Union|svc Group',
      home: 'الرئيسية',
      about: 'من نحن',
      solutions: 'الحلول والتقنيات',
      investors: 'المستثمرون',
      contact: 'اتصل بنا',
      requestDemo: 'طلب عرض تجريبي',
      clientLogin: 'دخول العملاء',
      switchLang: 'English',
    },
    hero: {
      kicker: 'ذكاء اللوجستيات للمؤسسات الكبرى · شبكة عصبية مشفرة',
      headline: 'إعادة صياغة اللوجستيات الذكية عبر الاتصالات المشفرة والتكامل التقني المتقدم.',
      subHeadline:
        'تقدم مجموعة Unionsvc Group الجيل القادم من خدمات الوساطة الرقمية للشحن وإدارة سلاسل الإمداد للشركات الكبرى والمؤسسات—مدعومة بالذكاء الاصطناعي، والتشفير الشامل من طرف إلى طرف، والموثوقية الفائقة لتأمين وإدارة كامل سلاسل التوريد.',
      ctaExplore: 'استكشف الحلول',
      ctaInvestor: 'العرض التقديمي للمستثمرين',
      telemetryTitle: 'بيانات التتبع وتوجيه الشبكة العالمية',
      securityBadge: 'معتمد بتشفير AES-256 / TLS 1.3',
      metrics: [
        { value: '+4.2 مليار$', label: 'حجم الشحن المضمون', detail: 'حجم مؤسسي موثق' },
        { value: '< 12 ملي ثانية', label: 'زمن استجابة البث البياني', detail: 'معالجة فورية للأحداث' },
        { value: '99.999%', label: 'جاهزية تشغيلية مستمرة', detail: 'استمرارية بدون انقطاع' },
        { value: 'صفر ثقة (Zero Trust)', label: 'تحقق مشدد من النقاط الطرفية', detail: 'حماية mTLS و HSM' },
      ],
    },
    ticker: {
      kicker: 'بيانات الأداء المباشر للشبكة اللوجستية',
      title: 'بث جاهزية وموثوقية منصة العمليات في الوقت الفعلي',
      liveStatus: 'البث المباشر متزامن',
      pausedStatus: 'البث متوقف مؤقتاً',
      pauseTooltip: 'إيقاف التحديثات الفورية مؤقتاً',
      resumeTooltip: 'استئناف التحديثات الفورية',
      transactionsLabel: 'المعاملات المنفذة',
      transactionsDetail: 'تسويات الشحن المشفرة وبيانات الشحن الموثقة',
      nodesLabel: 'العقد النشطة',
      nodesDetail: 'نقاط اتصال التتبع الميداني وأجهزة إنترنت الأشياء',
      incidentsLabel: 'الحوادث الأمنية التي تم منعها',
      incidentsDetail: 'حماية معماريات صفر ثقة والتصدي لمحاولات التلاعب',
      uptimeLabel: 'الجاهزية التشغيلية المستمرة',
      uptimeDetail: 'مجموعات موزعة عبر أقاليم متعددة دون انقطاع',
      latencyLabel: 'متوسط زمن استجابة البث',
      latencyDetail: 'بث حي للأحداث التشغيلية دون تأخير',
    },
    about: {
      kicker: 'الملف المؤسسي والريادة',
      title: 'بناء البنية التحتية لسلاسل الإمداد العالمية عالية الحساسية',
      lead: 'تُعد Unionsvc Group شركة رائدة في تقنيات اللوجستيات تمكّن سلاسل الإمداد العالمية من خلال منصة وساطة رقمية آمنة وعالية الموثوقية. عبر الجمع بين الذكاء الاصطناعي التنبؤي، والتشفير الشامل للاتصالات، والتكامل السلس مع أنظمة المؤسسات، نقدم تجربة غير مسبوقة لإدارة اللوجستيات والموارد للقطاعات الحيوية والشركات الكبرى.',
      pillarsTitle: 'الركائز الهندسية الأساسية',
      pillars: [
        {
          index: '01',
          title: 'وساطة الشحن بالذكاء الاصطناعي التنبؤي',
          desc: 'خوارزميات فائقة السرعة تقيم مواقع الشاحنات وازدحام المسارات وتقلبات الأسعار الفورية في أجزاء من الثانية.',
          highlight: 'توزيع ذاتي ذكي للقدرة الاستيعابية',
        },
        {
          index: '02',
          title: 'الأمان التشفيري الدفاعي',
          desc: 'طبقات حماية ببروتوكولات AES-256-GCM و TLS 1.3 لحماية مسارات النقل وسجلات التتبع ضد أي تلاعب أو اختراق.',
          highlight: 'نزاهة وأمان بلا تنازل',
        },
        {
          index: '03',
          title: 'التكامل المباشر مع أنظمة المؤسسات (ERP)',
          desc: 'ربط مباشر وفوري مع SAP و Oracle و Microsoft Dynamics لضمان مزامنة المخزون وأتمتة التوزيع دون تدخل بشري.',
          highlight: 'نسيج تقني موحد للأنظمة',
        },
      ],
    },
    visionMission: {
      kicker: 'الرؤية والرسالة والأثر المؤسسي',
      title: 'الرؤية والرسالة والأثر المجتمعي',
      subtitle: 'إرساء أساس مستدام وموثوق تقنياً لتجارة ونقل الموارد العالمية.',
      visionLabel: 'رؤيتنا',
      visionText: 'أن نصبح الشبكة العصبية الأكثر أماناً وموثوقية وذكاءً في العالم للخدمات اللوجستية وتكامل الأنظمة.',
      missionLabel: 'رسالتنا',
      missionText: 'تزويد المؤسسات والشركات الكبرى بنظام بيئي ذكي وخالٍ من المخاطر لإدارة الموارد والنقل، يحقق أعلى درجات الكفاءة التشغيلية ويقلل في الوقت ذاته من الانبعاثات الكربونية والهدر المالي.',
      impactKicker: 'أثر عالمي قابل للقياس المالي والبيئي',
      impactTitle: 'أثر كلي وملموس على الاقتصاد والبيئة',
      impactSubtitle: 'تحقيق قيمة قابلة للقياس عبر خفض النفقات التشغيلية والاستدامة البيئية والبنية الرقمية.',
      impactItems: [
        {
          category: 'الكفاءة',
          title: 'كفاءة سلاسل الإمداد',
          desc: 'خفض النفقات التشغيلية وتقليل تكلفة المنتجات النهائية للمستهلكين من خلال التوجيه الآلي وأفضل تسعير عادل.',
          stat: '-28.4%',
          statLabel: 'متوسط خفض النفقات التشغيلية',
        },
        {
          category: 'الاستدامة',
          title: 'الاستدامة البيئية',
          desc: 'تقليل الانبعاثات الكربونية عبر تحسين المسارات المدعوم بالذكاء الاصطناعي وتقليص رحلات العودة الفارغة للشاحنات.',
          stat: '34.2 ألف طن',
          statLabel: 'انبعاثات كربونية تم تفاديها سنوياً',
        },
        {
          category: 'البنية الرقمية',
          title: 'التحول الرقمي المستدام',
          desc: 'دفع عجلة اقتصاد رقمي آمن ومستدام للصناعات الحيوية والبنى التحتية الحساسة مع تدقيق تشفيري غير قابل للتلاعب.',
          stat: '100%',
          statLabel: 'قابلية تدقيق تشفيري موثوقة',
        },
      ],
      simulator: {
        title: 'حاسبة العائد الاستثماري وخفض الكربون',
        desc: 'احسب التوفير التقديري في النفقات التشغيلية وتقليص الانبعاثات بناءً على حجم شحنات مؤسستك السنوي.',
        sliderLabel: 'حجم الشحنات السنوي للمؤسسة',
        unit: 'شحنة / سنوياً',
        costSavings: 'التوفير التقديري في النفقات',
        co2Reduced: 'طن من مكافئ الكربون تم تفاديه',
        emptyRunsSaved: 'رحلة عودة فارغة تم تجنبها',
      },
    },
    solutions: {
      kicker: 'الحلول التقنية الرئيسية وحزمة البنية التحتية',
      title: 'الحلول الرئيسية وحزمة التقنيات',
      subtitle: 'مصممة خصيصاً للمؤسسات والشركات الكبرى التي تتطلب أماناً استثنائياً وتوزيعاً آلياً وتكاملاً عميقاً للأنظمة.',
      items: [
        {
          id: 'freight-brokerage',
          number: '01',
          title: 'وساطة الشحن الذكية المدعومة بالذكاء الاصطناعي',
          subtitle: 'مطابقة تنبؤية وتوزيع آلي فوري',
          bullets: [
            'مطابقة دقيقة بالذكاء الاصطناعي تربط بين الطلب على الشحن وسعة الناقلين المثالية.',
            'تسعير ديناميكي في الوقت الفعلي مدفوع بتحليلات السوق المباشرة وعوامل التكلفة المتغيرة.',
            'أتمتة شاملة لجميع مراحل التوثيق، والتوزيع، وسير عمل طلبات الشحن من البداية إلى النهاية.',
          ],
          techTags: ['Predictive ML Models', 'Dynamic Pricing Engine', 'Autonomous Dispatch', 'Smart Bill of Lading'],
          metricLabel: 'متوسط زمن التوزيع الآلي',
          metricValue: '< 45 ثانية',
        },
        {
          id: 'encrypted-comms',
          number: '02',
          title: 'اتصالات فائقة الأمان ومشفّرة بالكامل',
          subtitle: 'حماية تشفيرية دفاعية وأمان النقاط الطرفية',
          bullets: [
            'تشفير شامل من طرف إلى طرف لجميع بيانات الشحنات، والتتبع عن بُعد، والمعاملات المالية (AES-256 / TLS 1.3).',
            'أمان متقدم لأجهزة إنترنت الأشياء (IoT) والاتصالات اللاسلكية لحماية أجهزة استشعار الأسطول من التلاعب والتهديدات السيبرانية.',
            'بنية صارمة قائمة على "صفر ثقة" (Zero Trust Architecture) للتحكم في وصول النظام عبر جميع النقاط الطرفية.',
          ],
          techTags: ['AES-256-GCM', 'TLS 1.3 / mTLS', 'Hardware Security Modules', 'Zero Trust IAM', 'Edge Attestation'],
          metricLabel: 'معدل الحوادث الأمنية',
          metricValue: 'صفر حوادث',
        },
        {
          id: 'erp-integration',
          number: '03',
          title: 'تكامل أنظمة المؤسسات (واجهة برمجة تطبيقات موحدة)',
          subtitle: 'مزامنة ثنائية الاتجاه مع كبرى منصات تخطيط الموارد',
          bullets: [
            'تكامل سلس ومباشر عبر واجهة برمجة التطبيقات (API) مع منصات ERP الرائدة (SAP و Oracle و Microsoft Dynamics).',
            'مزامنة آلية وفورية للمخزون، وإدارة المستودعات (WMS)، وتتبع الشحنات دون الحاجة إلى إدخال يدوي للبيانات.',
          ],
          techTags: ['SAP S/4HANA Certified', 'Oracle Cloud ERP Gateway', 'MS Dynamics 365 Connector', 'GraphQL & REST Webhooks'],
          metricLabel: 'إلغاء إعادة الإدخال اليدوي',
          metricValue: '99.4%',
        },
        {
          id: 'zero-downtime',
          number: '04',
          title: 'موثوقية فائقة وعمليات تشغيل مستمرة دون انقطاع',
          subtitle: 'بنية موزعة متينة مع دعم العمل دون اتصال',
          bullets: [
            'بث حي ومعالجة فورية للأحداث في أجزاء من الثانية مدعومة بهياكل قوية قائمة على الأحداث (Event-Driven).',
            'إمكانيات متقدمة للعمل في وضع عدم الاتصال عبر تطبيقات الهواتف الذكية تتيح للسائقين تسجيل بيانات التتبع الحرجة بسلاسة أثناء انقطاع التغطية.',
          ],
          techTags: ['Event-Driven Kafka Cluster', 'Offline-First Edge Cache', 'Multi-Region Active Failover', '99.999% SLA Guarantee'],
          metricLabel: 'اتفاقية مستوى الخدمة للجاهزية',
          metricValue: '99.999%',
        },
      ],
      erpTabTitle: 'مصفوفة التكامل المؤسسي الموحد',
      erpDesc: 'ربط أنظمة شركتك مباشرة دون الحاجة إلى برمجيات وسيطة معقدة.',
    },
    investors: {
      kicker: 'علاقات المستثمرين والبنية الرأسمالية',
      title: 'لماذا تستثمر في مجموعة Unionsvc Group؟',
      subtitle: 'في ملتقى اقتصاد سلاسل الإمداد العالمي المقدر بتريليونات الدولارات والتقنيات العميقة فائقة الأمان.',
      ctaButton: 'طلب العرض التقديمي للاستثمار',
      points: [
        {
          number: '01',
          title: 'سوق ضخم يستهدف مليارات الدولارات',
          desc: 'الاستفادة من نقطة التقاء عالية النمو بين التقنيات العميقة والخدمات اللوجستية للمؤسسات لتلبية الطلب العالمي على الأمان والاستدامة وخفض الانبعاثات.',
          highlight: 'سوق عالمي بقيمة 4.2 تريليون دولار',
        },
        {
          number: '02',
          title: 'نموذج إيرادات متوقع وقابل للتوسع العالي',
          desc: 'إطار عمل هجين يجمع بين اشتراكات البرمجيات المؤسسية كخدمة (SaaS) ذات هوامش الربح المرتفعة، وعمولات الوساطة القائمة على حجم المعاملات والشحنات المنفذة.',
          highlight: '84% هامش إجمالي لطبقة البرمجيات',
        },
        {
          number: '03',
          title: 'خندق تكنولوجي وحواجز تنافسية منيعة',
          desc: 'بروتوكولات أمان ملكية خاصة، وحماية التتبع الميداني المشفر، وأطر التكامل العميق مع أنظمة ERP تخلق تكاليف تحويل عالية جداً وحواجز تنافسية صعبة الاختراق.',
          highlight: 'تكاليف تبديل وحواجز حماية مرتفعة',
        },
      ],
      metrics: [
        { value: '4.2 تريليون$', label: 'إجمالي السوق المستهدف عالمياً', subtext: 'تقنيات عميقة ولوجستيات مؤسسية' },
        { value: '138%', label: 'معدل الاحتفاظ الصافي بالإيرادات', subtext: 'توسع عقود كبار العملاء' },
        { value: '3.8 أضعاف', label: 'النمو السنوي في حجم المعاملات', subtext: 'توسع شبكة الشاحنات والناقلين' },
      ],
    },
    contact: {
      kicker: 'التواصل المباشر والشراكات التنفيذية',
      title: 'تواصل مع مجموعة Unionsvc Group',
      subtitle: 'احجز استشارة معمارية تقنية، أو اطلب عرضاً مباشراً للمنصة، أو احصل على ملف المستثمرين الاستراتيجي.',
      emailLabel: 'البريد الإلكتروني المباشر',
      emailValue: 'Contact@unionsvc.com',
      hqLabel: 'مراكز العمليات العالمية',
      hqValue: 'طوكيو · برلين · لندن · شبكة عالمية',
      form: {
        nameLabel: 'الاسم الكامل والمسمى الوظيفي',
        emailLabel: 'البريد الإلكتروني المؤسسي',
        companyLabel: 'الشركة أو المؤسسة',
        inquiryTypeLabel: 'نوع الاستفسار',
        inquiryOptions: [
          { value: 'demo', label: 'طلب عرض تجريبي للمنصة' },
          { value: 'investor', label: 'ملف المستثمرين والعرض التقديمي' },
          { value: 'carrier', label: 'شبكة الناقلين ووساطة الشحن' },
          { value: 'api', label: 'تكامل أنظمة المؤسسات (SAP/Oracle/MS)' },
        ],
        messageLabel: 'المتطلبات التشغيلية أو تفاصيل الاستفسار',
        submitBtn: 'إرسال الاستفسار المباشر',
        submittingBtn: 'جاري التشفير والإرسال...',
        successMsg: 'تم استلام الاستفسار وتشفيره بأمان. سيتواصل معك فريقنا التنفيذي خلال 4 ساعات عمل.',
      },
    },
    footer: {
      copyright: '© 2024 Unionsvc Group. جميع الحقوق محفوظة.',
      quickLinksTitle: 'روابط سريعة',
      links: [
        { label: 'من نحن', href: '#about' },
        { label: 'الحلول والتقنيات', href: '#solutions' },
        { label: 'شروط الخدمة', href: '#terms' },
        { label: 'سياسة الخصوصية', href: '#privacy' },
      ],
      contactInfoTitle: 'معلومات الاتصال',
      email: 'Contact@unionsvc.com',
      corporateHq: 'المقر الرئيسي للمجموعة',
      locations: 'طوكيو · برلين · لندن · شبكة عالمية',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية',
    },
  },
};
