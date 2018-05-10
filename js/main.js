(() => {
  const mobileWidth = 600;
  const addMenuBackground = () => {
    const pageWidth = window.innerWidth;
    const bodyOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const nav = document.querySelector('header nav');

    if (pageWidth > mobileWidth) {
      bodyOffset > 0 ? nav.classList.add('aw-nav-fixed') : nav.classList.remove('aw-nav-fixed');
    }
  };

  window.addEventListener('scroll', () => {
    addMenuBackground();
  });
})();