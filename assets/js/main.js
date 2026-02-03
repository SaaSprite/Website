// assets/js/main.js
import { resources, blogPosts } from './data.js';
import { ParticleNetwork } from './engine.js';

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

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (resources[lang][key]) {
                el.innerText = resources[lang][key];
            }
        });
        router.renderBlog();
    }
};

// --- Router ---
const router = {
    navigate(viewId) {
        document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
        const target = document.getElementById(`view-${viewId}`);
        if (target) {
            target.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    renderBlog() {
        const container = document.getElementById('blog-grid');
        if(!container) return;
        const lang = langManager.current;
        
        container.innerHTML = blogPosts.map(post => `
            <div class="glass-card rounded-3xl overflow-hidden group cursor-pointer">
                <div class="h-48 bg-${post.color}-500/10 flex items-center justify-center p-8 relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60"></div>
                    <i class="fa-solid fa-layer-group text-4xl text-${post.color}-500 opacity-50 group-hover:scale-110 transition-transform"></i>
                </div>
                <div class="p-8">
                    <span class="text-[10px] text-${post.color}-400 font-bold uppercase tracking-widest border border-${post.color}-500/30 px-2 py-1 rounded mb-4 inline-block">${post.category[lang]}</span>
                    <h4 class="text-xl font-bold mb-3 group-hover:text-brand-500 transition-colors">${post.title[lang]}</h4>
                    <p class="text-slate-500 text-xs leading-relaxed">${post.desc[lang]}</p>
                    <div class="mt-6 flex items-center gap-2 text-${post.color}-400 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                        <span>Read Article</span> <i class="fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                    </div>
                </div>
            </div>
        `).join('');
    }
};

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    // 1. Remove Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }, 1000);

    // 2. Init Engine
    new ParticleNetwork('canvas-bg');
    
    // 3. Init Lang & Blog
    langManager.update();

    // 4. Mouse Glow
    const glow = document.getElementById('mouse-glow');
    document.addEventListener('mousemove', (e) => {
        if(glow) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }
    });

    // 5. Expose functions to HTML (Global Scope)
    window.router = router;
    window.langManager = langManager;
});
