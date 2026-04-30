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

// Scale iframe poster previews to fit their wrapper
function scaleCardIframes() {
  document.querySelectorAll('.ig-html-wrap, .poster-iframe-wrap').forEach(wrap => {
    const iframe = wrap.querySelector('iframe');
    if (!iframe) return;
    const posterW = Number(iframe.dataset.posterW) || 1080;
    const posterH = Number(iframe.dataset.posterH) || 1080;
    const scale = wrap.offsetWidth / posterW;
    iframe.style.transform = `scale(${scale})`;
    // Keep wrapper height in sync (needed for non-square posters)
    wrap.style.height = Math.round(posterH * scale) + 'px';
  });
}
scaleCardIframes();
window.addEventListener('resize', scaleCardIframes);
