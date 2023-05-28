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
            <a href="${data.apps[project].about_page}" target="_blank">About</a>
        </div>`;
            AppsSection.appendChild(element);
        }
        for (var project in data.websites) {
            var element = document.createElement('div');
            element.className = 'project';
            element.style.marginBottom = '20px';
            element.innerHTML =
                `<img src="${data.websites[project].icon_url}" alt="${project}">
        <h2>${project}</h2>
        <p>${data.websites[project].short_description}</p>
        <div class="project-buttons">
            <a href="${data.websites[project].Google_play}" target="_blank">Get on Google Play</a>
            <a href="${data.websites[project].about_page}" target="_blank">About</a>
        </div>`;
            WebsitesSection.appendChild(element);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


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
*/
