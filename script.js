
window.addEventListener('resize', initListPage);
initListPage()


function initListPage() {
    var target = document.querySelector('.my-projects');
    if (document.querySelector('body').offsetWidth < 768) {
        target.style.marginLeft = '0px';
        return;
    }
    // Get the reference element
    var reference = document.querySelector('.sidebar');

    // Calculate the total offset: width + padding-left
    var referenceWidth = reference.offsetWidth; // Includes width + padding
    var referencePadding = parseInt(getComputedStyle(reference).paddingLeft);

    // Set the margin-left of the target element
    target.style.marginLeft = `${referenceWidth + referencePadding}px`;
}
document.querySelector('button').addEventListener('click', fetchData)
async function fetchData() {
    const url = 'https://my-q9szbvoef-rami-s-projects.vercel.app'; // The URL to fetch data from
    const spinner = document.getElementById('loading-spinner');
  
    // Show the loading spinner
    spinner.style.display = 'block';
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Assuming JSON response
      console.log(JSON.stringify(data, null, 2));
      
    } catch (error) {
      console.log(`Error: ${error.message}`);
      
    } finally {
      // Hide the loading spinner
      spinner.style.display = 'none';
    }
  }
  
  // Trigger the function on page load or via a button click
  fetchData();
  