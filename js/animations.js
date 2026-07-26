/* ==========================================================================
   AWWWARDS-GRADE MOTION ENGINE & PARALLAX SCROLL - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll Progress Bar Top Indicator
  const header = document.getElementById('header');
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar && header) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'scroll-progress-bar';
    header.appendChild(progressBar);
  }

  // 2. High-Performance 60 FPS Parallax & Scroll Engine
  let lastScrollY = window.scrollY;
  let ticking = false;

  const aurora1 = document.querySelector('.aurora-1');
  const aurora2 = document.querySelector('.aurora-2');
  const aurora3 = document.querySelector('.aurora-3');
  const heroContent = document.querySelector('.hero-content');
  const heroImageWrapper = document.querySelector('.hero-image-wrapper');

  function updateParallax() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    // Update progress bar width
    if (progressBar) {
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }

    // Header glass shrink on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Parallax background blobs & hero elements (disabled if prefersReducedMotion)
    if (!prefersReducedMotion) {
      if (aurora1) aurora1.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
      if (aurora2) aurora2.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
      if (aurora3) aurora3.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;

      if (heroContent && scrollY < window.innerHeight) {
        heroContent.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
        heroContent.style.opacity = `${1 - (scrollY / (window.innerHeight * 0.85))}`;
      }

      if (heroImageWrapper && scrollY < window.innerHeight) {
        heroImageWrapper.style.transform = `translate3d(0, ${scrollY * 0.06}px, 0)`;
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateParallax();

  // 3. Subtitle Typewriter Rotator
  const typewriterText = document.getElementById('typewriter-text');
  if (typewriterText) {
    const phrases = [
      "Full-Stack Engineer",
      "Data Analytics Specialist",
      "Machine Learning Developer",
      "MySQL Optimization Expert"
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
        speed = 2200; // Pause at end of phrase
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

  // 4. Staggered Intersection Observer Scroll Reveal
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, index) => {
    // Add subtle stagger delay if element has siblings in a grid
    if (el.parentElement && el.parentElement.classList.contains('projects-grid') || 
        el.parentElement && el.parentElement.classList.contains('skills-grid') ||
        el.parentElement && el.parentElement.classList.contains('services-grid')) {
      const childIndex = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${(childIndex % 4) * 0.1}s`;
    }
    revealObserver.observe(el);
  });

  // 5. 3D Card Physics & Cursor Spotlight
  if (!prefersReducedMotion) {
    const tiltCards = document.querySelectorAll('.project-card, .service-card, .glass-card, .skill-card');

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
        const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -4px, 0)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
      });
    });
  }

  // 6. Magnetic Button Physics
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

  // 7. Animated Counter Observer
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

  // 8. Active Section Navigation Observer
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
  }, { threshold: 0.3 });

  sections.forEach((section) => navObserver.observe(section));
});
