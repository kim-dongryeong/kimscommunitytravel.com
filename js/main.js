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
  requestAnimationFrame(() => {
    document.querySelectorAll('.ig-html-wrap iframe, .poster-iframe-wrap iframe').forEach(scaleOneIframe);
  });
}

document.querySelectorAll('.ig-html-wrap iframe, .poster-iframe-wrap iframe').forEach(iframe => {
  // Cached case: iframe already loaded before this script ran → scale now
  if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
    requestAnimationFrame(() => scaleOneIframe(iframe));
  }
  // Uncached case: listen for load event
  iframe.addEventListener('load', () => requestAnimationFrame(() => scaleOneIframe(iframe)));
});

// Fallback: re-run after everything on the page has loaded
window.addEventListener('load', scaleCardIframes);
window.addEventListener('resize', scaleCardIframes);
