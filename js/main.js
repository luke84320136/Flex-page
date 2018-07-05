(() => {
  const mobileWidth = 600;
  const addMenuBackground = () => {
    const pageWidth = window.innerWidth;
    const bodyOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const nav = document.querySelector('header nav');

    if (pageWidth > mobileWidth) {
      bodyOffset > 0 ?
        nav.classList.add('aw-nav-fixed') :
        nav.classList.remove('aw-nav-fixed');
    }
  };

  // click nav items
  const onNavItemClick = () => {
    const navItemList = document.querySelectorAll('.aw-section-link');
    const navItems = [...navItemList];

    navItems.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();

        const sectionId = event.target.getAttribute('href') || event.target.dataset.href;

        scrollToSection(sectionId);
      });
    });
  };

  // 移動到section
  const scrollToSection = sectionId => {
    let sectionPosition, sectionOffset;
    const navigationHeight = document.querySelector('header nav').offsetHeight;
    const pageWidth = window.innerWidth;

    if (sectionId !== '#') {
      sectionOffset = document.querySelector(sectionId).offsetTop;
      sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
    } else {
      sectionPosition = 0;
    }

    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: sectionPosition
    });
  };

  // slide動作
  const onTestimonialChange = () => {
    let firstChild, lastChild;
    let prevArrow = document.querySelector('#aw-testimonials-prev')
    let nextArrow = document.querySelector('#aw-testimonials-next')
    let testimonials = document.querySelector('.aw-testimonials ul');
    // add eventlistener
    document.addEventListener('click', () => {
      if (event.target === prevArrow) {
        lastChild = testimonials.lastElementChild;
        testimonials.insertAdjacentElement('afterbegin', lastChild);
      } else if (event.target === nextArrow) {
        firstChild = testimonials.firstElementChild;
        testimonials.insertAdjacentElement('beforeend', firstChild);
      }
    })
  }

  window.addEventListener('scroll', () => {
    addMenuBackground();
  });
  onNavItemClick();
  onTestimonialChange();
})();