queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
var type = urlParams.get('project');
document.title = type;
var content = document.getElementById('content')
fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        content.innerHTML +=
            `
    <img src="${data.apps[type].icon_url}"
            alt="app icon" style="width: 200px;">
        <h1 style="display:inline-flex; margin: auto 5px; padding: auto;">${[type]}</h1>
        <div><a style="color: #fff;" class="GooglePlay" href="${data.apps[type].Google_play}" target="_blank">Get on
                Google Play</a></div>
        <h2>${data.apps[type].short_description}</h2>
        <div id="screenshot_list">

        </div>
`

        data.apps[type].screenshots_url.forEach(function (screenshot) { document.getElementById('screenshot_list').innerHTML += `<img src="${screenshot}" class="screenshot" alt="screenshot">` })
        content.innerHTML += `<p>${document.createElement('p').textContent = data.apps[type].Full_description}</p>`
        document.querySelector("link[rel*='icon']").href = data.apps[type].icon_url;
    })
    .catch(error => {
        console.error('Error:', error);
    });

document.getElementById().click()    
