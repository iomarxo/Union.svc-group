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
    bullets: string[];
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
    bullets: string[];
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
      bullets?: string[];
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
      about: 'About',
      solutions: 'Solutions & Tech',
      investors: 'Investors',
      contact: 'Contact',
      requestDemo: 'Request Demo',
      clientLogin: 'Client Login',
      switchLang: 'العربية',
    },
    hero: {
      kicker: 'Autonomous Freight Infrastructure · Zero-Trust Telematics',
      headline: 'Zero-Trust Freight Infrastructure for Global Enterprise.',
      subHeadline:
        'We combine predictive AI and defense-grade encryption to eliminate supply chain disruptions and reduce freight OpEx by 28%.',
      bullets: [
        'Sub-45s AI capacity matching',
        'Zero-Trust telemetry encryption',
        'Native two-way ERP sync',
      ],
      ctaExplore: 'Explore Solutions',
      ctaInvestor: 'Download Pitch Deck',
      telemetryTitle: 'Global Network Telemetry & Routing',
      securityBadge: 'AES-256 / TLS 1.3 Certified',
      metrics: [
        { value: '$4.2B+', label: 'Freight Secured', detail: 'Audited enterprise volume' },
        { value: '< 12ms', label: 'Event Latency', detail: 'Sub-second telemetry stream' },
        { value: '99.999%', label: 'SLA Uptime', detail: 'Active-active multi-region' },
        { value: 'Zero Trust', label: 'Security Verification', detail: 'AES-256 / HSM attestation' },
      ],
    },
    ticker: {
      kicker: 'Live Platform Telemetry',
      title: 'Infrastructure & Settlement Stream',
      liveStatus: 'Live Feed Synchronized',
      pausedStatus: 'Feed Paused',
      pauseTooltip: 'Pause real-time updates',
      resumeTooltip: 'Resume real-time updates',
      transactionsLabel: 'Transactions Settled',
      transactionsDetail: 'Encrypted freight settlements & manifests',
      nodesLabel: 'Active IoT Nodes',
      nodesDetail: 'Verified telematics & gateway endpoints',
      incidentsLabel: 'Security Incidents',
      incidentsDetail: 'Zero Trust intrusion & tamper blocks',
      uptimeLabel: 'SLA Availability',
      uptimeDetail: 'High-availability multi-region cluster',
      latencyLabel: 'Average Net Latency',
      latencyDetail: 'Real-time telemetry event transit',
    },
    about: {
      kicker: 'Core Architecture & Moat',
      title: 'Autonomous Enterprise Freight Orchestration',
      lead: 'Unionsvc Group replaces legacy freight brokerage with an autonomous, cryptographically verified dispatch protocol—cutting carrier latency from hours to seconds.',
      bullets: [
        'Sub-45s predictive capacity matching',
        'Defense-grade AES-256 encryption',
        'Bi-directional SAP and Oracle sync',
        '28% verified OpEx reduction',
      ],
      pillarsTitle: 'Core Engineering Tenets',
      pillars: [
        {
          index: '01',
          title: 'Predictive AI Dispatch',
          desc: 'Sub-45s algorithmic capacity matching with dynamic spot pricing and automated e-BOL workflows.',
          highlight: 'Autonomous Dispatch Engine',
        },
        {
          index: '02',
          title: 'Defense-Grade Cryptography',
          desc: 'End-to-end AES-256-GCM encryption with mutual TLS 1.3 and FIPS 140-3 hardware HSM attestation.',
          highlight: 'Zero-Trust Security Layer',
        },
        {
          index: '03',
          title: 'Direct Enterprise ERP Sync',
          desc: 'Bi-directional SAP S/4HANA and Oracle Cloud integration eliminating manual entry and inventory drift.',
          highlight: 'Unified Bi-Directional API',
        },
      ],
    },
    visionMission: {
      kicker: 'Strategic Purpose & ESG',
      title: 'Vision, Mission & Macro Impact',
      subtitle: 'Delivering capital efficiency and carbon abatement across global logistics corridors.',
      visionLabel: 'Our Vision',
      visionText: 'The global neural backbone for secure, autonomous trade.',
      missionLabel: 'Our Mission',
      missionText: 'Eliminate supply chain waste, emissions, and counterparty risk through verified telemetry.',
      impactKicker: 'Quantifiable Return',
      impactTitle: 'Measurable Enterprise Impact',
      impactSubtitle: 'Driving measurable value across operational expenditure, ecological sustainability, and digital trust.',
      impactItems: [
        {
          category: 'Efficiency',
          title: 'Capital Efficiency',
          desc: 'Eliminating manual broker fees and algorithmic rate inflation across multimodal routes.',
          stat: '-28.4%',
          statLabel: 'Freight Spend Reduction',
        },
        {
          category: 'Sustainability',
          title: 'Carbon Abatement',
          desc: 'Eliminating empty return backhauls through predictive regional fleet routing.',
          stat: '34.2kt',
          statLabel: 'Annual CO2e Prevented',
        },
        {
          category: 'Infrastructure',
          title: 'Data Governance',
          desc: 'Defense-grade tamper attestation on all commercial transport telemetry.',
          stat: '100%',
          statLabel: 'Cryptographic Verification',
        },
      ],
      simulator: {
        title: 'OpEx & Carbon Savings Estimator',
        desc: 'Calculate projected annual freight savings and emissions reduction.',
        sliderLabel: 'Annual Enterprise Freight Volume',
        unit: 'Loads / Year',
        costSavings: 'Projected OpEx Savings',
        co2Reduced: 'Tons CO2e Eliminated',
        emptyRunsSaved: 'Empty Backhauls Prevented',
      },
    },
    solutions: {
      kicker: 'Enterprise Tech Stack',
      title: 'Four Pillars of Autonomous Logistics',
      subtitle: 'Built for high-volume enterprise shippers requiring guaranteed capacity and sovereign security.',
      items: [
        {
          id: 'freight-brokerage',
          number: '01',
          title: 'AI Smart Freight Brokerage',
          subtitle: 'Sub-45s matching & algorithmic dispatch',
          bullets: [
            'Sub-45s predictive capacity matching',
            'Real-time algorithmic spot pricing',
            'Automated digital manifest workflows',
            'Zero empty backhaul waste',
          ],
          techTags: ['Predictive ML', 'Dynamic Pricing', 'Autonomous Dispatch', 'Smart e-BOL'],
          metricLabel: 'Match Latency',
          metricValue: '< 45 Seconds',
        },
        {
          id: 'encrypted-comms',
          number: '02',
          title: 'Zero-Trust Encrypted Telemetry',
          subtitle: 'Defense-grade transit payload protection',
          bullets: [
            'End-to-end AES-256 encryption',
            'Hardware-backed sensor attestation',
            'Mutual TLS 1.3 protocol',
            'Zero unauthorized access risk',
          ],
          techTags: ['AES-256-GCM', 'TLS 1.3 / mTLS', 'Hardware HSM', 'Zero Trust IAM', 'Edge Attestation'],
          metricLabel: 'Security Incidents',
          metricValue: '0 Incidents',
        },
        {
          id: 'erp-integration',
          number: '03',
          title: 'Enterprise ERP Integration',
          subtitle: 'Unified bidirectional systems API',
          bullets: [
            'Native SAP S/4HANA connector',
            'Oracle Cloud real-time sync',
            'Microsoft Dynamics 365 gateway',
            'Zero manual data re-entry',
          ],
          techTags: ['SAP S/4HANA Certified', 'Oracle Cloud Gateway', 'MS Dynamics 365', 'GraphQL & Webhooks'],
          metricLabel: 'Data Error Reduction',
          metricValue: '99.4%',
        },
        {
          id: 'zero-downtime',
          number: '04',
          title: 'High-Availability Infrastructure',
          subtitle: 'Fault-tolerant distributed edge stream',
          bullets: [
            '99.999% SLA uptime guarantee',
            'Offline-first driver edge logging',
            'Multi-region active-active clusters',
            'Sub-second real-time event streaming',
          ],
          techTags: ['Kafka Cluster', 'Offline-First Cache', 'Multi-Region Failover', '99.999% SLA'],
          metricLabel: 'Platform SLA Uptime',
          metricValue: '99.999%',
        },
      ],
      erpTabTitle: 'Unified Enterprise Integration Matrix',
      erpDesc: 'Connect corporate systems directly with zero middleware or custom bridging.',
    },
    investors: {
      kicker: 'Investment Opportunity & Financial Model',
      title: 'Why Invest in Unionsvc Group?',
      subtitle: 'Disrupting the $4.2T global freight economy with high-margin software economics and cryptographic defensibility.',
      ctaButton: 'Download Pitch Deck',
      points: [
        {
          number: '01',
          title: 'Massive $4.2T Market Opportunity',
          desc: 'Replacing fragmented manual brokerage across enterprise supply chains with high-frequency AI matching and automated rate parity.',
          highlight: '$4.2T Global TAM',
          bullets: [
            '$4.2T global freight market',
            '$14M+ downtime risk eliminated',
            'Surging demand for cyber-compliance',
          ],
        },
        {
          number: '02',
          title: 'High-Margin Scalable Revenue',
          desc: 'Hybrid monetization pairing recurring enterprise SaaS subscriptions with volume-based brokerage take-rates on executed loads.',
          highlight: '84% Software Gross Margin',
          bullets: [
            'Recurring enterprise SaaS subscriptions',
            'Transaction commissions per load',
            'Asset-light zero fleet overhead',
          ],
        },
        {
          number: '03',
          title: 'Formidable Structural Moat',
          desc: 'Deep bidirectional ERP integration and Zero-Trust cryptography create high switching costs and formidable competitive barriers.',
          highlight: '138% Net Revenue Retention',
          bullets: [
            'Deep SAP & Oracle lock-in',
            'Zero-Trust regulatory barrier',
            '138% net revenue retention',
          ],
        },
      ],
      metrics: [
        { value: '$4.2T', label: 'Global TAM', subtext: 'Freight & Deep Tech' },
        { value: '84%', label: 'Gross Margin', subtext: 'Software revenue layer' },
        { value: '138%', label: 'Net Retention', subtext: 'Annual contract expansion' },
        { value: '3.8x', label: 'YoY Growth', subtext: 'Carrier network throughput' },
      ],
    },
    contact: {
      kicker: 'Direct Inquiries & Executive Engagement',
      title: 'Partner with Unionsvc Group',
      subtitle: 'Schedule an executive architectural consultation, request platform demo access, or obtain institutional investor materials.',
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
        { label: 'About', href: '#about' },
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
      kicker: 'بنية تحتية ذاتية للشحن · تتبع فوري مشفر',
      headline: 'بنية تحتية ذاتية وموثوقة لشحن المؤسسات العالمية.',
      subHeadline:
        'نجمع بين الذكاء الاصطناعي التنبؤي والتشفير الدفاعي لمنع انقطاع الإمداد وخفض نفقات الشحن بنسبة 28%.',
      bullets: [
        'مطابقة السعة في أقل من 45 ثانية',
        'تشفير التتبع بمعمارية صفر ثقة',
        'مزامنة ثنائية مع أنظمة ERP',
      ],
      ctaExplore: 'استكشف الحلول',
      ctaInvestor: 'تحميل العرض الاستثماري',
      telemetryTitle: 'بيانات التتبع وتوجيه الشبكة العالمية',
      securityBadge: 'معتمد بتشفير AES-256 / TLS 1.3',
      metrics: [
        { value: '+4.2 مليار$', label: 'حجم الشحن المضمون', detail: 'حجم مؤسسي موثق' },
        { value: '< 12 ملي ثانية', label: 'زمن استجابة البث', detail: 'معالجة فورية للأحداث' },
        { value: '99.999%', label: 'جاهزية تشغيلية مستمرة', detail: 'استمرارية بدون انقطاع' },
        { value: 'صفر ثقة (Zero Trust)', label: 'تحقق مشدد من النقاط', detail: 'حماية mTLS و HSM' },
      ],
    },
    ticker: {
      kicker: 'بيانات الأداء المباشر للشبكة',
      title: 'بث الجاهزية والتسويات في الوقت الفعلي',
      liveStatus: 'البث المباشر متزامن',
      pausedStatus: 'البث متوقف مؤقتاً',
      pauseTooltip: 'إيقاف التحديثات الفورية مؤقتاً',
      resumeTooltip: 'استئناف التحديثات الفورية',
      transactionsLabel: 'المعاملات المنفذة',
      transactionsDetail: 'تسويات الشحن المشفرة وبيانات الشحن الموثقة',
      nodesLabel: 'العقد النشطة',
      nodesDetail: 'نقاط اتصال التتبع الميداني وأجهزة IoT',
      incidentsLabel: 'الحوادث الأمنية',
      incidentsDetail: 'حماية معماريات صفر ثقة والتصدي للتلاعب',
      uptimeLabel: 'الجاهزية التشغيلية',
      uptimeDetail: 'مجموعات موزعة عبر أقاليم متعددة دون انقطاع',
      latencyLabel: 'متوسط زمن استجابة البث',
      latencyDetail: 'بث حي للأحداث التشغيلية دون تأخير',
    },
    about: {
      kicker: 'الهندسة المعمارية والخندق التنافسي',
      title: 'أتمتة البنية التحتية لشحن المؤسسات',
      lead: 'تستبدل Unionsvc Group وساطة الشحن التقليدية ببروتوكول توزيع ذاتي وموثق تشفيرياً يقلص زمن التنسيق من ساعات إلى ثوانٍ.',
      bullets: [
        'مطابقة السعة في أقل من 45 ثانية',
        'تشفير دفاعي بمستوى AES-256',
        'مزامنة ثنائية مع SAP و Oracle',
        'خفض مثبت لنفقات الشحن بنسبة 28%',
      ],
      pillarsTitle: 'الركائز الهندسية الأساسية',
      pillars: [
        {
          index: '01',
          title: 'التوزيع الذاتي بالذكاء الاصطناعي',
          desc: 'مطابقة استيعابية خوارزمية في أقل من 45 ثانية مع تسعير فوري وإصدار بوالص الشحن الرقمية.',
          highlight: 'محرك توزيع ذاتي',
        },
        {
          index: '02',
          title: 'التشفير الدفاعي الصارم',
          desc: 'تشفير AES-256-GCM مع بروتوكول TLS 1.3 وتوثيق عتاد HSM بمعيار FIPS 140-3.',
          highlight: 'طبقة أمان صفر ثقة',
        },
        {
          index: '03',
          title: 'المزامنة المباشرة مع ERP',
          desc: 'ربط ثنائي مباشر مع منصات SAP S/4HANA و Oracle Cloud يلغي الإدخال اليدوي وأخطاء المخزون.',
          highlight: 'واجهة برمجية موحدة ثنائية',
        },
      ],
    },
    visionMission: {
      kicker: 'الغاية الاستراتيجية والأثر المؤسسي',
      title: 'الرؤية والرسالة والأثر الكلي',
      subtitle: 'تحقيق أعلى كفاءة رأس مال وخفض الانبعاثات الكربونية عبر ممرات الشحن الدولية.',
      visionLabel: 'رؤيتنا',
      visionText: 'الشبكة العصبية العالمية للتجارة الآمنة والذاتية.',
      missionLabel: 'رسالتنا',
      missionText: 'القضاء على هدر سلاسل الإمداد والانبعاثات ومخاطر الطرف المقابل عبر بيانات موثقة.',
      impactKicker: 'عائد مالي وبيئي ملموس',
      impactTitle: 'أثر كلي قابل للقياس المالي',
      impactSubtitle: 'تحقيق قيمة ملموسة عبر خفض النفقات التشغيلية والاستدامة البيئية والبنية الرقمية.',
      impactItems: [
        {
          category: 'الكفاءة',
          title: 'كفاءة رأس المال',
          desc: 'إلغاء رسوم الوساطة التقليدية والتضخم غير المبرر لأسعار الشحن.',
          stat: '-28.4%',
          statLabel: 'خفض نفقات الشحن',
        },
        {
          category: 'الاستدامة',
          title: 'تقليص الانبعاثات',
          desc: 'القضاء على رحلات العودة الفارغة للشاحنات عبر التوجيه الإقليمي الذكي.',
          stat: '34.2 ألف طن',
          statLabel: 'انبعاثات كربونية تم تفاديها',
        },
        {
          category: 'البنية الرقمية',
          title: 'حوكمة البيانات',
          desc: 'توثيق تشفيري دفاعي مقاوم للتلاعب لجميع سجلات النقل التجاري.',
          stat: '100%',
          statLabel: 'تدقيق تشفيري موثق',
        },
      ],
      simulator: {
        title: 'حاسبة التوفير المالي وخفض الكربون',
        desc: 'احسب التوفير السنوي التقديري في نفقات الشحن وتقليص الانبعاثات.',
        sliderLabel: 'حجم الشحنات السنوي للمؤسسة',
        unit: 'شحنة / سنوياً',
        costSavings: 'التوفير التقديري في النفقات',
        co2Reduced: 'طن من مكافئ الكربون تم تفاديه',
        emptyRunsSaved: 'رحلة عودة فارغة تم تجنبها',
      },
    },
    solutions: {
      kicker: 'حزمة التقنيات المؤسسية',
      title: 'الركائز الأربع للوجستيات الذاتية',
      subtitle: 'مصممة للشركات الكبرى التي تتطلب قدرة استيعابية مضمونة وأماناً سيادياً.',
      items: [
        {
          id: 'freight-brokerage',
          number: '01',
          title: 'وساطة الشحن الذكية بالذكاء الاصطناعي',
          subtitle: 'مطابقة في أقل من 45 ثانية وتوزيع آلي',
          bullets: [
            'مطابقة سريعة في أقل من 45 ثانية',
            'تسعير فوري خوارزمي عادل',
            'أتمتة بوالص الشحن الرقمية',
            'القضاء على رحلات الشحن الفارغة',
          ],
          techTags: ['Predictive ML', 'Dynamic Pricing', 'Autonomous Dispatch', 'Smart e-BOL'],
          metricLabel: 'زمن المطابقة',
          metricValue: '< 45 ثانية',
        },
        {
          id: 'encrypted-comms',
          number: '02',
          title: 'تتبع مشفر بمعمارية صفر ثقة',
          subtitle: 'حماية حمولة البيانات وسجلات النقل',
          bullets: [
            'تشفير شامل بمعيار AES-256',
            'توثيق عتاد أجهزة الاستشعار',
            'بروتوكول Mutual TLS 1.3',
            'حماية كاملة ضد الاختراق',
          ],
          techTags: ['AES-256-GCM', 'TLS 1.3 / mTLS', 'Hardware HSM', 'Zero Trust IAM', 'Edge Attestation'],
          metricLabel: 'الحوادث الأمنية',
          metricValue: 'صفر اختراقات',
        },
        {
          id: 'erp-integration',
          number: '03',
          title: 'تكامل أنظمة المؤسسات (ERP)',
          subtitle: 'واجهة موحدة ثنائية الاتجاه للأنظمة',
          bullets: [
            'رابط مباشر ومعتمد مع SAP S/4HANA',
            'مزامنة فورية مع Oracle Cloud',
            'بوابة Microsoft Dynamics 365',
            'إلغاء تام للإدخال اليدوي للأخطاء',
          ],
          techTags: ['SAP S/4HANA Certified', 'Oracle Cloud Gateway', 'MS Dynamics 365', 'GraphQL & Webhooks'],
          metricLabel: 'تقليص أخطاء البيانات',
          metricValue: '99.4%',
        },
        {
          id: 'zero-downtime',
          number: '04',
          title: 'بنية تشغيلية مستمرة دون توقف',
          subtitle: 'بث موزع عالي التحمل للأعطال',
          bullets: [
            'اتفاقية جاهزية 99.999% SLA',
            'تسجيل التتبع عند انقطاع الاتصال',
            'مجموعات نشطة موزعة جغرافياً',
            'معالجة أحداث في أجزاء من الثانية',
          ],
          techTags: ['Kafka Cluster', 'Offline-First Cache', 'Multi-Region Failover', '99.999% SLA'],
          metricLabel: 'جاهزية المنصة',
          metricValue: '99.999%',
        },
      ],
      erpTabTitle: 'مصفوفة التكامل المؤسسي الموحد',
      erpDesc: 'ربط أنظمة شركتك مباشرة دون الحاجة لبرمجيات وسيطة معقدة.',
    },
    investors: {
      kicker: 'الفرصة الاستثمارية والبنية المالية',
      title: 'لماذا تستثمر في مجموعة Unionsvc Group؟',
      subtitle: 'إعادة ابتكار اقتصاد الشحن العالمي المقدر بـ 4.2 تريليون دولار بهوامش ربح برمجية مرتفعة وخندق تقني منيع.',
      ctaButton: 'تحميل العرض الاستثماري',
      points: [
        {
          number: '01',
          title: 'سوق عالمي ضخم بـ 4.2 تريليون دولار',
          desc: 'استبدال الوساطة اليدوية المشتتة بمطابقة ذاتية سريعة بالذكاء الاصطناعي تحقق العدالة السعرية.',
          highlight: '4.2 تريليون$ سوق عالمي',
          bullets: [
            '4.2 تريليون دولار حجم السوق',
            'إلغاء 14+ مليون$ خسائر تعطل',
            'طلب قياسي على الأمان السيبراني',
          ],
        },
        {
          number: '02',
          title: 'إيرادات ذات هوامش ربح مرتفعة وقابلة للتوسع',
          desc: 'نموذج تسييل هجين يجمع بين اشتراكات برمجيات SaaS المؤسسية وعمولات على حجم الشحنات المنفذة.',
          highlight: '84% هامش إجمالي للبرمجيات',
          bullets: [
            'اشتراكات SaaS مؤسسية دورية',
            'عمولة وساطة على كل شحنة',
            'أصول خفيفة بدون تكاليف أساطيل',
          ],
        },
        {
          number: '03',
          title: 'خندق تكنولوجي وحواجز تبديل قوية',
          desc: 'التكامل العميق مع أنظمة ERP وتشفير صفر ثقة يخلقان تكاليف تحويل عالية جداً تمنع انتقال العملاء.',
          highlight: '138% معدل استبقاء الإيرادات',
          bullets: [
            'ارتباط عميق بأنظمة SAP و Oracle',
            'حاجز تنظيمي بمعمارية صفر ثقة',
            '138% توسع عقود العملاء سنوياً',
          ],
        },
      ],
      metrics: [
        { value: '4.2 تريليون$', label: 'إجمالي السوق المستهدف', subtext: 'لوجستيات وتقنيات عميقة' },
        { value: '84%', label: 'هامش الربح الإجمالي', subtext: 'طبقة إيرادات البرمجيات' },
        { value: '138%', label: 'معدل استبقاء الإيرادات', subtext: 'توسع عقود كبار العملاء' },
        { value: '3.8 أضعاف', label: 'النمو السنوي في الشحنات', subtext: 'توسع شبكة الشاحنات' },
      ],
    },
    contact: {
      kicker: 'التواصل المباشر والشراكات التنفيذية',
      title: 'الشراكة مع مجموعة Unionsvc Group',
      subtitle: 'احجز استشارة معمارية تقنية، أو اطلب تجربة للمنصة، أو احصل على ملف المستثمرين الاستراتيجي.',
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
