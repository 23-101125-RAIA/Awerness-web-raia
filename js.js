function initPreloader() {
    setTimeout(function () {
        let preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("hidden");
        }
    }, 4000);
}

let navItems = [
    { textEN: "Home", textAR: "الرئيسية", link: "index.html" },
    { textEN: "Gallery", textAR: "المعرض", link: "gallery.html" },
    { textEN: "Center", textAR: "المركز", link: "center.html" },
    { textEN: "Contact", textAR: "انضم إلينا", link: "contact.html" }
];

function showNav() {
    let container = document.getElementById("headerNavLinks");
    if (!container) return;

    let html = "";
    for (let i = 0; i < navItems.length; i++) {
        let text = currentLanguage === "en" ? navItems[i].textEN : navItems[i].textAR;
        html += `<li><a href="${navItems[i].link}" class="text-font">${text}</a></li>`;
    }
    container.innerHTML = html;
}

function toggleLanguage() {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }
    updateAllText();
}

function initLanguageToggle() {
    let langToggle = document.getElementById("langToggle");
    if (langToggle) {
        langToggle.onclick = function () {
            toggleLanguage();
        };
    }
}

function initThemeToggle() {
    let themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.onclick = function () {
            document.body.classList.toggle("dark-mode");

            let iconImg = themeToggle.querySelector("img");
            if (iconImg) {
                if (document.body.classList.contains("dark-mode")) {
                    iconImg.src = "img/brightness.png";
                } else {
                    iconImg.src = "img/moon.png";
                }
            }
        };
    }
}