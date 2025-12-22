function initPreloader() {
    setTimeout(function () {
        let preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("hidden");
        }
    }, 4000);
}
