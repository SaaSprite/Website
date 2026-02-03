// assets/js/data.js

export const resources = {
    en: {
        // ... (Nav keys remain same)
        nav_home: "Home",
        nav_services: "Services",
        nav_blog: "Blog",
        nav_bio: "Connect",
        cta_start: "Start Project",
        tagline_short: "Enterprise Solutions",

        // Hero (Home Page)
        hero_badge: "Engineering the Future",
        hero_title_1: "We Architect",
        hero_title_2: "Digital Intelligence",
        hero_desc: "SaaSprite integrates advanced AI with robust software engineering to build enterprise systems that don't just work—they evolve.",
        btn_explore: "Explore Solutions",
        btn_contact: "Get in Touch",
        
        // Stats (Home Page)
        stat_uptime: "System Uptime",
        stat_tech: "Ready Tech Stack",
        stat_clients: "Enterprise Clients",
        stat_sec_val: "SECURE",        // <-- New Key
        stat_security: "Bank-Grade Architecture",

        // ... (Services, Blog, Bio keys remain same)
        srv_label: "Core Services",
        srv_title: "Full-Stack Capabilities",
        srv_odoo_title: "Odoo ERP Customization",
        srv_odoo_desc: "We don't just install Odoo; we re-engineer it. From supply chain to HR, we build modules that fit your specific workflow like a glove.",
        srv_app_title: "Elite Mobile Apps",
        srv_app_desc: "Native & Flutter development for brands that target the top 1% of the market.",
        srv_auto_title: "Business Automation",
        srv_auto_desc: "Reduce operational costs by 60% via intelligent automated workflows.",
        srv_med_title: "Specialized Systems",
        srv_re_title: "Real Estate OS",
        srv_re_desc: "For Developers: Manage unit inventory, off-plan sales, and payment plans.",
        srv_pm_title: "Property Mgmt",
        srv_pm_desc: "For Leasing: End-to-end tenant management, rent collection, and contracts.",
        blog_title: "SaaSprite",
        blog_subtitle: "Engineering thoughts on the 2026 digital landscape.",
        bio_role: "Global Enterprise Software House",
        bio_wa: "WhatsApp Support",
        bio_email: "info@saasprite.com",
        bio_linkedin: "LinkedIn",
        bio_x: "X (Twitter)",
        bio_insta: "Instagram",
        bio_fb: "Facebook",
        bio_tiktok: "TikTok",
        bio_yt: "YouTube Channel",
        bio_portfolio: "Download Portfolio (PDF)"
    },
    ar: {
        // Nav
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_blog: "المدونة",
        nav_bio: "تواصل معنا",
        cta_start: "ابدأ مشروعك",
        tagline_short: "حلول تقنية للمؤسسات",

        // Hero (Home Page) - ترجمة محسنة
        hero_badge: "نصنع مستقبل التكنولوجيا",
        hero_title_1: "نحن نهندس",
        hero_title_2: "الذكاء الرقمي",
        hero_desc: "تدمج SaaSprite الذكاء الاصطناعي المتقدم مع هندسة البرمجيات الصلبة لبناء أنظمة مؤسساتية لا تعمل فحسب، بل تتطور وتتعلم.",
        btn_explore: "استكشف خدماتنا",
        btn_contact: "تواصل معنا",

        // Stats (Home Page)
        stat_uptime: "استقرار النظام",
        stat_tech: "جاهزية لعام 2026",
        stat_clients: "عملاء حول العالم",
        stat_sec_val: "آمن 100%",      // <-- New Key Translated
        stat_security: "بنية تحتية بنكية",

        // ... (Services, Blog, Bio translated keys)
        srv_label: "نظامنا البيئي",
        srv_title: "قدرات برمجية شاملة",
        srv_odoo_title: "تخصيص أنظمة Odoo",
        srv_odoo_desc: "نحن لا نثبت أودو فقط، بل نعيد هندسته. من سلاسل التوريد إلى الموارد البشرية، نبني وحدات تناسب دورة عملك بدقة.",
        srv_app_title: "تطبيقات النخبة",
        srv_app_desc: "تطوير تطبيقات Native و Flutter للعلامات التجارية التي تستهدف شريحة النخبة من العملاء.",
        srv_auto_title: "أتمتة الأعمال",
        srv_auto_desc: "تقليل التكاليف التشغيلية بنسبة 60% من خلال مسارات عمل ذكية وآلية.",
        srv_med_title: "أنظمة قطاعية متخصصة",
        srv_re_title: "نظام تشغيل التطوير العقاري",
        srv_re_desc: "للمطورين: إدارة مخزون الوحدات، المبيعات على الخارطة، وخطط الدفع.",
        srv_pm_title: "إدارة الأملاك والتأجير",
        srv_pm_desc: "للتأجير: إدارة شاملة لدورة حياة المستأجر، العقود، وتحصيل الإيجارات.",
        blog_title: "رؤى",
        blog_subtitle: "أفكار هندسية حول المشهد الرقمي لعام 2026.",
        bio_role: "بيت برمجيات عالمي",
        bio_wa: "تواصل عبر واتساب",
        bio_email: "info@saasprite.com",
        bio_linkedin: "لينكد إن",
        bio_x: "منصة X (تويتر)",
        bio_insta: "انستغرام",
        bio_fb: "فيسبوك",
        bio_tiktok: "تيك توك",
        bio_yt: "قناة اليوتيوب",
        bio_portfolio: "تحميل الملف التعريفي (PDF)"
    }
};

export const blogPosts = [
    {
        id: 1,
        category: { en: "Automation", ar: "أتمتة الأعمال" },
        title: { en: "Workflow Automation in 2026", ar: "كيف تعيد الأتمتة صياغة العمل في 2026؟" },
        desc: { en: "Why manual data entry is killing your profit margins.", ar: "لماذا يعتبر الإدخال اليدوي للبيانات القاتل الأول للأرباح؟" },
        color: "emerald"
    },
    {
        id: 2,
        category: { en: "Web Presence", ar: "الويب" },
        title: { en: "The Luxury Website Standard", ar: "الموقع الإلكتروني كهوية للنخبة" },
        desc: { en: "Your website is your global HQ. Make it count.", ar: "موقعك هو مقر شركتك العالمي، اجعله يعكس هيبتك." },
        color: "blue"
    },
    {
        id: 3,
        category: { en: "Mobile", ar: "تطبيقات" },
        title: { en: "Apps for High-Net-Worth Clients", ar: "تطبيقات تستهدف كبار العملاء" },
        desc: { en: "How UX dictates loyalty in the premium sector.", ar: "كيف تحدد تجربة المستخدم (UX) ولاء العملاء في القطاعات الراقية." },
        color: "purple"
    }
];
