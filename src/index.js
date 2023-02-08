// Слайдер
$('.privileg-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

$('.slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Открытие/заыкртиые мобильного меню

(() => {
  const refs = {
    openMobileBtn: document.querySelector('[data-menu-open]'),
    closeMobileBtn: document.querySelector('[data-menu-close]'),
    mobile: document.querySelector('[data-menu]'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle('is-open');
  }
})();

// Прокрутка сайта вверх по кнопке в футере

(() => {
  document.querySelector('.footer-btn__up').onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
})();
