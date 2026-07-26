/* ==========================================================================
   PRELOADER SCRIPT - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderCounter = document.getElementById('loader-counter');

  if (!preloader || !loaderBar || !loaderCounter) return;

  let count = 0;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 15) + 5;
    if (count > 100) count = 100;

    loaderBar.style.width = `${count}%`;
    loaderCounter.textContent = `${count}%`;

    if (count === 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = 'auto';
      }, 400);
    }
  }, 40);
});
