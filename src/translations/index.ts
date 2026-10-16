export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  nav: {
    brand: string;
    brandSub: string;
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
    badge: string;
    headline: string;
    subHeadline: string;
    ctaExplore: string;
    ctaInvestor: string;
    telemetryTitle: string;
    securityBadge: string;
    metrics: {
      value: string;
      label: string;
    }[];
  };
  about: {
    badge: string;
    title: string;
    lead: string;
    pillarsTitle: string;
    pillars: {
      title: string;
      desc: string;
      highlight: string;
    }[];
  };
  visionMission: {
    badge: string;
    title: string;
    subtitle: string;
    visionLabel: string;
    visionText: string;
    missionLabel: string;
    missionText: string;
    impactLabel: string;
    impactTitle: string;
    impactSubtitle: string;
    impactItems: {
      tag: string;
      title: string;
      desc: string;
      stat: string;
      statLabel: string;
    }[];
  };
  solutions: {
    badge: string;
    title: string;
    subtitle: string;
    techStackBadge: string;
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
  };
  investors: {
    badge: string;
    title: string;
    subtitle: string;
    whyInvestTitle: string;
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
    badge: string;
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
      brandSub: 'Smart Logistics & Encrypted Tech',
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
      badge: 'ENTERPRISE LOGISTICS INTELLIGENCE // ENCRYPTED NEURAL NETWORK',
      headline: 'Redefining Smart Logistics Through Encrypted Communications and Advanced Tech Integration.',
      subHeadline:
        'Unionsvc Group delivers the next generation of digital freight forwarding and logistics brokerage for enterprises and large corporations—powered by artificial intelligence, end-to-end encryption, and ultra-high reliability to secure and manage complete supply chains.',
      ctaExplore: 'Explore Solutions',
      ctaInvestor: 'Investor Pitch Deck',
      telemetryTitle: 'LIVE NEURAL DISPATCH TELEMETRY',
      securityBadge: 'AES-256 / TLS 1.3 ENCRYPTED',
      metrics: [
        { value: '$4.2B+', label: 'Freight Volume Secured' },
        { value: '< 12ms', label: 'Telemetry Stream Latency' },
        { value: '99.999%', label: 'Zero-Downtime SLA' },
        { value: 'Zero Trust', label: 'Endpoint Verification' },
      ],
    },
    about: {
      badge: 'ABOUT UNIONSVC GROUP',
      title: 'Architecting the Future of High-Stakes Supply Chain Infrastructure',
      lead: 'Unionsvc Group is a leading logistics technology company empowering global supply chains through a secure, highly reliable digital brokerage platform. By combining predictive AI, end-to-end communication encryption, and seamless enterprise system integration, we deliver an unprecedented logistics and resource management experience for high-stakes industries and corporate sectors.',
      pillarsTitle: 'Core Engineering Tenets',
      pillars: [
        {
          title: 'Predictive AI Brokerage',
          desc: 'High-frequency algorithms analyzing carrier positioning, weather telemetry, and spot price volatility in milliseconds.',
          highlight: 'Autonomous Allocation',
        },
        {
          title: 'Cryptographic Security',
          desc: 'Defense-grade AES-256 and TLS 1.3 protocol layers safeguarding multi-modal freight movement against cyber threats.',
          highlight: 'Zero Compromise',
        },
        {
          title: 'Enterprise Integration',
          desc: 'Instant, bidirectional ERP sync with SAP, Oracle, and Microsoft Dynamics eliminating manual friction.',
          highlight: 'Unified Gateway',
        },
      ],
    },
    visionMission: {
      badge: 'STRATEGIC PURPOSE & ETHOS',
      title: 'Vision, Mission & Societal Impact',
      subtitle: 'Building a sustainable, resilient, and cryptographically verified foundation for global commerce.',
      visionLabel: 'Our Vision',
      visionText: 'To become the world’s most secure, reliable, and intelligent neural network for logistics and system integration.',
      missionLabel: 'Our Mission',
      missionText: 'To provide enterprises and large corporations with a risk-free, intelligent resource and transport management ecosystem that maximizes operational efficiency while minimizing carbon footprint and capital waste.',
      impactLabel: 'Societal & Economic Impact',
      impactTitle: 'Real-World Macro Impact',
      impactSubtitle: 'Driving measurable value across operational, environmental, and infrastructure dimensions.',
      impactItems: [
        {
          tag: 'EFFICIENCY',
          title: 'Supply Chain Efficiency',
          desc: 'Lowering operational expenses and reducing end-product costs for consumers through automated routing and algorithmic rate parity.',
          stat: '-28.4%',
          statLabel: 'Average Logistics OpEx',
        },
        {
          tag: 'SUSTAINABILITY',
          title: 'Environmental Sustainability',
          desc: 'Cutting carbon emissions through AI-driven route optimization and minimizing empty backhauls across commercial freight fleets.',
          stat: '34.2kt',
          statLabel: 'CO2e Eliminated / Yr',
        },
        {
          tag: 'INFRASTRUCTURE',
          title: 'Digital Transformation',
          desc: 'Driving a secure, sustainable digital economy for critical industries and infrastructure with sovereign-grade data integrity.',
          stat: '100%',
          statLabel: 'Cryptographic Auditability',
        },
      ],
    },
    solutions: {
      badge: 'CORE CAPABILITIES // TECH STACK',
      title: 'Key Solutions & Tech Stack',
      subtitle: 'Engineered for Tier-1 corporations requiring uncompromised security, automated dispatch, and deep systems integration.',
      techStackBadge: 'PRODUCTION-GRADE INFRASTRUCTURE',
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
          techTags: ['Predictive ML', 'Dynamic Pricing Matrix', 'Autonomous Dispatch', 'Smart Bill of Lading'],
          metricLabel: 'Dispatch Time',
          metricValue: '< 45 Seconds',
        },
        {
          id: 'encrypted-comms',
          number: '02',
          title: 'Ultra-Secure & Encrypted Communications',
          subtitle: 'Military-grade cryptographic telemetry & IoT protection',
          bullets: [
            'End-to-end encryption for all shipment data, telemetry, and financial transactions (AES-256 / TLS 1.3).',
            'Advanced IoT and telematics security protecting fleet sensors against tampering and cyber threats.',
            'Strict Zero Trust Architecture controlling system access across all endpoints.',
          ],
          techTags: ['AES-256 GCM', 'TLS 1.3', 'Hardware Security Modules', 'Zero Trust IAM', 'Mutual TLS'],
          metricLabel: 'Security Breaches',
          metricValue: '0 incidents',
        },
        {
          id: 'erp-integration',
          number: '03',
          title: 'Enterprise System Integration (Unified API)',
          subtitle: 'Seamless two-way data fabric for global ERP platforms',
          bullets: [
            'Seamless, direct API integration with leading ERP platforms (SAP, Oracle, Microsoft Dynamics).',
            'Automated real-time synchronization of inventory, warehouse management (WMS), and shipment tracking without manual data entry.',
          ],
          techTags: ['SAP S/4HANA', 'Oracle Cloud ERP', 'MS Dynamics 365', 'GraphQL / REST Webhooks', 'WMS Connectors'],
          metricLabel: 'Manual Entry Eliminated',
          metricValue: '99.4%',
        },
        {
          id: 'zero-downtime',
          number: '04',
          title: 'High Reliability & Zero-Downtime Operations',
          subtitle: 'Fault-tolerant distributed architecture with offline edge sync',
          bullets: [
            'Sub-second real-time data streaming and event processing powered by robust event-driven architectures.',
            'Offline-first mobile capabilities enabling drivers to log critical telemetry seamlessly during connectivity blackouts.',
          ],
          techTags: ['Event-Driven Kafka', 'Offline-First Edge', 'Multi-Region Failover', '99.999% High Availability'],
          metricLabel: 'Platform Availability',
          metricValue: '99.999%',
        },
      ],
    },
    investors: {
      badge: 'INVESTOR RELATIONS // CAPITAL ACCELERATION',
      title: 'Why Invest in Unionsvc Group?',
      subtitle: 'Positioned at the nexus of the multi-trillion dollar supply chain economy and cryptographic deep technology.',
      whyInvestTitle: 'Investment Highlights',
      ctaButton: 'Request Investment Deck',
      points: [
        {
          number: '01',
          title: 'Multi-Billion Dollar Addressable Market',
          desc: 'Capitalizing on the high-growth intersection of Deep Tech and Enterprise Logistics, addressing unprecedented global demands for security, supply resilience, and carbon reduction.',
          highlight: '$4.2T TAM Opportunity',
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
          desc: 'Proprietary security protocols, edge telematics encryption, and deep enterprise ERP integration frameworks create high switching costs and formidable competitive barriers.',
          highlight: 'High Enterprise Switching Moat',
        },
      ],
      metrics: [
        { value: '$4.2T', label: 'Global Addressable Market', subtext: 'Deep Tech & Enterprise Logistics' },
        { value: '138%', label: 'Net Revenue Retention', subtext: 'Enterprise expansion rate' },
        { value: '3.8x', label: 'YoY Transaction Volume', subtext: 'Carrier network scaling' },
      ],
    },
    contact: {
      badge: 'DIRECT INQUIRIES & PARTNERSHIPS',
      title: 'Connect with Unionsvc Group',
      subtitle: 'Schedule an enterprise architectural consultation, request a live platform demo, or obtain investor materials.',
      emailLabel: 'Direct Communications',
      emailValue: 'Contact@unionsvc.com',
      hqLabel: 'Global Operations',
      hqValue: 'Tokyo // Berlin // London // Global',
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
        { label: 'Solutions', href: '#solutions' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Privacy Policy', href: '#privacy' },
      ],
      contactInfoTitle: 'Contact Information',
      email: 'Contact@unionsvc.com',
      corporateHq: 'Corporate HQ',
      locations: 'Tokyo // Berlin // London // Global',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
    },
  },
  ar: {
    nav: {
      brand: 'Union|svc Group',
      brandSub: 'اللوجستيات الذكية والتقنيات المشفرة',
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
      badge: 'ذكاء اللوجستيات للمؤسسات الكبرى // شبكة عصبية مشفرة',
      headline: 'إعادة صياغة اللوجستيات الذكية عبر الاتصالات المشفرة والتكامل التقني المتقدم.',
      subHeadline:
        'تقدم مجموعة Unionsvc Group الجيل القادم من خدمات الوساطة الرقمية للشحن وإدارة سلاسل الإمداد للشركات الكبرى والمؤسسات—مدعومة بالذكاء الاصطناعي، والتشفير الشامل من طرف إلى طرف، والموثوقية الفائقة لتأمين وإدارة كامل سلاسل التوريد.',
      ctaExplore: 'استكشف الحلول',
      ctaInvestor: 'العرض التقديمي للمستثمرين',
      telemetryTitle: 'بيانات التوزيع العصبي المباشر',
      securityBadge: 'تشفير معتمد AES-256 / TLS 1.3',
      metrics: [
        { value: '+4.2 مليار$', label: 'حجم الشحن المضمون' },
        { value: '< 12 ملي ثانية', label: 'زمن استجابة البث البياني' },
        { value: '99.999%', label: 'جاهزية تشغيلية مستمرة' },
        { value: 'صفر ثقة (Zero Trust)', label: 'تحقق مشدد من النقاط الطرفية' },
      ],
    },
    about: {
      badge: 'عن مجموعة UNIONSVC GROUP',
      title: 'بناء البنية التحتية لسلاسل الإمداد العالمية عالية الحساسية',
      lead: 'تُعد Unionsvc Group شركة رائدة في تقنيات اللوجستيات تمكّن سلاسل الإمداد العالمية من خلال منصة وساطة رقمية آمنة وعالية الموثوقية. عبر الجمع بين الذكاء الاصطناعي التنبؤي، والتشفير الشامل للاتصالات، والتكامل السلس مع أنظمة المؤسسات، نقدم تجربة غير مسبوقة لإدارة اللوجستيات والموارد للقطاعات الحيوية والشركات الكبرى.',
      pillarsTitle: 'ركائزنا الهندسية الأساسية',
      pillars: [
        {
          title: 'وساطة الذكاء الاصطناعي التنبؤي',
          desc: 'خوارزميات عالية السرعة تحلل مواقع الناقلين وتقلبات أسعار السوق الفورية في أجزاء من الثانية.',
          highlight: 'توزيع ذاتي ذكي',
        },
        {
          title: 'الأمان التشفيري الدفاعي',
          desc: 'طبقات حماية ببروتوكولات AES-256 و TLS 1.3 لحماية مسارات النقل وسجلات التتبع ضد التهديدات السيبرانية.',
          highlight: 'أمان بلا تنازل',
        },
        {
          title: 'تكامل أنظمة المؤسسات',
          desc: 'مزامنة ثنائية الاتجاه وفورية مع أنظمة ERP الرائدة مثل SAP و Oracle و Microsoft Dynamics دون تدخل يدوي.',
          highlight: 'بوابة موحدة',
        },
      ],
    },
    visionMission: {
      badge: 'الرؤية والرسالة والأثر المؤسسي',
      title: 'الرؤية والرسالة والأثر المجتمعي',
      subtitle: 'إرساء أساس مستدام وموثوق تقنياً لتجارة ونقل الموارد العالمية.',
      visionLabel: 'رؤيتنا',
      visionText: 'أن نصبح الشبكة العصبية الأكثر أماناً وموثوقية وذكاءً في العالم للخدمات اللوجستية وتكامل الأنظمة.',
      missionLabel: 'رسالتنا',
      missionText: 'تزويد المؤسسات والشركات الكبرى بنظام بيئي ذكي وخالٍ من المخاطر لإدارة الموارد والنقل، يحقق أعلى درجات الكفاءة التشغيلية ويقلل في الوقت ذاته من الانبعاثات الكربونية والهدر المالي.',
      impactLabel: 'الأثر المجتمعي والاقتصادي',
      impactTitle: 'أثر كلي وملموس على الاقتصاد والبيئة',
      impactSubtitle: 'تحقيق قيمة قابلة للقياس عبر خفض التكاليف والاستدامة البيئية والبنية الرقمية.',
      impactItems: [
        {
          tag: 'الكفاءة',
          title: 'كفاءة سلاسل الإمداد',
          desc: 'خفض النفقات التشغيلية وتقليل تكلفة المنتجات النهائية للمستهلكين من خلال التوجيه الآلي وأفضل تسعير عادل.',
          stat: '-28.4%',
          statLabel: 'خفض النفقات التشغيلية',
        },
        {
          tag: 'الاستدامة',
          title: 'الاستدامة البيئية',
          desc: 'تقليل الانبعاثات الكربونية عبر تحسين المسارات المدعوم بالذكاء الاصطناعي وتقليص رحلات العودة الفارغة للشاحنات.',
          stat: '34.2 ألف طن',
          statLabel: 'انبعاثات CO2e تم تجنبها سنوياً',
        },
        {
          tag: 'التحول الرقمي',
          title: 'التحول الرقمي المستدام',
          desc: 'دفع عجلة اقتصاد رقمي آمن ومستدام للصناعات الحيوية والبنى التحتية الحساسة مع تدقيق تشفيري غير قابل للتلاعب.',
          stat: '100%',
          statLabel: 'قابلية تدقيق مشفرة',
        },
      ],
    },
    solutions: {
      badge: 'الحلول التقنية الرئيسية // بنية الأنظمة',
      title: 'الحلول الرئيسية وحزمة التقنيات',
      subtitle: 'مصممة خصيصاً للشركات والمؤسسات التي تتطلب أماناً مطلقاً وتوزيعاً آلياً وتكاملاً عميقاً للأنظمة.',
      techStackBadge: 'بنية تحتية بمستوى المؤسسات الكبرى',
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
          techTags: ['Predictive ML', 'Dynamic Pricing Matrix', 'Autonomous Dispatch', 'Smart Bill of Lading'],
          metricLabel: 'متوسط وقت التوزيع',
          metricValue: '< 45 ثانية',
        },
        {
          id: 'encrypted-comms',
          number: '02',
          title: 'اتصالات فائقة الأمان ومشفّرة بالكامل',
          subtitle: 'تشفير دفاعي للبيانات وحماية أجهزة إنترنت الأشياء',
          bullets: [
            'تشفير شامل من طرف إلى طرف لجميع بيانات الشحنات، والتتبع عن بُعد، والمعاملات المالية (AES-256 / TLS 1.3).',
            'أمان متقدم لأجهزة إنترنت الأشياء (IoT) والاتصالات اللاسلكية لحماية أجهزة استشعار الأسطول من التلاعب والتهديدات السيبرانية.',
            'بنية صارمة قائمة على "صفر ثقة" (Zero Trust Architecture) للتحكم في وصول النظام عبر جميع النقاط الطرفية.',
          ],
          techTags: ['AES-256 GCM', 'TLS 1.3', 'Hardware Security Modules', 'Zero Trust IAM', 'Mutual TLS'],
          metricLabel: 'حوادث الاختراق الأمني',
          metricValue: 'صفر حوادث',
        },
        {
          id: 'erp-integration',
          number: '03',
          title: 'تكامل أنظمة المؤسسات (واجهة برمجة تطبيقات موحدة)',
          subtitle: 'ربط مباشر وفوري مع كبرى منصات تخطيط الموارد',
          bullets: [
            'تكامل سلس ومباشر عبر واجهة برمجة التطبيقات (API) مع منصات ERP الرائدة (SAP و Oracle و Microsoft Dynamics).',
            'مزامنة آلية وفورية للمخزون، وإدارة المستودعات (WMS)، وتتبع الشحنات دون الحاجة إلى إدخال يدوي للبيانات.',
          ],
          techTags: ['SAP S/4HANA', 'Oracle Cloud ERP', 'MS Dynamics 365', 'GraphQL / REST Webhooks', 'WMS Connectors'],
          metricLabel: 'إلغاء الإدخال اليدوي',
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
          techTags: ['Event-Driven Kafka', 'Offline-First Edge', 'Multi-Region Failover', '99.999% High Availability'],
          metricLabel: 'نسبة الجاهزية والتشغيل',
          metricValue: '99.999%',
        },
      ],
    },
    investors: {
      badge: 'علاقات المستثمرين // تسريع رأس المال',
      title: 'لماذا تستثمر في مجموعة Unionsvc Group؟',
      subtitle: 'في ملتقى اقتصاد سلاسل الإمداد المقدر بمليارات الدولارات والتقنيات العميقة فائقة الأمان.',
      whyInvestTitle: 'أبرز مميزات الاستثمار',
      ctaButton: 'طلب العرض التقديمي للاستثمار',
      points: [
        {
          number: '01',
          title: 'سوق ضخم يستهدف مليارات الدولارات',
          desc: 'الاستفادة من نقطة التقاء عالية النمو بين التقنيات العميقة (Deep Tech) والخدمات اللوجستية للمؤسسات لتلبية الطلب العالمي المتزايد على الأمان والاستدامة وخفض الانبعاثات.',
          highlight: 'سوق مستهدف بقيمة 4.2 تريليون دولار',
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
      badge: 'التواصل المباشر والشراكات الاستراتيجية',
      title: 'تواصل مع مجموعة Unionsvc Group',
      subtitle: 'احجز استشارة معملية تقنية، أو اطلب عرضاً مباشراً للمنصة، أو احصل على ملف المستثمرين الاستراتيجي.',
      emailLabel: 'البريد الإلكتروني المباشر',
      emailValue: 'Contact@unionsvc.com',
      hqLabel: 'المقر والشبكة العالمية',
      hqValue: 'طوكيو // برلين // لندن // شبكة عالمية',
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
      locations: 'Tokyo // Berlin // London // Global',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية',
    },
  },
};
