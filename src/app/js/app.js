
export const run = () => {

    // Toggle Mobile Menu and do other stuff
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");
    const links = document.querySelectorAll(".nav_links li");
    const navEndMobile = document.querySelector(".nav_end--mobile");

    hamburger.addEventListener('click', () => {
        //Animate Links
        navLinks.classList.toggle("open");

        links.forEach(link => {
            link.classList.toggle("fading");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
        
        navEnd.classList.toggle("d-flex");
    });

    // Toggle Theme Mode
    var toggle = document.getElementsByClassName("theme-mode");
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark-mode)").matches ? "dark-mode" : "light-mode");
    if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)

    for (var i = 0; i < toggle.length; i++) {
        toggle[i].onclick = function() {
            var currentTheme = document.documentElement.getAttribute("data-theme");
            var targetTheme = "light-mode";

            if (currentTheme === "light-mode") {
                targetTheme = "dark-mode";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        };
    }
}