(function(){
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('nav-list');
  const yearEl = document.getElementById('year');
  const emailLink = document.getElementById('emailLink');
  const copyEmailBtn = document.getElementById('copyEmail');

  // Theme init
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    html.setAttribute('data-theme', savedTheme);
  } else {
    html.setAttribute('data-theme', 'auto');
  }

  // Theme toggle
  themeToggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : current === 'light' ? 'auto' : 'dark';
    html.setAttribute('data-theme', next);
    if (next === 'auto') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', next);
    }
  });

  // Mobile nav toggle
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  navList?.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement) {
      navToggle?.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    }
  });

  // Smooth scroll behavior (native CSS can handle, but ensure old browsers)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null, '', `#${id}`);
      }
    })
  });

  // Project filter
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const cards = Array.from(document.querySelectorAll('.project-card'));
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const isAll = !filter || filter === 'all';
      cards.forEach(card => {
        const tags = (card.getAttribute('data-tags') || '').split(/\s+/);
        const show = isAll || tags.includes(filter);
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // Reveal on scroll
  const revealElements = Array.from(document.querySelectorAll('.section, .project-card'));
  revealElements.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.06});
  revealElements.forEach(el => io.observe(el));

  // Current year
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Copy email
  copyEmailBtn?.addEventListener('click', async () => {
    const email = emailLink?.getAttribute('href')?.replace('mailto:', '') || '';
    try{
      await navigator.clipboard.writeText(email);
      copyEmailBtn.textContent = 'Copied!';
      setTimeout(() => copyEmailBtn.textContent = 'Copy', 1500);
    }catch(err){
      alert('Copy failed, please copy manually.');
    }
  });
})();