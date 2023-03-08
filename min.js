// Get the button and column elements
  const button = document.querySelector('.toggle-column');
  const column = document.querySelector('.column');

  // Add a click event listener to the button
  button.addEventListener('click', function() {
    // Toggle the 'show' class on the column
    column.classList.toggle('show');
  });