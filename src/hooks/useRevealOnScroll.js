// Simple module that sets up an IntersectionObserver for elements with .reveal-on-scroll
// It runs immediately when imported.

const setupRevealOnScroll = (opts = {}) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const options = {
    root: null,
    rootMargin: opts.rootMargin || '0px 0px -8% 0px',
    threshold: opts.threshold || 0.12,
  };

  const revealElements = () => document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // If you want one-time reveal, unobserve
        obs.unobserve(entry.target);
      }
    });
  }, options);

  // observe existing elements
  const els = revealElements();
  els.forEach(el => observer.observe(el));

  // also watch for dynamically added elements
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      m.addedNodes && m.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.classList && node.classList.contains('reveal-on-scroll')) observer.observe(node);
          // also observe children
          node.querySelectorAll && node.querySelectorAll('.reveal-on-scroll').forEach(child => observer.observe(child));
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
};

export default setupRevealOnScroll;
