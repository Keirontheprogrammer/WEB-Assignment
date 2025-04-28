document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    let position = 0;
  
    function animateBackground() {
      position += 0.1; // speed of movement (you can adjust this)
      hero.style.backgroundPosition = `${position}px center`;;
      requestAnimationFrame(animateBackground); // keeps it moving
    }
  
    animateBackground();
  });
