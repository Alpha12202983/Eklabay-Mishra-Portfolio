/* ==========================================================================
   GSAP + SCROLLTRIGGER + LENIS ANIMATIONS ENGINE - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Initialize High-Speed Responsive Lenis Smooth Scroll Engine
  let lenis = null;
  if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    try {
      lenis = new Lenis({
        duration: 0.7, // Reduced from 1.2 for faster response
        lerp: 0.12, // Snappier interpolation
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.6, // Increased from 1.0 for quicker scroll distance
        touchMultiplier: 2.0, // Responsive trackpad/touch scrolling
        infinite: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (err) {
      console.warn("Lenis smooth scroll fallback to native scroll:", err);
    }
  }

  // 2. Initialize GSAP & ScrollTrigger Plugins
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }
  }

  // 3. Header Auto-Hide on Scroll Down & Reveal on Scroll Up
  const header = document.getElementById('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 100) {
      header.classList.add('scrolled');
      if (st > lastScrollTop && st > 220) {
        // Scroll Down -> Hide Header
        header.style.transform = 'translate3d(0, -100%, 0)';
      } else {
        // Scroll Up -> Reveal Header
        header.style.transform = 'translate3d(0, 0, 0)';
      }
    } else {
      header.classList.remove('scrolled');
      header.style.transform = 'translate3d(0, 0, 0)';
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, { passive: true });

  // 4. Scroll Progress Top Indicator
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar && header) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'scroll-progress-bar';
    header.appendChild(progressBar);
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }
  }, { passive: true });

  // 5. Typewriter Effect for Hero Subtitle
  const typewriterText = document.getElementById('typewriter-text');
  if (typewriterText) {
    const phrases = [
      "Data Analyst",
      "Machine Learning Engineer",
      "Python & SQL Specialist",
      "Full-Stack Web Developer"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 35 : 75;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }

      setTimeout(type, speed);
    }
    type();
  }

  // 6. Staggered Intersection Observer Scroll Reveal Trigger
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08
  };

  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Animate skill progress bars inside card if present
        const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
        progressBars.forEach((bar) => {
          const targetWidth = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 200);
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // 7. 3D Card Tilt & Mouse-Following Spotlight Glow
  if (!prefersReducedMotion) {
    const tiltCards = document.querySelectorAll('.project-card, .service-card, .glass-card, .skill-card, .cert-card');

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -4px, 0)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
      });
    });
  }

  // 8. Magnetic Button Physics
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });

  // 9. Number Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-count'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let current = 0;
        const step = targetVal / 45;

        const updateCount = () => {
          current += step;
          if (current >= targetVal) {
            target.textContent = `${prefix}${targetVal}${suffix}`;
          } else {
            target.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            requestAnimationFrame(updateCount);
          }
        };
        updateCount();
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach((stat) => countObserver.observe(stat));

  // 10. Active Navigation Section Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((section) => navObserver.observe(section));
});
