window.addEventListener('DOMContentLoaded', () => {

  const mainNav = document.querySelector('#mainNav');

  const shrinkNav = () => {
    if (!mainNav) return;
    mainNav.classList.toggle('navbar-shrink', window.scrollY !== 0);
  };

  shrinkNav();
  document.addEventListener('scroll', shrinkNav);

  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const toggler = document.querySelector('.navbar-toggler');
  document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(toggler).display !== 'none') toggler.click();
    });
  });

});