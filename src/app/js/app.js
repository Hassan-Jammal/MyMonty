
export const run = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const navEnd = document.querySelector(".nav-end");

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

    var toggle = document.getElementById("theme-mode");
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark-mode)").matches ? "dark-mode" : "light-mode");
    if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)

    toggle.onclick = function() {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light-mode";

        if (currentTheme === "light-mode") {
            targetTheme = "dark-mode";
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    };

    

}