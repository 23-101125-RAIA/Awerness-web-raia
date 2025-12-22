
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


let principles = [
    {
        icon: "img/flower.png",
        titleEN: "Inclusive Learning",
        titleAR: "التعلم الشامل",
        textEN: "Equal access to quality skill development opportunities for all, regardless of background.",
        textAR: "وصول متساوٍ لفرص تطوير المهارات عالية الجودة لجميع الشباب، بغض النظر عن الخلفية."
    },
    {
        icon: "img/flower.png",
        titleEN: "Creative Exploration",
        titleAR: "الاستكشاف الإبداعي",
        textEN: "Encouraging artistic expression and innovation through diverse creative disciplines.",
        textAR: "تشجيع التعبير الفني والابتكار من خلال التخصصات الإبداعية المتنوعة."
    },
    {
        icon: "img/flower.png",
        titleEN: "Future Readiness",
        titleAR: "الاستعداد للمستقبل",
        textEN: "Preparing youth with relevant skills for evolving employment and entrepreneurship opportunities.",
        textAR: "إعداد الشباب بالمهارات ذات الصلة لفرص التوظيف وريادة الأعمال المتطورة."
    }
];

function showPrinciples() {
    let container = document.getElementById("principlesGrid");
    if (!container) return;

    let html = "";
    for (let i = 0; i < principles.length; i++) {
        let title = currentLanguage === "en" ? principles[i].titleEN : principles[i].titleAR;
        let text = currentLanguage === "en" ? principles[i].textEN : principles[i].textAR;

        html += `
            <div class="sec-principle-card">
                <div class="sec-principle-icon">
                    <img src="${principles[i].icon}" alt="Icon" class="sec-icon-img">
                </div>
                <h3 class="sec-principle-title">${title}</h3>
                <p class="sec-principle-text">${text}</p>
                <div class="sec-principle-arrow">↗</div>
            </div>
        `;
    }
    container.innerHTML = html;
}


let caseStudy = {
    badgeEN: "CASE STUDIES & EARLY SIGNS",
    badgeAR: "دراسات حالة ومؤشرات مبكرة",
    titleEN: "How Skill Growth Supports Youth Mental Health",
    titleAR: "كيف يدعم نمو المهارات الصحة النفسية للشباب",
    itemsEN: [
        "In school programs that combine life‑skills with emotional coping tools, students report fewer feelings of hopelessness and better class participation.",
        "WHO reviews show that teaching problem‑solving and communication skills in adolescence can reduce symptoms of anxiety and depression.",
        "Youth who join structured skill‑building clubs often describe stronger self‑esteem, more supportive friendships, and healthier ways to manage stress.",
        "Early practice of planning, time‑management, and goal‑setting is linked to better school completion and fewer risky behaviors later on."
    ],
    itemsAR: [
        "في البرامج المدرسية التي تجمع بين مهارات الحياة وأدوات التكيّف العاطفي، يبلّغ الطلاب عن شعور أقل باليأس ومشاركة أفضل في الصف.",
        "تشير مراجعات منظمة الصحة العالمية إلى أن تعليم مهارات حلّ المشكلات والتواصل في سن المراهقة يمكن أن يقلّل من أعراض القلق والاكتئاب.",
        "الشباب الذين ينضمون إلى أندية منظّمة لبناء المهارات يصفون غالبًا تقديرًا أعلى للذات، وصداقات أكثر دعمًا، وطرقًا أكثر صحّة للتعامل مع الضغط.",
        "يرتبط التدريب المبكر على التخطيط وإدارة الوقت وتحديد الأهداف بزيادة إكمال الدراسة وتقليل السلوكيات الخطرة لاحقًا."
    ]
};

let statistics = [
    { number: "20–30%", labelEN: "Lower depressive symptoms in life‑skills programs", labelAR: "انخفاض 20–30٪ في أعراض الاكتئاب في برامج مهارات الحياة" },
    { number: "50%+", labelEN: "Of mental health conditions start by age 14", labelAR: "أكثر من 50٪ من الاضطرابات النفسية تبدأ قبل سن 14" },
    { number: "70%", labelEN: "Of youth feel more hopeful after peer‑support groups", labelAR: "70٪ من الشباب يشعرون بمزيد من الأمل بعد مجموعات الدعم بين الأقران" },
    { number: "3×", labelEN: "Higher school completion with strong social‑emotional skills", labelAR: "احتمال إكمال الدراسة أعلى بثلاثة أضعاف مع مهارات اجتماعية وعاطفية قوية" },
    { number: "1 in 7", labelEN: "Adolescents live with a mental health condition", labelAR: "واحد من كل 7 مراهقين يعيش مع مشكلة نفسية" },
    { number: "60%", labelEN: "Of young people say skills training boosts confidence", labelAR: "60٪ من الشباب يقولون إن تدريب المهارات يعزّز الثقة بالنفس" }
];

function getRandomStat() {
    let index = Math.floor(Math.random() * statistics.length);
    return statistics[index];
}

function showCaseStudy() {
    let badge = document.getElementById("caseStudyBadge");
    let title = document.getElementById("caseStudyTitle");
    let list = document.getElementById("caseStudyList");
    let stat1 = document.getElementById("caseStudyStat1");
    let label1 = document.getElementById("caseStudyLabel1");
    let stat2 = document.getElementById("caseStudyStat2");
    let label2 = document.getElementById("caseStudyLabel2");

    if (badge) badge.innerHTML = currentLanguage === "en" ? caseStudy.badgeEN : caseStudy.badgeAR;
    if (title) title.innerHTML = currentLanguage === "en" ? caseStudy.titleEN : caseStudy.titleAR;

    if (list) {
        let items = currentLanguage === "en" ? caseStudy.itemsEN : caseStudy.itemsAR;
        let html = "";
        for (let i = 0; i < items.length; i++) {
            html += `<li>${items[i]}</li>`;
        }
        list.innerHTML = html;
    }

    let randomStat1 = getRandomStat();
    let randomStat2 = getRandomStat();

    if (stat1) stat1.innerHTML = randomStat1.number;
    if (label1) label1.innerHTML = currentLanguage === "en" ? randomStat1.labelEN : randomStat1.labelAR;
    if (stat2) stat2.innerHTML = randomStat2.number;
    if (label2) label2.innerHTML = currentLanguage === "en" ? randomStat2.labelEN : randomStat2.labelAR;
}
function initFacts() {
  
}

let testimonials = [
    {
        textEN: "\"Joining a skills and wellbeing club at my school taught me how to talk about stress instead of keeping it inside. My sleep and grades both improved.\"",
        textAR: "\"الانضمام إلى نادٍ للمهارات والرفاه في مدرستي علّمني كيف أتحدث عن الضغط بدلًا من كتمه. تحسّن نومي ودرجاتي معًا.\"",
        nameEN: "Carlos M.",
        nameAR: "كارلوس م.",
        roleEN: "Student, Age 17",
        roleAR: "طالب، 17 عامًا",
        avatar: "img/messy bun-cuate.png"
    },
    {
        textEN: "\"The personal growth workshops showed me that asking for help is a skill. I learned coping tools that made my anxiety feel less overwhelming.\"",
        textAR: "\"ورش النمو الشخصي جعلتني أرى أن طلب المساعدة مهارة بحدّ ذاتها. تعلّمت أدوات تكيّف جعلت قلقي أقل إرباكًا.\"",
        nameEN: "Aisha K.",
        nameAR: "عائشة ك.",
        roleEN: "Youth Volunteer, Age 19",
        roleAR: "متطوّعة شابة، 19 عامًا",
        avatar: "img/messy bun-cuate.png"
    },
    {
        textEN: "\"Practicing problem‑solving and time‑management with a mentor helped me feel less stuck. I now have a routine that supports both my goals and my mental health.\"",
        textAR: "\"ممارسة حلّ المشكلات وإدارة الوقت مع مرشد ساعدتني على التوقّف عن الشعور بالعجز. لدي الآن روتين يدعم أهدافي وصحّتي النفسية معًا.\"",
        nameEN: "James L.",
        nameAR: "جيمس ل.",
        roleEN: "Apprentice, Age 18",
        roleAR: "متدرّب، 18 عامًا",
        avatar: "img/messy bun-cuate.png"
    },
    {
        textEN: "\"Our community center combined creative skills with mental health check‑ins. I felt seen, built friendships, and learned ways to calm my mind.\"",
        textAR: "\"جمع مركز المجتمع بين المهارات الإبداعية وجلسات متابعة للصحة النفسية. شعرت بأنني مرئي، وبنيت صداقات، وتعلّمت طرقًا لتهدئة ذهني.\"",
        nameEN: "Maria S.",
        nameAR: "ماريا س.",
        roleEN: "Participant, Age 20",
        roleAR: "مشاركة، 20 عامًا",
        avatar: "img/messy bun-cuate.png"
    }
];

function showTestimonials() {
    let titleEl = document.getElementById("testimonialsTitle");
    let sliderEl = document.getElementById("testimonialSlider");
    let dotsEl = document.getElementById("sliderDots");

    let text = currentLanguage === "en" ? englishText : arabicText;

    if (titleEl) titleEl.innerHTML = text.testimonialsTitle;

    if (sliderEl) {
        let html = "";
        for (let i = 0; i < testimonials.length; i++) {
            let t = testimonials[i];
            let tText = currentLanguage === "en" ? t.textEN : t.textAR;
            let tName = currentLanguage === "en" ? t.nameEN : t.nameAR;
            let tRole = currentLanguage === "en" ? t.roleEN : t.roleAR;

            html += `
                <div class="testimonial-card">
                    <p class="testimonial-text text-font">${tText}</p>
                    <div class="testimonial-author">
                        <img src="${t.avatar}" class="author-avatar">
                        <div>
                            <p class="author-name text-font">${tName}</p>
                            <p class="author-role text-font">${tRole}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        sliderEl.innerHTML = html;
    }

    if (dotsEl) {
        let html = "";
        for (let i = 0; i < testimonials.length; i++) {
            if (i === 0) {
                html += `<span class="dot active"></span>`;
            } else {
                html += `<span class="dot"></span>`;
            }
        }
        dotsEl.innerHTML = html;
    }
}


let secIndex = {
    titleEN: "Why Personal Growth Matters for Your Mind",
    titleAR: "لماذا يهمّ النمو الشخصي لعقلك؟",
    tagsEN: ["Mental Health", "Life Skills", "Coping", "Confidence", "Support"],
    tagsAR: ["الصحة النفسية", "مهارات الحياة", "التكيّف", "الثقة بالنفس", "الدعم"],
    items: [
        { number: "1", titleEN: "What Is Personal Growth in Skills?", titleAR: "ما هو النمو الشخصي في المهارات؟", textEN: "Understand how learning emotional, social, and practical skills protects your wellbeing.", textAR: "تعرف كيف يحمي تعلّم المهارات العاطفية والاجتماعية والعملية صحتك النفسية." },
        { number: "2", titleEN: "Early Warning Signs & Support", titleAR: "علامات مبكّرة والدعم المتاح", textEN: "Learn early signs of stress or low mood and where young people can ask for help.", textAR: "تعرّف العلامات المبكرة للضغط أو تدنّي المزاج وأين يمكن للشباب طلب المساعدة." },
        { number: "3", titleEN: "Daily Skills That Support Mental Health", titleAR: "مهارات يومية تدعم الصحة النفسية", textEN: "Explore small skills like breathing, time‑management, and talking about feelings.", textAR: "استكشف مهارات صغيرة مثل التنفس، وإدارة الوقت، والتحدّث عن المشاعر." },
        { number: "4", titleEN: "Stories of Change", titleAR: "قصص تغيير", textEN: "Read how youth used new skills to manage anxiety, connect with others, and stay in school.", textAR: "اطّلع على قصص شباب استخدموا مهارات جديدة للتعامل مع القلق، وبناء العلاقات، والاستمرار في الدراسة." }
    ]
};

function showSecIndex() {
    let titleEl = document.getElementById("secIndexTitle");
    let tagsEl = document.getElementById("secIndexTags");
    let listEl = document.getElementById("secIndexList");

    if (titleEl) titleEl.innerHTML = currentLanguage === "en" ? secIndex.titleEN : secIndex.titleAR;

    if (tagsEl) {
        let tags = currentLanguage === "en" ? secIndex.tagsEN : secIndex.tagsAR;
        let html = "";
        for (let i = 0; i < tags.length; i++) {
            html += `<span class="sec-index-tag sec-tag-1">${tags[i]}</span>`;
        }
        tagsEl.innerHTML = html;
    }

    if (listEl) {
        let html = "";
        for (let i = 0; i < secIndex.items.length; i++) {
            let item = secIndex.items[i];
            let title = currentLanguage === "en" ? item.titleEN : item.titleAR;
            let text = currentLanguage === "en" ? item.textEN : item.textAR;

            html += `
                <li class="sec-index-item">
                    <span class="sec-index-number">${item.number}.</span>
                    <div class="sec-index-content">
                        <h3>${title}</h3>
                        <p>${text}</p>
                    </div>
                </li>
            `;
        }
        listEl.innerHTML = html;
    }
}
