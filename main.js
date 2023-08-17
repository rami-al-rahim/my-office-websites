GamesSection = document.getElementById("Games")
AppsSection = document.getElementById("apps")
WebsitesSection = document.getElementById("Websites")

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        for (var project in data.games) {
            var element = document.createElement('div');
            element.className = 'project';
            element.style.marginBottom = '20px';
            element.innerHTML =
                `<img src="${data.games[project].icon_url}" alt="${project}">
        <h2>${project}</h2>
        <p>${data.games[project].short_description}</p>
        <div class="project-buttons">
            <a href="${data.games[project].Google_play}" target="_blank">Get on Google Play</a>
            <a href="${data.games[project].about_page}" target="_blank">About</a>
        </div>`;
            GamesSection.appendChild(element);
        }
        for (var project in data.apps) {
            var element = document.createElement('div');
            element.className = 'project';
            element.style.marginBottom = '20px';
            element.innerHTML =
                `<img src="${data.apps[project].icon_url}" alt="${project}">
        <h2>${project}</h2>
        <p>${data.apps[project].short_description}</p>
        <div class="project-buttons">
            <a href="${data.apps[project].Google_play}" target="_blank">Get on Google Play</a>
            <a href="/Pages/ViewProject/view.html?project=${project}" target="_blank">About</a>
        </div>`;
            AppsSection.appendChild(element);
        }
        for (var project in data.websites) {
            var element = document.createElement('div');
            if (hasArabicText(project)) element.dir = "rtl"
            element.className = 'project';
            element.style.marginBottom = '20px';
            element.innerHTML =
                `<img src="${data.websites[project].icon_url}" alt="${project}">
        <h2>${project}</h2>
        <p>${data.websites[project].short_description}</p>
        <div class="project-buttons" dir="ltr">
            <a href="${data.websites[project].url}" target="_blank">Open website</a>
        </div>`;
            WebsitesSection.appendChild(element);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

function hasArabicText(text) {
    var arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text);
}
//Card template
/*
<div class="project" style="margin-bottom: 20px;">
            <img src="" alt="">
            <h2></h2>
            <p></p>
            <div class="project-buttons">
                <a href="" target="_blank">Get on
                    Google Play</a>
                <a href="" target="_blank">Open website</a>
            </div>
        </div>





            --fa-style-family-brands: "Font Awesome 6 Brands";
    --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
    --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
    --fa-style-family-classic: "Font Awesome 6 Free";
    --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
    font-family: 'Changa', sans-serif;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 1.1em;
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    background-color: #4CAF50;
    color: white;
*/
