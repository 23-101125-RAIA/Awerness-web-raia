
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


let secCards = [
    {
        image: "img/a.png",
        titleEN: "Personal Growth Habits",
        titleAR: "عادات النمو الشخصي",
        textEN: "Simple daily routines like journaling, movement, and reflection that support your mood and focus.",
        textAR: "عوائد يومية بسيطة مثل الكتابة، والحركة، والتأمل الذاتي تدعم المزاج والتركيز.",
        buttonEN: "Learn More →",
        buttonAR: "اعرف المزيد ←"
    },
    {
        image: "img/m.png",
        titleEN: "Skills for Study & Work",
        titleAR: "مهارات للدراسة والعمل",
        textEN: "Planning, problem‑solving, and digital skills that lower worry about the future and improve opportunities.",
        textAR: "مهارات التخطيط وحلّ المشكلات والمهارات الرقمية التي تقلّل القلق بشأن المستقبل وتحسّن الفرص.",
        buttonEN: "Learn More →",
        buttonAR: "اعرف المزيد ←"
    },
    {
        image: "img/b.png",
        titleEN: "Supportive Communities",
        titleAR: "مجتمعات داعمة",
        textEN: "Clubs and safe spaces where young people practice skills together and feel less alone.",
        textAR: "أندية ومساحات آمنة يمارس فيها الشباب المهارات معًا ويشعرون فيها بقدر أقل من الوحدة.",
        buttonEN: "Learn More →",
        buttonAR: "اعرف المزيد ←"
    }
];

function showSecCards() {
    let container = document.getElementById("secCardsSlider");
    if (!container) return;

    let html = "";
    for (let i = 0; i < secCards.length; i++) {
        let title = currentLanguage === "en" ? secCards[i].titleEN : secCards[i].titleAR;
        let text = currentLanguage === "en" ? secCards[i].textEN : secCards[i].textAR;
        let button = currentLanguage === "en" ? secCards[i].buttonEN : secCards[i].buttonAR;

        html += `
            <div class="sec-vertical-card sec-card-${i + 1}">
                <img src="${secCards[i].image}" alt="Card" class="sec-vertical-card-img">
                <div class="sec-card-overlay">
                    <h3 class="sec-card-overlay-title">${title}</h3>
                    <p class="sec-card-overlay-text">${text}</p>
                    <button class="sec-read-more-btn">${button}</button>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

let currentSliderIndex = 0;
let sliderTimer = null;

function showImageSlider() {
    let titleEl = document.getElementById("sliderSectionTitle");
    let subtitleEl = document.getElementById("sliderSectionSubtitle");
    let indicatorsEl = document.getElementById("sliderIndicators");
    let imagesContainer = document.getElementById("sliderImages");

    let text = currentLanguage === "en" ? englishText : arabicText;

    if (titleEl) titleEl.innerHTML = text.sliderSectionTitle;
    if (subtitleEl) subtitleEl.innerHTML = text.sliderSectionSubtitle;

    if (imagesContainer && indicatorsEl) {
        let images = imagesContainer.querySelectorAll(".slider-image-item");
        let html = "";

        for (let i = 0; i < images.length; i++) {
            if (i === 0) {
                images[i].classList.add("active");
                html += `<div class="slider-indicator active"></div>`;
            } else {
                images[i].classList.remove("active");
                html += `<div class="slider-indicator"></div>`;
            }
        }
        indicatorsEl.innerHTML = html;

        setupIndicatorClicks();
        currentSliderIndex = 0;
        startSliderAutoPlay();
    }
}

function setupIndicatorClicks() {
    let indicators = document.querySelectorAll(".slider-indicator");

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].setAttribute("data-index", i);
        indicators[i].onclick = function () {
            let index = parseInt(this.getAttribute("data-index"));
            showSliderImage(index);
        };
    }
}

function showSliderImage(index) {
    let images = document.querySelectorAll(".slider-image-item");
    let indicators = document.querySelectorAll(".slider-indicator");

    if (images.length === 0) return;

    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    currentSliderIndex = index;

    for (let i = 0; i < images.length; i++) {
        if (i === currentSliderIndex) {
            images[i].classList.add("active");
            indicators[i].classList.add("active");
        } else {
            images[i].classList.remove("active");
            indicators[i].classList.remove("active");
        }
    }
}

function nextSliderImage() {
    showSliderImage(currentSliderIndex + 1);
}

function prevSliderImage() {
    showSliderImage(currentSliderIndex - 1);
}

function startSliderAutoPlay() {
    if (sliderTimer) clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSliderImage, 4000);
}

function initSliderControls() {
    let sliderPrevBtn = document.getElementById("sliderPrevBtn");
    let sliderNextBtn = document.getElementById("sliderNextBtn");

    if (sliderPrevBtn) {
        sliderPrevBtn.onclick = function () {
            prevSliderImage();
            startSliderAutoPlay();
        };
    }

    if (sliderNextBtn) {
        sliderNextBtn.onclick = function () {
            nextSliderImage();
            startSliderAutoPlay();
        };
    }
}

let faqData = {
    titleEN: "Questions About Skills & Mental Health",
    titleAR: "أسئلة حول المهارات والصحة النفسية",
    subtitleEN: "Learn how building skills, seeking support, and caring for your mind are connected.",
    subtitleAR: "تعرّف كيف يرتبط بناء المهارات وطلب الدعم والاعتناء بعقلك ببعضها البعض.",
    items: [
        { questionEN: "How are personal growth and mental health connected?", questionAR: "كيف يرتبط النمو الشخصي بالصحة النفسية؟", answerEN: "Personal growth in skills—like learning to communicate, solve problems, and manage emotions—can reduce stress and build resilience.", answerAR: "النمو الشخصي في المهارات، مثل تعلّم التواصل وحلّ المشكلات وإدارة المشاعر، يمكن أن يقلّل الضغط ويبني المرونة النفسية." },
        { questionEN: "What early signs should youth look out for?", questionAR: "ما العلامات المبكرة التي يجب أن ينتبه لها الشباب؟", answerEN: "Changes like constant tiredness, losing interest in things you usually enjoy, difficulty concentrating, or feeling hopeless for weeks.", answerAR: "تغيّرات مثل التعب المستمر، وفقدان الاهتمام بالأشياء التي كنت تستمتع بها، وصعوبة التركيز، أو الشعور باليأس لأسابيع." },
        { questionEN: "Can building skills really improve my mood?", questionAR: "هل يمكن أن يحسّن بناء المهارات من مزاجي فعلاً؟", answerEN: "Yes. Learning and practicing new skills can give a sense of progress, purpose, and control, which are all protective for mental health.", answerAR: "نعم. تعلّم وممارسة مهارات جديدة يمنحك إحساسًا بالتقدّم والمعنى والتحكّم، وكلها عوامل تحمي الصحة النفسية." },
        { questionEN: "Do I need experience to start growing my skills?", questionAR: "هل أحتاج إلى خبرة حتى أبدأ في تنمية مهاراتي؟", answerEN: "No. Personal growth starts with curiosity and small actions.", answerAR: "لا. يبدأ النمو الشخصي من الفضول وخطوات صغيرة." },
        { questionEN: "Is this website a mental health service?", questionAR: "هل هذا الموقع خدمة علاج نفسي؟", answerEN: "No. This site shares educational information about skills and wellbeing and cannot replace professional support.", answerAR: "لا. يقدّم هذا الموقع معلومات تثقيفية حول المهارات والرفاه النفسي ولا يمكن أن يَحلّ محلّ الدعم من مختصين." },
        { questionEN: "Who can I talk to if I am struggling?", questionAR: "مع من يمكنني التحدث إذا كنت أعاني؟", answerEN: "Start by speaking with someone you trust—like a parent, teacher, or school counselor.", answerAR: "ابدأ بالتحدّث مع شخص تثق به مثل أحد الوالدين أو معلّم أو مرشد في المدرسة." }
    ]
};

function showFAQ() {
    let titleEl = document.getElementById("faqTitle");
    let subtitleEl = document.getElementById("faqSubtitle");
    let listEl = document.getElementById("faqList");

    if (titleEl) titleEl.innerHTML = currentLanguage === "en" ? faqData.titleEN : faqData.titleAR;
    if (subtitleEl) subtitleEl.innerHTML = currentLanguage === "en" ? faqData.subtitleEN : faqData.subtitleAR;

    if (listEl) {
        let html = "";
        for (let i = 0; i < faqData.items.length; i++) {
            let item = faqData.items[i];
            let question = currentLanguage === "en" ? item.questionEN : item.questionAR;
            let answer = currentLanguage === "en" ? item.answerEN : item.answerAR;

            html += `
                <div class="faq-item">
                    <div class="faq-question text-font">
                        <span>${question}</span>
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-answer text-font">
                        <p>${answer}</p>
                    </div>
                </div>
            `;
        }
        listEl.innerHTML = html;
        setupFAQClicks();
    }
}

function setupFAQClicks() {
    let faqItems = document.querySelectorAll(".faq-item");

    for (let i = 0; i < faqItems.length; i++) {
        let question = faqItems[i].querySelector(".faq-question");

        if (question) {
            question.onclick = function () {
                let item = this.parentElement;
                let answer = item.querySelector(".faq-answer");
                let icon = item.querySelector(".faq-icon");
                let isOpen = answer.style.maxHeight;

                let allAnswers = document.querySelectorAll(".faq-answer");
                let allIcons = document.querySelectorAll(".faq-icon");
                for (let j = 0; j < allAnswers.length; j++) {
                    allAnswers[j].style.maxHeight = null;
                    allIcons[j].textContent = "+";
                }

                if (!isOpen) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    icon.textContent = "−";
                }
            };
        }
    }
}


let footerData = {
    logoEN: "Skillio.",
    logoAR: "Skillio.",
    descEN: "Raising awareness about how personal growth in skills, supportive environments, and timely help can protect youth mental health.",
    descAR: "نرفع الوعي بأهمية نمو المهارات الشخصية والبيئات الداعمة وطلب المساعدة في الوقت المناسب لحماية الصحة النفسية للشباب.",
    columns: [
        { headingEN: "Quick Links", headingAR: "روابط سريعة", links: [{ textEN: "Home", textAR: "الرئيسية", href: "#home" }, { textEN: "Programs", textAR: "البرامج", href: "#services" }, { textEN: "Resources", textAR: "الموارد", href: "#resources" }, { textEN: "Get Involved", textAR: "انضم إلينا", href: "#contact" }] },
        { headingEN: "Learning Areas", headingAR: "مجالات التعلم", links: [{ textEN: "Creative Arts", textAR: "الفنون الإبداعية", href: "#" }, { textEN: "Digital Skills", textAR: "المهارات الرقمية", href: "#" }, { textEN: "Leadership", textAR: "القيادة", href: "#" }, { textEN: "Entrepreneurship", textAR: "ريادة الأعمال", href: "#" }] },
        { headingEN: "Resources", headingAR: "الموارد", links: [{ textEN: "Course Library", textAR: "مكتبة الدورات", href: "#" }, { textEN: "Success Stories", textAR: "قصص النجاح", href: "#" }, { textEN: "FAQs", textAR: "الأسئلة الشائعة", href: "#" }, { textEN: "Partner With Us", textAR: "شراكة معنا", href: "#" }] }
    ]
};

function showFooter() {
    let contentEl = document.getElementById("footerContent");
    let copyrightEl = document.getElementById("footerCopyright");

    let text = currentLanguage === "en" ? englishText : arabicText;

    if (copyrightEl) copyrightEl.innerHTML = text.footerCopyright;

    if (contentEl) {
        let logo = currentLanguage === "en" ? footerData.logoEN : footerData.logoAR;
        let desc = currentLanguage === "en" ? footerData.descEN : footerData.descAR;

        let html = `
            <div class="footer-column">
                <h4 class="footer-logo title-font">${logo}</h4>
                <p class="footer-description text-font">${desc}</p>
            </div>
        `;

        for (let i = 0; i < footerData.columns.length; i++) {
            let col = footerData.columns[i];
            let heading = currentLanguage === "en" ? col.headingEN : col.headingAR;

            html += `<div class="footer-column"><h4 class="footer-heading title-font">${heading}</h4><ul class="footer-links">`;

            for (let j = 0; j < col.links.length; j++) {
                let link = col.links[j];
                let linkText = currentLanguage === "en" ? link.textEN : link.textAR;
                html += `<li><a href="${link.href}" class="text-font">${linkText}</a></li>`;
            }

            html += `</ul></div>`;
        }

        contentEl.innerHTML = html;
    }
}

function initScrollTop() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.onscroll = function () {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        };

        scrollTopBtn.onclick = function () {
            window.scrollTo(0, 0);
        };
    }
}


function updateAllText() {
    let text = currentLanguage === "en" ? englishText : arabicText;

    let headerLogo = document.getElementById("headerLogo");
    if (headerLogo) headerLogo.innerHTML = text.headerLogo;

    let langToggle = document.getElementById("langToggle");
    if (langToggle) langToggle.innerHTML = text.langToggle;

    let loginbtn = document.getElementById("loginbtn");
    if (loginbtn) loginbtn.innerHTML = text.loginbtn;

    let heroTitle = document.getElementById("heroTitle");
    if (heroTitle) heroTitle.innerHTML = text.heroTitle;

    let heroDescription = document.getElementById("heroDescription");
    if (heroDescription) heroDescription.innerHTML = text.heroDescription;

    let heroButton = document.getElementById("heroButton");
    if (heroButton) heroButton.innerHTML = text.heroButton;

    let principlesTitle = document.getElementById("principlesTitle");
    if (principlesTitle) principlesTitle.innerHTML = text.principlesTitle;

    let principlesSubtitle = document.getElementById("principlesSubtitle");
    if (principlesSubtitle) principlesSubtitle.innerHTML = text.principlesSubtitle;

    let cardsSliderTitle = document.getElementById("cardsSliderTitle");
    if (cardsSliderTitle) cardsSliderTitle.innerHTML = text.cardsSliderTitle;

    let cardsSliderSubtitle = document.getElementById("cardsSliderSubtitle");
    if (cardsSliderSubtitle) cardsSliderSubtitle.innerHTML = text.cardsSliderSubtitle;

    showNav();
    showPrinciples();
    showCaseStudy();
    showTestimonials();
    showSecIndex();
    showSecCards();
    showImageSlider();
    showFAQ();
    showFooter();
}


window.addEventListener("load", function () {
 
    setTimeout(function () {
        let preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("hidden");
        }
    }, 4000);

  
    initLanguageToggle();
    initThemeToggle();
    initScrollTop();
    initSliderControls();
    initFacts();
    updateAllText();
});

document.getElementById("1").innerHTML ="Skillio"

let textArray = {
            title: "Login",
            emailLabel: "Email",
            passwordLabel: "Password",
            forgotPassword: "Forgot Password?",
            genderLabel: "Gender",
            maleLabel: "Man",
            femaleLabel: "Woman",
            signInButton: "Sign In",
            dividerText: "Or Continue With",
            registerText: "Don't have an account yet?",
            registerLink: "Register for free",
            errorMessage: "Incorrect email or password"
        };

       
        document.getElementById("login-title").textContent = textArray.title;
        document.getElementById("email-label").textContent = textArray.emailLabel;
        document.getElementById("password-label").textContent = textArray.passwordLabel;
        document.getElementById("forgot-link").textContent = textArray.forgotPassword;
        document.getElementById("gender-label").textContent = textArray.genderLabel;
        document.getElementById("male-label").textContent = textArray.maleLabel;
        document.getElementById("female-label").textContent = textArray.femaleLabel;
        document.getElementById("signin-button").textContent = textArray.signInButton;
        document.getElementById("divider-text").textContent = textArray.dividerText;
        document.getElementById("register-text").textContent = textArray.registerText;
        document.getElementById("register-link").textContent = textArray.registerLink;
        document.getElementById("error-message").textContent = textArray.errorMessage;

        function login() {
            let username = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;

            document.getElementById("login-username").style.border = "2px solid var(--color-light-gray)";
            document.getElementById("login-password").style.border = "2px solid var(--color-light-gray)";
            document.getElementById("login-username").style.background = "var(--color-white)";
            document.getElementById("login-password").style.background = "var(--color-white)";
            document.getElementById("error-message").classList.remove("show");

            if (username == "raia" && password == "123") {
                window.location = "profile.html";
            } else {
                document.getElementById("login-username").style.background = "var(--cta)";
                document.getElementById("login-password").style.background = "var(--cta)";
                document.getElementById("login-username").style.border = "2px solid #ff4444";
                document.getElementById("login-password").style.border = "2px solid #ff4444";
                document.getElementById("error-message").classList.add("show");
            }
        }

        document.getElementById("login-password").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                login();
            }
        });
  

