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

// Scale a single iframe poster to fit its wrapper
function scaleOneIframe(iframe) {
  const wrap = iframe.closest('.ig-html-wrap, .poster-iframe-wrap');
  if (!wrap) return;
  const posterW = Number(iframe.dataset.posterW) || 1080;
  const posterH = Number(iframe.dataset.posterH) || 1080;
  const w = wrap.getBoundingClientRect().width;
  if (!w) return;
  const scale = w / posterW;
  iframe.style.transform = `scale(${scale})`;
  wrap.style.height = Math.round(posterH * scale) + 'px';
}

function scaleCardIframes() {
  document.querySelectorAll('.ig-html-wrap iframe, .poster-iframe-wrap iframe').forEach(scaleOneIframe);
}

// Re-scale every iframe when it finishes loading (reliable timing)
document.querySelectorAll('.ig-html-wrap iframe, .poster-iframe-wrap iframe').forEach(iframe => {
  iframe.addEventListener('load', () => scaleOneIframe(iframe));
});

window.addEventListener('resize', scaleCardIframes);
