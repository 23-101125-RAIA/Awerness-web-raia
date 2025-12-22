
let currentLanguage = "en";

let englishText = {
    headerLogo: "Skillio.",
    langToggle: "EN",
    loginbtn: " Login",
    heroTitle: "Growing Your Skills, Protecting Your Mind",
    heroDescription: "Building practical and emotional skills in adolescence is linked to lower stress, better mood, and higher chances of education and employment success. Learn how daily growth habits support your mental health.",
    heroButton: "Explore Growth Paths",
    testimonialsTitle: "Real Youth Stories: Skills & Wellbeing",
    sliderSectionTitle: "Explore Skill Paths",
    sliderSectionSubtitle: "See real moments where young people explored different skills, built confidence, and supported their mental health.",
    footerCopyright: "© 2024 Skillio. All rights reserved. | This site is educational and not a replacement for professional mental health care.",
    principlesTitle: "Core Principles",
    principlesSubtitle: "Our mission is built on three fundamental principles that guide youth skill development and empowerment.",
    cardsSliderTitle: "Why Prioritize Skill Development?",
    cardsSliderSubtitle: "Discover how building diverse skills empowers youth to create opportunities, express creativity, and contribute meaningfully to their communities and the global economy."
};

let arabicText = {
    headerLogo: "Skillio.",
    langToggle: "AR",
    loginbtn: "تسجيل الدخول",
    heroTitle: "نمو مهاراتك يحمي صحتك النفسية",
    heroDescription: "بناء المهارات العملية والعاطفية في مرحلة المراهقة يرتبط بانخفاض التوتر، وتحسن المزاج، وزيادة فرص التعليم والعمل. تعلّم كيف تدعم عادات النمو اليومية صحتك النفسية.",
    heroButton: "استكشف مسارات النمو",
    testimonialsTitle: "قصص حقيقية عن المهارات والرفاه النفسي",
    sliderSectionTitle: "استكشف مسارات المهارات",
    sliderSectionSubtitle: "شاهد لحظات حقيقية استكشف فيها الشباب مهارات مختلفة، وبنوا الثقة، ودعموا صحتهم النفسية.",
    footerCopyright: "© 2024 سكيلو. جميع الحقوق محفوظة. | سياسة الخصوصية | شروط الخدمة",
    principlesTitle: "المبادئ الأساسية",
    principlesSubtitle: "مهمتنا مبنية على ثلاثة مبادئ أساسية توجه تطوير مهارات الشباب وتمكينهم.",
    cardsSliderTitle: "لماذا نولي الأولوية لتطوير المهارات؟",
    cardsSliderSubtitle: "اكتشف كيف يُمكّن بناء المهارات المتنوعة الشباب من خلق الفرص والتعبير عن الإبداع والمساهمة بشكل هادف في مجتمعاتهم والاقتصاد العالمي."
};

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