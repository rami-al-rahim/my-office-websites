function hasArabicText(e){return/[\u0600-\u06FF]/.test(e)}GamesSection=document.getElementById("Games"),AppsSection=document.getElementById("apps"),WebsitesSection=document.getElementById("Websites"),fetch("data.json").then((e=>e.json())).then((e=>{for(var t in e.games){(n=document.createElement("div")).className="project",n.style.marginBottom="20px",n.innerHTML=`<img src="${e.games[t].icon_url}" alt="${t}">\n        <h2>${t}</h2>\n        <p>${e.games[t].short_description}</p>\n        <div class="project-buttons">\n            <a href="${e.games[t].Google_play}" target="_blank">Get on Google Play</a>\n            <a href="${e.games[t].about_page}" target="_blank">About</a>\n        </div>`,GamesSection.appendChild(n)}for(var t in e.apps){(n=document.createElement("div")).className="project",n.style.marginBottom="20px",n.innerHTML=`<img src="${e.apps[t].icon_url}" alt="${t}">\n        <h2>${t}</h2>\n        <p>${e.apps[t].short_description}</p>\n        <div class="project-buttons">\n            <a href="${e.apps[t].Google_play}" target="_blank">Get on Google Play</a>\n            <a href="/Pages/ViewProject/view.html?project=${t}" target="_blank">About</a>\n        </div>`,AppsSection.appendChild(n)}for(var t in e.websites){var n=document.createElement("div");hasArabicText(t)&&(n.dir="rtl"),n.className="project",n.style.marginBottom="20px",n.innerHTML=`<img src="${e.websites[t].icon_url}" alt="${t}">\n        <h2>${t}</h2>\n        <p>${e.websites[t].short_description}</p>\n        <div class="project-buttons" dir="ltr">\n            <a href="${e.websites[t].url}" target="_blank">Open website</a>\n        </div>`,WebsitesSection.appendChild(n)}})).catch((e=>{console.error("Error:",e)}));
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
