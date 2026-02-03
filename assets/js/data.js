// assets/js/data.js

export const resources = {
    en: {
        // Nav
        nav_home: "Home",
        nav_services: "Services",
        nav_blog: "Blog",
        nav_bio: "Connect",
        cta_start: "Start Project",
        tagline_short: "Enterprise Solutions",
        
        // Hero (Home)
        hero_badge: "Engineering the Future",
        hero_title_1: "We Architect",
        hero_title_2: "Digital Intelligence",
        hero_desc: "SaaSprite integrates advanced AI with robust software engineering to build enterprise systems that don't just work—they evolve.",
        btn_explore: "Explore Solutions",
        btn_contact: "Get in Touch",
        
        // Stats (Home)
        stat_uptime: "System Uptime",
        stat_tech: "Ready Tech Stack",
        stat_clients: "Enterprise Clients",
        stat_sec_val: "SECURE",
        stat_security: "Bank-Grade Security",

        // Services
        srv_label: "Core Services",
        srv_title: "Full-Stack Capabilities",
        srv_odoo_title: "Odoo ERP Customization",
        srv_odoo_desc: "We don't just install Odoo; we re-engineer it. From supply chain to HR, we build modules that fit your specific workflow like a glove.",
        srv_app_title: "Elite Mobile Apps",
        srv_app_desc: "Native & Flutter development for brands that target the top 1% of the market.",
        srv_auto_title: "Business Automation",
        srv_auto_desc: "Reduce operational costs by 60% via intelligent automated workflows.",
        srv_med_title: "Specialized Systems",
        
        // Real Estate Keys
        srv_re_title: "Real Estate OS",
        srv_re_desc: "For Developers: Manage unit inventory, off-plan sales, and payment plans.",
        srv_pm_title: "Property Mgmt",
        srv_pm_desc: "For Leasing: End-to-end tenant management, rent collection, and contracts.",

        // Blog
        blog_title: "SaaSprite",
        blog_subtitle: "Engineering thoughts on the 2026 digital landscape.",
        
        // Article Page
        back_to_blog: "Back to Insights",
        art_cta_text: "Ready to implement this solution?",
        art_cta_btn: "Discuss with SaaSprite",
        
        // Bio & Contact Links
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

        // Hero (Home)
        hero_badge: "نهندس المستقبل",
        hero_title_1: "نحن نهندس",
        hero_title_2: "الذكاء الرقمي",
        hero_desc: "تدمج SaaSprite الذكاء الاصطناعي المتقدم مع هندسة البرمجيات الصلبة لبناء أنظمة مؤسساتية لا تعمل فحسب، بل تتطور وتتعلم.",
        btn_explore: "استكشف خدماتنا",
        btn_contact: "تواصل معنا",

        // Stats (Home)
        stat_uptime: "استقرار النظام",
        stat_tech: "جاهزية لعام 2026",
        stat_clients: "عملاء حول العالم",
        stat_sec_val: "آمن 100%",
        stat_security: "أمان بنكي",

        // Services
        srv_label: "نظامنا البيئي",
        srv_title: "قدرات برمجية شاملة",
        srv_odoo_title: "تخصيص أنظمة Odoo",
        srv_odoo_desc: "نحن لا نثبت أودو فقط، بل نعيد هندسته. من سلاسل التوريد إلى الموارد البشرية، نبني وحدات تناسب دورة عملك بدقة.",
        srv_app_title: "تطبيقات النخبة",
        srv_app_desc: "تطوير تطبيقات Native و Flutter للعلامات التجارية التي تستهدف شريحة النخبة من العملاء.",
        srv_auto_title: "أتمتة الأعمال",
        srv_auto_desc: "تقليل التكاليف التشغيلية بنسبة 60% من خلال مسارات عمل ذكية وآلية.",
        srv_med_title: "أنظمة قطاعية متخصصة",

        // Real Estate Keys
        srv_re_title: "نظام تشغيل التطوير العقاري",
        srv_re_desc: "للمطورين: إدارة مخزون الوحدات، المبيعات على الخارطة، وخطط الدفع.",
        srv_pm_title: "إدارة الأملاك والتأجير",
        srv_pm_desc: "للتأجير: إدارة شاملة لدورة حياة المستأجر، العقود، وتحصيل الإيجارات.",

        // Blog
        blog_title: "رؤى",
        blog_subtitle: "أفكار هندسية حول المشهد الرقمي لعام 2026.",

        // Article Page
        back_to_blog: "العودة للمقالات",
        art_cta_text: "هل أنت مستعد لتنفيذ هذا الحل؟",
        art_cta_btn: "ناقش مشروعك معنا",

        // Bio & Contact Links
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
        date: { en: "Oct 12, 2026", ar: "12 أكتوبر 2026" },
        title: { en: "Workflow Automation in 2026: The Efficiency Revolution", ar: "أتمتة سير العمل في 2026: ثورة الكفاءة المؤسسية" },
        desc: { en: "Why manual data entry is killing your profit margins and how AI agents are taking over operational tasks.", ar: "لماذا يعتبر الإدخال اليدوي للبيانات القاتل الأول للأرباح؟ وكيف بدأت وكلاء الذكاء الاصطناعي بالسيطرة على المهام التشغيلية." },
        content: {
            en: `
                <p>In the rapidly evolving landscape of 2026, manual data entry is not just an inefficiency; it's a liability. Enterprise organizations are shifting towards <strong>Autonomous AI Agents</strong> that handle complex workflows without human intervention.</p>
                <h3>The Hidden Cost of Manual Work</h3>
                <p>Studies show that employees spend up to 30% of their time on repetitive tasks. By implementing SaaSprite's automation protocols, companies can reclaim this time for strategic thinking and innovation.</p>
                <h3>What Can Be Automated?</h3>
                <ul>
                    <li>- Customer Onboarding & KYC</li>
                    <li>- Invoice Processing & Financial Reconciliation</li>
                    <li>- Social Media Scheduling & Response</li>
                </ul>
                <p>The future belongs to those who automate. It's time to let the machines handle the mundane.</p>
            `,
            ar: `
                <p>في المشهد المتسارع لعام 2026، لم يعد الإدخال اليدوي للبيانات مجرد "قلة كفاءة"، بل أصبح عبئاً مالياً خطيراً. تتجه المؤسسات الكبرى اليوم نحو <strong>وكلاء الذكاء الاصطناعي المستقلين</strong> الذين يديرون مسارات عمل معقدة دون تدخل بشري.</p>
                <h3>التكلفة الخفية للعمل اليدوي</h3>
                <p>تظهر الدراسات أن الموظفين يقضون ما يصل إلى 30% من وقتهم في مهام متكررة. من خلال تطبيق بروتوكولات الأتمتة من SaaSprite، يمكن للشركات استعادة هذا الوقت للتفكير الاستراتيجي والابتكار.</p>
                <h3>ما الذي يمكن أتمتته؟</h3>
                <ul>
                    <li>- تسجيل العملاء والتحقق من الهوية (KYC)</li>
                    <li>- معالجة الفواتير والمطابقات المالية</li>
                    <li>- جدولة والرد على وسائل التواصل الاجتماعي</li>
                </ul>
                <p>المستقبل لمن يؤتمت أعماله. حان الوقت لترك المهام الروتينية للآلات.</p>
            `
        },
        color: "emerald"
    },
    {
        id: 2,
        category: { en: "Web Presence", ar: "الويب" },
        date: { en: "Sep 28, 2026", ar: "28 سبتمبر 2026" },
        title: { en: "The Luxury Website Standard: Your Digital HQ", ar: "الموقع الإلكتروني الفاخر: مقر شركتك الرقمي" },
        desc: { en: "Your website is your global HQ. It determines your market valuation before a client even speaks to you.", ar: "موقعك هو مقر شركتك العالمي. هو الذي يحدد قيمتك السوقية قبل أن يتحدث العميل معك بكلمة واحدة." },
        content: {
            en: `
                <p>A website is no longer just a digital brochure. In 2026, it is the primary indicator of a company's credibility, solvency, and attention to detail. High-net-worth clients judge your capability within 0.05 seconds of page load.</p>
                <h3>Speed is the New Luxury</h3>
                <p>Slow websites signal outdated infrastructure. At SaaSprite, we engineer sites that load instantly, providing a seamless, app-like experience that commands respect.</p>
                <h3>Interactive Storytelling</h3>
                <p>Static pages are dead. The modern web is about immersive experiences, micro-interactions, and 3D visuals that tell your brand's story without saying a word.</p>
            `,
            ar: `
                <p>لم يعد الموقع الإلكتروني مجرد "بروشور رقمي". في عام 2026، هو المؤشر الأول لمصداقية الشركة وملاءتها المالية واهتمامها بالتفاصيل. عملاء النخبة يحكمون على قدراتك خلال 0.05 ثانية من تحميل الصفحة.</p>
                <h3>السرعة هي الفخامة الجديدة</h3>
                <p>المواقع البطيئة تعطي انطباعاً ببنية تحتية متهالكة. في SaaSprite، نهندس مواقع تفتح فورياً، موفرة تجربة سلسة تشبه التطبيقات وتفرض الاحترام.</p>
                <h3>سرد القصص التفاعلي</h3>
                <p>الصفحات الجامدة ماتت. الويب الحديث يتمحور حول التجارب الغامرة، التفاعلات الدقيقة (Micro-interactions)، والمرئيات ثلاثية الأبعاد التي تروي قصة علامتك التجارية دون أن تنطق بكلمة.</p>
            `
        },
        color: "blue"
    },
    {
        id: 3,
        category: { en: "Mobile", ar: "تطبيقات" },
        date: { en: "Aug 15, 2026", ar: "15 أغسطس 2026" },
        title: { en: "Apps for High-Net-Worth Clients: The Loyalty Key", ar: "تطبيقات النخبة: مفتاح الولاء لعملاء الـ VIP" },
        desc: { en: "How UX dictates loyalty in the premium sector and why a mobile app is necessary for retention.", ar: "كيف تحدد تجربة المستخدم (UX) ولاء العملاء في القطاعات الراقية ولماذا التطبيق ضرورة للاحتفاظ بهم." },
        content: {
            en: `
                <p>Push notifications have a 90% open rate compared to 20% for email. If you want to reach elite clients, you need to be in their pocket, not just their inbox.</p>
                <h3>Direct Channel to Revenue</h3>
                <p>A native mobile app removes friction from the buying process. With Apple Pay and biometric login, the path from "desire" to "purchase" is reduced to seconds.</p>
                <h3>Exclusivity via Software</h3>
                <p>Apps allow you to create tiered loyalty programs where your top clients feel valued through exclusive access, creating an ecosystem they never want to leave.</p>
            `,
            ar: `
                <p>تتمتع إشعارات التطبيق (Push Notifications) بمعدل فتح يصل إلى 90% مقارنة بـ 20% للإيميل. إذا كنت تريد الوصول لعملاء النخبة، يجب أن تكون في جيوبهم، لا في صندوق بريدهم الممتلئ.</p>
                <h3>قناة مباشرة للإيرادات</h3>
                <p>تزيل تطبيقات الموبايل (Native Apps) أي عقبات في عملية الشراء. مع Apple Pay والدخول بالبصمة، يتقلص المسار من "الرغبة" إلى "الشراء" لبضع ثوانٍ فقط.</p>
                <h3>الحصرية عبر البرمجيات</h3>
                <p>تسمح التطبيقات بإنشاء برامج ولاء متدرجة يشعر فيها كبار عملائك بالتقدير من خلال وصول حصري، مما يخلق نظاماً بيئياً لا يرغبون بمغادرته أبداً.</p>
            `
        },
        color: "purple"
    }
];
