(function () {
  const tocLinks = document.querySelectorAll('.toc-container nav a');
  if (!tocLinks.length) return;

  const headings = Array.from(tocLinks).map(link => {
    const id = decodeURIComponent(link.getAttribute('href').slice(1));
    return document.getElementById(id);
  }).filter(Boolean);

  const activate = (el) => {
    tocLinks.forEach(l => l.classList.remove('toc-active'));
    if (el) el.classList.add('toc-active');
  };

  // Intercept TOC clicks: smooth scroll without pushing history
  tocLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = decodeURIComponent(this.getAttribute('href').slice(1));
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
        activate(this);
      }
    });
  });

  // "on this page" heading scrolls to top
  const topLink = document.querySelector('.toc-top-link');
  if (topLink) {
    topLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname);
      activate(null);
    });
  }

  // Scroll spy
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.toc-container nav a[href="#${CSS.escape(id)}"]`);
        activate(link);
      }
    });
  }, { rootMargin: '0px 0px -80% 0px', threshold: 0 });

  headings.forEach(h => observer.observe(h));
})();
