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