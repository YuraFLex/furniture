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
