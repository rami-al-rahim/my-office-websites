queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
type = urlParams.get('type');
tabs = {
    'Home': {
        'Page_url': "/"
    },
    'Games': {
        'Page_url': "/Pages/projects/projects.html?type=Games"
    },
    "Apps": {
        'Page_url': "/Pages/projects/projects.html?type=Apps"
    },
    'Websites': {
        'Page_url': "/Pages/projects/projects.html?type=Websites"
    },
    'About us': {
        'Page_url': "/Pages/about.html"
    }
}

console.log(tabs);
if (type == "Games") {
    document.title = "Games";
    tabs = {
        'Home': {
            'Page_url': "/"
        },
        "Apps": {
            'Page_url': "/Pages/projects/projects.html?type=Apps"
        },
        'Websites': {
            'Page_url': "/Pages/projects/projects.html?type=Websites"
        },
        'About us': {
            'Page_url': "/Pages/about.html"
        }
    }
}
else if (type == "Apps") {
    document.title = "Apps";
    tabs = {
        'Home': {
            'Page_url': "/"
        },
        'Games': {
            'Page_url': "/Pages/projects/projects.html?type=Games"
        },
        'Websites': {
            'Page_url': "/Pages/projects/projects.html?type=Websites"
        },
        'About us': {
            'Page_url': "/Pages/about.html"
        }
    }
}
else if (type == "Websites") {
    document.title = "Websites";
    tabs = {
        'Home': {
            'Page_url': "/"
        },
        'Games': {
            'Page_url': "/Pages/projects/projects.html?type=Games"
        },
        "Apps": {
            'Page_url': "/Pages/projects/projects.html?type=Apps"
        },
        'About us': {
            'Page_url': "/Pages/about.html"
        }
    }
}
console.log(tabs)
for (var a in tabs) {
    var element = document.createElement('a');
    element.textContent = a
    element.style.marginBottom = '20px';
    element.href = tabs[a].Page_url
    document.getElementById("nav-list").appendChild(element);
}

fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (type == "Games") {
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
                document.getElementById("main").appendChild(element);
            }
        }
        else if (type == "Apps") {
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
                document.getElementById("main").appendChild(element);
            }
        }
        else if (type == "Websites") {
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
            <a href="${data.websites[project].Google_play}" target="_blank">Get on Google Play</a>
            <a href="${data.websites[project].about_page}" target="_blank">About</a>
        </div>`;
                document.getElementById("main").appendChild(element);
            }
        }
        else {
            urlParams.delete('type');
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

                document.getElementById("main").appendChild(element);
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
                document.getElementById("main").appendChild(element);
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
                    <a href="${data.websites[project].url}" target="_blank">open</a>
                    </div>`;
                document.getElementById("main").appendChild(element);
            }
        }

    }
    ).catch(error => {
        console.error('Error:', error);
    });

function hasArabicText(text) {
    var arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text);
}
