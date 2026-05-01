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

// Scale poster iframes to fit their wrapper using ResizeObserver
// (fires reliably when wrapper has its true layout size, regardless
// of iframe cache state)
(function () {
  const wraps = document.querySelectorAll('.ig-html-wrap, .poster-iframe-wrap');
  if (!wraps.length) return;

  const lastW = new WeakMap();

  function applyScale(wrap, w) {
    const iframe = wrap.querySelector('iframe');
    if (!iframe || !w) return;
    const posterW = Number(iframe.dataset.posterW) || 1080;
    const posterH = Number(iframe.dataset.posterH) || 1080;
    const scale = w / posterW;
    iframe.style.transform = `scale(${scale})`;
    // Only override the aspect-ratio-derived height if poster isn't square
    if (posterW !== posterH) {
      wrap.style.height = Math.round(posterH * scale) + 'px';
    }
  }

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (lastW.get(entry.target) === w) continue;
        lastW.set(entry.target, w);
        applyScale(entry.target, w);
      }
    });
    wraps.forEach(wrap => ro.observe(wrap));
  } else {
    // Fallback for very old browsers
    function rescaleAll() {
      wraps.forEach(wrap => applyScale(wrap, wrap.getBoundingClientRect().width));
    }
    window.addEventListener('load', rescaleAll);
    window.addEventListener('resize', rescaleAll);
    rescaleAll();
  }
})();
