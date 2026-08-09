/* ============================================================
   GRANTH SENJALIYA — PORTFOLIO PREMIUM JAVASCRIPT
   Refined: spring easing, 3.5° tilt, photo parallax,
   staggered scroll reveal, page load orchestration.
   NO custom cursor — uses normal system cursor.
   ============================================================ */

(function () {
  'use strict';

  /* ── Detect reduced motion preference ──────────────────── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Loader with progress counter ──────────────────────── */
  const loader     = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderPct  = document.getElementById('loaderPct');
  let progress = 0;

  const loadInterval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) { progress = 100; clearInterval(loadInterval); }
    if (loaderFill) loaderFill.style.width = progress + '%';
    if (loaderPct)  loaderPct.textContent  = Math.floor(progress) + '%';
  }, 80);

  window.addEventListener('load', () => {
    clearInterval(loadInterval);
    if (loaderFill) loaderFill.style.width = '100%';
    if (loaderPct)  loaderPct.textContent  = '100%';
    setTimeout(() => {
      loader?.classList.add('hidden');
    }, prefersReducedMotion ? 100 : 500);
  });

  /* ── Scroll progress bar ────────────────────────────────── */
  const progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    if (!progressBar) return;
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0) {
      progressBar.style.width = Math.min(100, (scrolled / total) * 100) + '%';
    }
  }

  /* ── Navbar scroll state ────────────────────────────────── */
  const navHeader = document.getElementById('navHeader');
  const backToTop = document.getElementById('backToTop');

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      navHeader?.classList.toggle('scrolled', y > 40);
      backToTop?.classList.toggle('visible', y > 500);
      updateProgress();
      updateActiveNav();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Mobile hamburger ───────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (navLinks?.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburger?.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ── Smooth scroll anchors ──────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Active nav tracking ────────────────────────────────── */
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');
    const pos = window.scrollY + 120;
    sections.forEach(s => {
      if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
        links.forEach(l => {
          l.classList.toggle('active', l.dataset.section === s.id);
        });
      }
    });
  }

  /* ── Scroll reveal (staggered, with spring easing) ──────── */
  if (!prefersReducedMotion) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Math.min(Number(entry.target.dataset.revealDelay || 0), 300);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
      const parent = el.parentElement;
      const siblings = parent ? Array.from(parent.querySelectorAll(':scope > .reveal')) : [];
      const idx = siblings.indexOf(el);
      el.dataset.revealDelay = Math.min(idx * 100, 300);
      revealObs.observe(el);
    });
  } else {
    // If reduced motion, make everything visible immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
  }

  /* ── Particle canvas ────────────────────────────────────── */
  const canvas = document.getElementById('particlesCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let pts = [], raf;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', () => { resize(); init(); }, { passive: true });

    function init() {
      // Reduced particle density for better performance
      const n = Math.floor((canvas.width * canvas.height) / 22000);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.1 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        o: Math.random() * 0.35 + 0.06,
      }));
    }
    init();

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.o})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      // Connect nearby particles (reduced connection distance)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.05 * (1 - d / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    // Pause when tab is hidden for performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf); else draw();
    });
  }

  /* ── 3D Tilt on cards — max 3.5°, spring physics ────────── */
  if (!prefersReducedMotion && window.innerWidth >= 768) {
    const TILT_MAX = 3.5;
    const TILT_LIFT = 'translateY(-4px)';
    const EASE_IN  = 'transform 120ms cubic-bezier(0.16,1,0.3,1)';
    const EASE_OUT = 'transform 480ms cubic-bezier(0.16,1,0.3,1)';

    function addTilt(el) {
      el.addEventListener('mouseenter', () => {
        el.style.transition = EASE_IN;
      });
      el.addEventListener('mousemove', e => {
        const r  = el.getBoundingClientRect();
        const x  = e.clientX - r.left;
        const y  = e.clientY - r.top;
        const cx = r.width  / 2;
        const cy = r.height / 2;
        const rx = ((y - cy) / cy) * -TILT_MAX;
        const ry = ((x - cx) / cx) *  TILT_MAX;
        el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) ${TILT_LIFT}`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transition = EASE_OUT;
        el.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    }

    document.querySelectorAll('.tilt-card').forEach(addTilt);
  }

  /* ── Photo parallax — max 5°, smooth spring ─────────────── */
  if (!prefersReducedMotion) {
    const photoFrame = document.getElementById('photoFrame');
    const photoWrap  = document.getElementById('heroPhotoWrap');
    const PARA_MAX       = 5;
    const PARA_EASE_IN   = 'transform 120ms cubic-bezier(0.16,1,0.3,1)';
    const PARA_EASE_OUT  = 'transform 600ms cubic-bezier(0.16,1,0.3,1)';

    if (photoWrap && photoFrame) {
      document.addEventListener('mousemove', e => {
        if (window.innerWidth < 1024) return;
        const rect = photoWrap.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth  / 2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
        const rx = (dy * -PARA_MAX).toFixed(2);
        const ry = (dx *  PARA_MAX).toFixed(2);
        photoFrame.style.transition = PARA_EASE_IN;
        photoFrame.style.transform  = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      photoWrap.addEventListener('mouseleave', () => {
        photoFrame.style.transition = PARA_EASE_OUT;
        photoFrame.style.transform  = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    }
  }

  /* ── Contact form validation ────────────────────────────── */
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (form) {
    const F = {
      name:    { el: document.getElementById('contactName'),    err: document.getElementById('nameError'),    label: 'Name' },
      email:   { el: document.getElementById('contactEmail'),   err: document.getElementById('emailError'),   label: 'Email' },
      subject: { el: document.getElementById('contactSubject'), err: document.getElementById('subjectError'), label: 'Subject' },
      message: { el: document.getElementById('contactMessage'), err: document.getElementById('messageError'), label: 'Message' },
    };

    const setErr   = (f, m) => { f.el?.classList.add('error'); if (f.err) f.err.textContent = m; };
    const clrErr   = (f)    => { f.el?.classList.remove('error'); if (f.err) f.err.textContent = ''; };
    const isEmail  = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    function validate(f) {
      const v = f.el?.value.trim() || '';
      if (!v) { setErr(f, `${f.label} is required.`); return false; }
      if (f === F.email && !isEmail(v)) { setErr(f, 'Enter a valid email.'); return false; }
      if (f === F.message && v.length < 10) { setErr(f, 'At least 10 characters.'); return false; }
      clrErr(f); return true;
    }

    Object.values(F).forEach(f => {
      f.el?.addEventListener('blur', () => validate(f));
      f.el?.addEventListener('input', () => { if (f.el.classList.contains('error')) validate(f); });
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      let ok = true;
      Object.values(F).forEach(f => { if (!validate(f)) ok = false; });
      if (!ok) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin .9s linear infinite">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg> Sending…`;
      }

      /*
        BACKEND INTEGRATION POINT:
        Replace the simulated delay below with one of:

        Option A — Formspree:
          const res = await fetch('https://formspree.io/f/YOUR_ID', {
            method:'POST', headers:{'Accept':'application/json'}, body:new FormData(form)
          });

        Option B — EmailJS:
          await emailjs.sendForm('SVC_ID','TMPL_ID',form,'PUB_KEY');

        Option C — Custom backend:
          await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,subject,message})});
      */
      await new Promise(r => setTimeout(r, 1400));

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Send Message`;
      }
      form.reset();
      Object.values(F).forEach(f => clrErr(f));
      successMsg?.classList.add('show');
      setTimeout(() => successMsg?.classList.remove('show'), 5000);
    });
  }

  /* ── Resume Modal (with accessibility focus trap) ────────── */
  const resumeModal      = document.getElementById('resumeModal');
  const modalBackdrop    = document.getElementById('modalBackdrop');
  const closeModalBtn    = document.getElementById('closeModalBtn');
  const openResumeBtn    = document.getElementById('openResumeBtn');
  const heroResumeBtn    = document.getElementById('heroResumeBtn');
  const secViewResumeBtn = document.getElementById('secViewResumeBtn');
  let previousFocusedElement = null;

  function openModal() {
    if (!resumeModal) return;
    previousFocusedElement = document.activeElement;
    resumeModal.removeAttribute('hidden');
    void resumeModal.offsetWidth; // Force reflow
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const focusables = resumeModal.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])');
      if (focusables.length > 0) focusables[0].focus();
    }, 50);
  }

  function closeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
    if (previousFocusedElement) previousFocusedElement.focus();
    setTimeout(() => {
      if (!resumeModal.classList.contains('active')) {
        resumeModal.setAttribute('hidden', '');
      }
    }, 350);
  }

  [openResumeBtn, heroResumeBtn, secViewResumeBtn].forEach(btn => {
    btn?.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  closeModalBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (!resumeModal?.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    // Focus trap for Tab navigation
    if (e.key === 'Tab') {
      const focusables = Array.from(
        resumeModal.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])')
      ).filter(el => !el.disabled);
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl  = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  });

  /* ── Inject utility keyframes ───────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`;
  document.head.appendChild(style);

  /* ── Init ───────────────────────────────────────────────── */
  updateActiveNav();

})();
