/* ==========================================================================
   PRELOADER SCRIPT - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderCounter = document.getElementById('loader-counter');

  // Ensure scroll is enabled by default
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowY = 'auto';

  if (!preloader || !loaderBar || !loaderCounter) return;

  let count = 0;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 20) + 10;
    if (count > 100) count = 100;

    loaderBar.style.width = `${count}%`;
    loaderCounter.textContent = `${count}%`;

    if (count === 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
        
        // Remove preloader from DOM after transition so it never blocks clicks/scroll
        setTimeout(() => {
          if (preloader.parentNode) {
            preloader.style.display = 'none';
          }
        }, 600);
      }, 300);
    }
  }, 30);
});
