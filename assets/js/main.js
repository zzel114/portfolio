/* ============================================================
   PORTFOLIO — main.js
   All interactive behaviour. Reads from window.PROJECTS and
   window.PROFILE (defined in /data/projects.js).
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Helpers ────────────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ── Theme ──────────────────────────────────────────────────
  const THEME_KEY = 'porto-theme';
  const themeToggle = $('#theme-toggle');

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem(THEME_KEY, theme);
  }

  const savedTheme = localStorage.getItem(THEME_KEY) ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
  });

  // ── Nav scroll state ───────────────────────────────────────
  const nav = $('.nav');
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Active nav link ────────────────────────────────────────
  const sections = $$('section[id]');
  const navLinks = $$('.nav__links a, .nav__drawer a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim()} 0px -50% 0px` });
  sections.forEach(s => observer.observe(s));

  // ── Hamburger / mobile drawer ──────────────────────────────
  const hamburger = $('.nav__hamburger');
  const drawer    = $('.nav__drawer');

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('.nav__drawer a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // ── Populate PROFILE data ──────────────────────────────────
  const P = window.PROFILE || {};

  // Name / title / tagline / desc
  if (P.name)    { $$('.js-name').forEach(el => el.textContent = P.name); }
  if (P.title)   { $$('.js-title').forEach(el => el.textContent = P.title); }
  if (P.tagline) { $$('.js-tagline').forEach(el => el.textContent = P.tagline); }
  if (P.about)   { $$('.js-about').forEach(el => el.textContent = P.about); }

  // Nav logo initials
  // const logo = $('.nav__logo');
  // if (logo && P.name) {
  //   const parts = P.name.trim().split(' ');
  //   const initials = parts.length >= 2
  //     ? parts[0][0] + parts[parts.length - 1][0]
  //     : parts[0].slice(0, 2);
  //   logo.innerHTML = `${P.name.split(' ')[0]}<span>${initials.toUpperCase()}</span>`;
  // }

  // Avatar
  const avatarWrap = $('.hero__avatar-wrap');
  if (avatarWrap) {
    if (P.avatar) {
      avatarWrap.innerHTML = `<div class="hero__avatar-ring"></div>
        <img class="hero__avatar" src="${P.avatar}" alt="${P.name}" loading="lazy"
             onerror="this.outerHTML='<div class=&quot;hero__avatar-placeholder&quot;>👤</div>'">`;
    } else {
      avatarWrap.innerHTML = `<div class="hero__avatar-ring"></div>
        <div class="hero__avatar-placeholder">👤</div>`;
    }
  }

  // Footer name
  $$('.js-footer-name').forEach(el => el.textContent = P.name || 'Your Name');

  // Email
  $$('.js-email').forEach(el => {
    el.textContent = P.email || '';
    if (el.tagName === 'A') el.href = `mailto:${P.email}`;
  });

  // Social links — show / hide based on PROFILE
  function setSocial(selector, url) {
    $$(selector).forEach(el => {
      if (url) { el.href = url; el.closest('[data-social]')?.removeAttribute('hidden'); }
      else { el.closest('[data-social]')?.setAttribute('hidden', ''); }
    });
  }
  setSocial('.js-github',   P.github);
  setSocial('.js-linkedin', P.linkedin);
  setSocial('.js-twitter',  P.twitter);

  // ── Render projects ────────────────────────────────────────
  const grid       = $('.projects-grid');
  const filterBar  = $('.filter-tabs');
  const projects = window.PROJECTS || [];

  // Build unique category list, "All" first
  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  // Render filter tabs
  if (filterBar) {
    filterBar.innerHTML = categories.map((cat, i) => `
      <button class="filter-tab${i === 0 ? ' active' : ''}" data-filter="${cat}">
        ${cat}
      </button>`).join('');
  }

  // Render cards
  function renderCards(filter) {
    if (!grid) return;
    grid.innerHTML = projects.map((p, i) => {
      const hidden = filter !== 'All' && p.category !== filter;
      const liveBtn = p.link
        ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>Live
           </a>`
        : '';
      const repoBtn = p.repo
        ? `<a href="${p.repo}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>Code
           </a>`
        : '';

      return `
        <article class="project-card${hidden ? '" data-hidden="true"' : '"'} data-project-index="${i}">
          <div class="project-card__img">
            <img src="${p.image}" alt="${p.title}" loading="lazy"
                 onerror="this.src='assets/images/placeholder.svg'">
          </div>
          <div class="project-card__body">
            <span class="project-card__category">${p.category}</span>
            <h3 class="project-card__title">${p.title}</h3>
            <p class="project-card__desc">${p.description}</p>
            <div class="project-card__tags">
              ${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${liveBtn || repoBtn ? `<div class="project-card__links">${liveBtn}${repoBtn}</div>` : ''}
            <p class="project-card__hint">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              Click to expand
            </p>
          </div>
        </article>`;
    }).join('');

    // animate cards in with a small stagger instead of IntersectionObserver
    $$('.project-card', grid).forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity .4s ease, transform .4s ease';
      card.style.transitionDelay = `${i * 60}ms`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = '';
        card.style.transform = '';
      }));
    });
  }

  // ── Scroll reveal ──────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  renderCards('All');

  // observe static reveal elements (about, contact sections)
  $$('.reveal').forEach(el => revealObs.observe(el));

  // ── Filter click ───────────────────────────────────────────
  if (filterBar) {
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-tab');
      if (!btn) return;
      $$('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      $$('.project-card').forEach(card => {
        const match = filter === 'All' || card.querySelector('.project-card__category')?.textContent.trim() === filter;
        card.toggleAttribute('data-hidden', !match);
      });
    });
  }

  // ── Project modal ──────────────────────────────────────────
  const modal      = $('#project-modal');
  const modalClose = $('#modal-close');
  let currentImages = [];
  let currentIndex  = 0;

  function openModal(project) {
    currentImages = (project.images && project.images.length) ? project.images : [project.image];
    currentIndex  = 0;

    // Populate text
    $('#modal-category').textContent = project.category || '';
    $('#modal-title').textContent    = project.title    || '';

    // Details — split on \n to create paragraphs
    const detailEl = $('#modal-details');
    const text = project.details || project.description || '';
    detailEl.innerHTML = text.split('\n').filter(l => l.trim())
      .map(p => `<p>${p}</p>`).join('');

    // Tags
    $('#modal-tags').innerHTML = (project.tags || [])
      .map(t => `<span class="tag">${t}</span>`).join('');

    // Links
    const linksEl = $('#modal-links');
    linksEl.innerHTML = '';
    if (project.link) {
      linksEl.innerHTML += `<a href="${project.link}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:.85rem;padding:.55rem 1.2rem">
        Live Demo
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg></a>`;
    }
    if (project.repo) {
      linksEl.innerHTML += `<a href="${project.repo}" target="_blank" rel="noopener" class="btn btn-ghost" style="font-size:.85rem;padding:.55rem 1.2rem">
        View Code
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
        </svg></a>`;
    }

    // Gallery
    renderGallery();

    // Show
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.addEventListener('transitionend', () => {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }, { once: true });
  }

  function renderGallery() {
    const mainImg = $('#modal-img-main');
    const thumbs  = $('#gallery-thumbs');
    const prev    = $('#gallery-prev');
    const next    = $('#gallery-next');
    const single  = currentImages.length <= 1;

    // Main image with fade swap
    mainImg.classList.add('switching');
    setTimeout(() => {
      mainImg.src = currentImages[currentIndex];
      mainImg.alt = `Image ${currentIndex + 1}`;
      mainImg.classList.remove('switching');
    }, 150);

    // Arrows
    prev.toggleAttribute('hidden', single);
    next.toggleAttribute('hidden', single);

    // Thumbnails
    thumbs.innerHTML = single ? '' : currentImages.map((src, i) => `
      <div class="gallery-thumb${i === currentIndex ? ' active' : ''}" data-idx="${i}">
        <img src="${src}" alt="Thumbnail ${i + 1}" loading="lazy"
             onerror="this.src='assets/images/placeholder.svg'">
      </div>`).join('');
  }

  function goToImage(idx) {
    currentIndex = (idx + currentImages.length) % currentImages.length;
    renderGallery();
  }

  // Card click → open modal
  if (grid) {
    grid.addEventListener('click', e => {
      const card = e.target.closest('.project-card');
      if (!card) return;
      const idx = parseInt(card.dataset.projectIndex, 10);
      if (!isNaN(idx) && projects[idx]) openModal(projects[idx]);
    });
  }

  // Close: button, overlay click, Escape key
  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (!modal?.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  goToImage(currentIndex - 1);
    if (e.key === 'ArrowRight') goToImage(currentIndex + 1);
  });

  // Gallery arrow buttons
  $('#gallery-prev')?.addEventListener('click', () => goToImage(currentIndex - 1));
  $('#gallery-next')?.addEventListener('click', () => goToImage(currentIndex + 1));

  // Thumbnail clicks
  $('#gallery-thumbs')?.addEventListener('click', e => {
    const thumb = e.target.closest('.gallery-thumb');
    if (thumb) goToImage(parseInt(thumb.dataset.idx, 10));
  });

  // ── Back to top ────────────────────────────────────────────
  const btt = $('.back-to-top');
  window.addEventListener('scroll', () => {
    btt?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Contact form (mailto fallback) ─────────────────────────
  const form   = $('#contact-form');
  const status = $('#form-status');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      // Simple client-side fallback — replace with a backend / Formspree endpoint as needed
      const mailto = `mailto:${P.email || ''}?subject=${encodeURIComponent(`Portfolio contact from ${data.name}`)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
      window.location.href = mailto;
      if (status) {
        status.className = 'form-status success';
        status.textContent = 'Opening your email client…';
        setTimeout(() => { status.className = 'form-status'; }, 4000);
      }
    });
  }

});
