const iconContainers = document.querySelectorAll('.icon-container');

iconContainers.forEach((container) => {
  container.addEventListener('mouseenter', () => {
    container.querySelector('i').classList.add('hover');
  });
  
  container.addEventListener('mouseleave', () => {
    container.querySelector('i').classList.remove('hover');
  });
});
