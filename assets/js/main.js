import { resources, blogPosts } from './data.js';
import { ParticleNetwork } from './engine.js';

// --- State ---
let currentArticleId = null;

// --- Language Manager ---
const langManager = {
    current: 'ar',
    toggle() {
        this.current = this.current === 'en' ? 'ar' : 'en';
        this.update();
    },
    update() {
        const lang = this.current;
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
        
        const langBtn = document.getElementById('current-lang');
        if(langBtn) langBtn.innerText = lang === 'ar' ? 'EN' : 'AR';

        // Translate Static Elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (resources[lang][key]) {
                el.innerText = resources[lang][key];
            }
        });
        
        // Re-render Blog Grid if visible
        if(document.getElementById('blog-grid')) {
            router.renderBlogCards();
        }

        // Re-render Article if open
        if(currentArticleId !== null && document.getElementById('art-title')) {
            router.populateArticle(currentArticleId);
        }
    }
};

// --- Advanced Router ---
const router = {
    cache: {}, 
    
    async navigate(viewId) {
        // If leaving article view, reset ID
        if(viewId !== 'article') currentArticleId = null;

        const container = document.getElementById('app-container');
        
        if (!this.cache[viewId]) {
            try {
                const response = await fetch(`views/${viewId}.html`);
                if (!response.ok) throw new Error('Page not found');
                this.cache[viewId] = await response.text();
            } catch (error) {
                console.error(error);
                return;
            }
        }

        container.innerHTML = this.cache[viewId];
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Post-Load Logic
        langManager.update();
        
        if (viewId === 'blog') {
            this.renderBlogCards();
        }
    },

    // Function to open specific article
    async openArticle(id) {
        await this.navigate('article'); // Load the template first
        this.populateArticle(id);
        currentArticleId = id;
    },

    // Fill the template with data
    populateArticle(id) {
        const post = blogPosts.find(p => p.id === id);
        if(!post) return;

        const lang = langManager.current;

        // Elements
        const titleEl = document.getElementById('art-title');
        const catEl = document.getElementById('art-cat');
        const dateEl = document.getElementById('art-date');
        const bodyEl = document.getElementById('art-body');

        if(titleEl) {
            titleEl.innerText = post.title[lang];
            catEl.innerText = post.category[lang];
            dateEl.innerText = post.date[lang];
            bodyEl.innerHTML = post.content[lang]; // Use innerHTML for formatting
            
            // Back button translation handling
            const backBtn = document.querySelector('[data-i18n="back_to_blog"]');
            if(backBtn) backBtn.innerText = lang === 'ar' ? 'العودة للمقالات' : 'Back to Insights';
        }
    },

    renderBlogCards() {
        const container = document.getElementById('blog-grid');
        if(!container) return;
        const lang = langManager.current;
        
        container.innerHTML = ''; 

        container.innerHTML = blogPosts.map(post => `
            <div class="glass-card rounded-3xl overflow-hidden group cursor-pointer" onclick="router.openArticle(${post.id})">
                <div class="h-48 bg-${post.color}-500/10 flex items-center justify-center p-8 relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60"></div>
                    <i class="fa-solid fa-layer-group text-4xl text-${post.color}-500 opacity-50 group-hover:scale-110 transition-transform"></i>
                </div>
                <div class="p-8">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-[10px] text-${post.color}-400 font-bold uppercase tracking-widest border border-${post.color}-500/30 px-2 py-1 rounded">${post.category[lang]}</span>
                        <span class="text-[10px] text-slate-500 font-mono">${post.date[lang]}</span>
                    </div>
                    <h4 class="text-xl font-bold mb-3 group-hover:text-brand-500 transition-colors line-clamp-2">${post.title[lang]}</h4>
                    <p class="text-slate-500 text-xs leading-relaxed line-clamp-3">${post.desc[lang]}</p>
                    <div class="mt-6 flex items-center gap-2 text-${post.color}-400 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                        <span>${lang === 'ar' ? 'اقرأ المزيد' : 'Read Article'}</span> 
                        <i class="fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                    </div>
                </div>
            </div>
        `).join('');
    }
};

// --- Mobile Menu Logic (Moved from HTML) ---
const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden-menu')) {
        menu.classList.remove('hidden-menu');
        menu.classList.add('visible-menu');
    } else {
        menu.classList.add('hidden-menu');
        menu.classList.remove('visible-menu');
    }
};

const mobileNavigate = (route) => {
    toggleMobileMenu(); // Close menu
    router.navigate(route); // Navigate
};

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }, 1000);

    new ParticleNetwork('canvas-bg');
    router.navigate('home');

    const glow = document.getElementById('mouse-glow');
    document.addEventListener('mousemove', (e) => {
        if(glow) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }
    });

    window.router = router;
    window.langManager = langManager;
    window.toggleMobileMenu = toggleMobileMenu;
    window.mobileNavigate = mobileNavigate;
});
