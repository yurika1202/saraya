/* ヘッダーメニューのドロワー
--------------------------------- */
const btn = document.getElementById('js_btn');
const nav = document.getElementById('js_open-contents');
const navBtn = document.getElementsByClassName('js_navBtn');

btn.addEventListener('click', () => {
    btn.classList.toggle('js_open-btn');
    nav.classList.toggle('js_open-nav');
})

for(let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', () => {
        btn.classList.remove('js_open-btn');
        nav.classList.remove('js_open-nav');
    })
}

/* スクロール
--------------------------------- */
$('.nav__item a[href^="#"]').click(function() {
    var elHash = $(this).attr('href');
    var pos = $(elHash).offset().top-83;
    $('body,html').animate({scrollTop: pos}, 500);
    return false;
  });

  $('.nav__items a[href^="#"]').click(function() {
      var elHash = $(this).attr('href');
      var smPos = $(elHash).offset().top-100;
      $('body,html').animate({scrollTop: smPos}, 500);
      return false;
  })