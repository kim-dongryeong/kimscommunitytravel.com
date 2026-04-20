// Mobile nav toggle
const burger = document.querySelector('.nav-burger');
const mobileNav = document.querySelector('.nav-mobile');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Close mobile nav on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 640 && mobileNav) {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
});
