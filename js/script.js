/* ローディング
--------------------------------- */
const loading = document.getElementById('js_loading');
window.addEventListener('load', () => {
    loading.classList.add('loaded');
});

/* ヘッダーメニューのドロワー
--------------------------------- */
const btn = document.getElementById('js_btn');
const nav = document.getElementById('js_open-contents');
const navBtn = document.getElementsByClassName('js_navBtn');

btn.addEventListener('click', () => {
    btn.classList.toggle('js_open-btn');
    nav.classList.toggle('js_open-nav');
});

for(let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', () => {
        btn.classList.remove('js_open-btn');
        nav.classList.remove('js_open-nav');
    });
}

/* スクロール
--------------------------------- */
const scrollLink = document.querySelectorAll('a[href^="#"]');

for(let i = 0; i < scrollLink.length; i++) {
    scrollLink[i].addEventListener('click', (e) => {
        e.preventDefault();
        let elHash = scrollLink[i].getAttribute('href');
        let el = document.getElementById(elHash.replace('#', ''));
        const rect = el.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 150;
        const target = rect + offset - gap;

        window.scrollTo({
            top: target,
            behavior: 'smooth'
        });
    });
}

/* トップスクロール
--------------------------------- */
const toTop = document.getElementById('js_to-top');

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* アニメーション
--------------------------------- */
window.onload = () => {
    const anime = document.querySelectorAll('.anime');
    const animeList = document.querySelectorAll('.anime_list');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('scroll-in');
                io.unobserve(entry.target);
            }
        });
    }
    const cbList = function(entries, observer) {
        entries.forEach((entry, i) => {
            const delay = i * 500;
            if(entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.classList.add('scroll-in');
                }, delay);
            }
        });
    }

    const options = {
        root: null,
        rootMargin: "-300px 0px 0px 0px"
    }
    const io = new IntersectionObserver(cb, options);
    const ioList = new IntersectionObserver(cbList, options);
    anime.forEach(el => io.observe(el));
    animeList.forEach(el => ioList.observe(el));
}
