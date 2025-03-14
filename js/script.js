document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    setTimeout(() => {
      container.classList.add('active');
    }, 200); // Delay the animation slightly for effect
  });