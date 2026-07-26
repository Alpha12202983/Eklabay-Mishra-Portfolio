/* ==========================================================================
   LIGHTWEIGHT NATIVE SCROLL & MOTION ENGINE - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Native Scroll Behavior (No Lenis Virtual Lag - 100% Native Browser Response)
  document.documentElement.style.scrollBehavior = 'smooth';

  // 2. High-Performance 60 FPS Native Scroll & Parallax Loop
  let lastScrollY = window.scrollY;
  let ticking = false;

  const header = document.getElementById('header');
  let progressBar = document.getElementById('scroll-progress-bar');
  
  if (!progressBar && header) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'scroll-progress-bar';
    header.appendChild(progressBar);
  }

  const aurora1 = document.querySelector('.aurora-1');
  const aurora2 = document.querySelector('.aurora-2');
  const aurora3 = document.querySelector('.aurora-3');
  const heroContent = document.querySelector('.hero-content');

  let lastScrollTop = 0;

  function onNativeScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    // Update Header Progress Bar
    if (progressBar) {
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }

    // Auto-Hide Header on Scroll Down / Reveal on Scroll Up
    if (header) {
      if (scrollY > 100) {
        header.classList.add('scrolled');
        if (scrollY > lastScrollTop && scrollY > 200) {
          header.style.transform = 'translate3d(0, -100%, 0)';
        } else {
          header.style.transform = 'translate3d(0, 0, 0)';
        }
      } else {
        header.classList.remove('scrolled');
        header.style.transform = 'translate3d(0, 0, 0)';
      }
    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;

    // Parallax background blobs & hero elements (Native 60 FPS)
    if (!prefersReducedMotion) {
      if (aurora1) aurora1.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
      if (aurora2) aurora2.style.transform = `translate3d(0, ${scrollY * -0.08}px, 0)`;
      if (aurora3) aurora3.style.transform = `translate3d(0, ${scrollY * 0.06}px, 0)`;

      if (heroContent && scrollY < window.innerHeight) {
        heroContent.style.opacity = `${1 - (scrollY / (window.innerHeight * 0.85))}`;
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(onNativeScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial update
  onNativeScroll();

  // 3. Typewriter Effect for Hero Subtitle
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

  // 4. Instant Intersection Observer Scroll Reveal Trigger
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
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
          }, 150);
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // 5. 3D Card Tilt & Mouse Spotlight (Disabled on reduced motion)
  if (!prefersReducedMotion) {
    const tiltCards = document.querySelectorAll('.project-card, .service-card, .glass-card, .skill-card, .cert-card');

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

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
      btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });

  // 7. Stat Number Counter Observer
  const statNumbers = document.querySelectorAll('.stat-number');
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-count'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let current = 0;
        const step = targetVal / 40;

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

  // 8. Active Navigation Section Observer
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
