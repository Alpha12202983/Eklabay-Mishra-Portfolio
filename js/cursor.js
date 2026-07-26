/* ==========================================================================
   CUSTOM DUAL-LAYER CURSOR - Eklabay Mishra Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const dot = document.getElementById('cursor-dot');
  const outline = document.getElementById('cursor-outline');

  if (!dot || !outline) return;

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  // Hover triggers for interactive elements
  const interactiveEls = document.querySelectorAll('a, button, input, textarea, .glass-card, .filter-btn, .project-card, .skill-card');

  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
});
