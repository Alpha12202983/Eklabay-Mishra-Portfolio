/* ==========================================================================
   ANIMATIONS & REVEAL EFFECTS - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Subtitle Typewriter Rotater
  const typewriterText = document.getElementById('typewriter-text');
  if (typewriterText) {
    const phrases = [
      "Full-Stack Developer",
      "Machine Learning Enthusiast",
      "RESTful API Architect",
      "Database Optimization Expert"
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

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }
    type();
  }

  // 2. Intersection Observer Scroll Reveal Animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
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

  revealElements.forEach((el) => revealObserver.observe(el));

  // 3. Magnetic Hover Buttons Effect
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

  // 4. Counter Animation for Stats
  const statNumbers = document.querySelectorAll('.stat-number');
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-count'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let current = 0;
        const step = targetVal / 50;

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
});
