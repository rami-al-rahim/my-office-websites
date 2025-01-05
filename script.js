
document.getElementById('sub').addEventListener('click', fetchData)
async function fetchData() {
  const url = 'https://api.rami-dev.com/email/'+ document.getElementById('subInput').value; // The URL to fetch data from

  // Show the loading spinner
  alert('loading... please wait')
  try {
    const response = await fetch(url, {method: "POST"});

    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Assuming JSON response
    console.log(JSON.stringify(data, null, 2));

  } catch (error) {
    alert(`Error: ${error.message}`)
    console.log(`Error: ${error.message}`);

  } finally {
    alert('thinks for subscribing for newsletter')
    // Hide the loading spinner
    spinner.style.display = 'none';
  }
}
