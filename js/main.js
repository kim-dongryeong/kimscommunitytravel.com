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

// Both blocks below depend on elements that may appear AFTER this script
// in the document — wait for DOMContentLoaded before initialising.
function _kctReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

// Scale poster iframes to fit their wrapper using ResizeObserver
_kctReady(function () {
  const wraps = document.querySelectorAll('.ig-html-wrap, .poster-iframe-wrap, .ig-poster-tile, .trip-hero-poster');
  if (!wraps.length) return;

  const lastW = new WeakMap();

  function applyScale(wrap, w) {
    const iframe = wrap.querySelector('iframe');
    if (!iframe || !w) return;
    // Prefer dimensions on the wrap (where they're defined consistently),
    // fall back to the iframe's own dataset, then to 1080×1080.
    const posterW = Number(wrap.dataset.posterW) || Number(iframe.dataset.posterW) || 1080;
    const posterH = Number(wrap.dataset.posterH) || Number(iframe.dataset.posterH) || 1080;
    iframe.style.width  = posterW + 'px';
    iframe.style.height = posterH + 'px';
    iframe.style.transform = `scale(${w / posterW})`;
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
    function rescaleAll() {
      wraps.forEach(wrap => applyScale(wrap, wrap.getBoundingClientRect().width));
    }
    window.addEventListener('load', rescaleAll);
    window.addEventListener('resize', rescaleAll);
    rescaleAll();
  }
});

// Poster modal — opens any element with [data-poster-src] in a centered iframe
_kctReady(function () {
  const modal = document.getElementById('poster-modal');
  if (!modal) return;

  const frame    = document.getElementById('poster-modal-frame');
  const iframe   = document.getElementById('poster-modal-iframe');
  const closeBtn = document.getElementById('poster-modal-close');
  const prevBtn  = document.getElementById('poster-modal-prev');
  const nextBtn  = document.getElementById('poster-modal-next');

  const triggers = Array.from(document.querySelectorAll('[data-poster-src]'));
  if (!triggers.length) return;

  let currentIdx = -1;

  function fitFrame(w, h) {
    // Cap at 90vw × 90vh while preserving the poster's aspect ratio
    const maxW = window.innerWidth  * 0.9;
    const maxH = window.innerHeight * 0.9;
    const aspect = w / h;
    let frameW, frameH;
    if (maxW / maxH > aspect) {
      frameH = maxH;
      frameW = frameH * aspect;
    } else {
      frameW = maxW;
      frameH = frameW / aspect;
    }
    return { frameW: Math.round(frameW), frameH: Math.round(frameH) };
  }

  function render(idx) {
    currentIdx = idx;
    const t = triggers[idx];
    const src = t.dataset.posterSrc;
    const w   = Number(t.dataset.posterW) || 1080;
    const h   = Number(t.dataset.posterH) || 1080;

    const { frameW, frameH } = fitFrame(w, h);
    frame.style.width   = frameW + 'px';
    frame.style.height  = frameH + 'px';
    iframe.style.width  = w + 'px';
    iframe.style.height = h + 'px';
    iframe.style.transform = `scale(${frameW / w})`;
    if (iframe.getAttribute('src') !== src) iframe.setAttribute('src', src);
  }

  function open(idx) {
    render(idx);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    iframe.setAttribute('src', 'about:blank');
    currentIdx = -1;
  }

  function prev() { render((currentIdx - 1 + triggers.length) % triggers.length); }
  function next() { render((currentIdx + 1) % triggers.length); }

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      open(idx);
    });
  });

  // Hero poster on the trip page → opens the same modal at index 0
  const hero = document.getElementById('trip-hero-poster');
  if (hero && triggers.length) {
    hero.addEventListener('click', e => {
      e.preventDefault();
      open(0);
    });
  }

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
  window.addEventListener('resize', () => { if (currentIdx >= 0) render(currentIdx); });
});
