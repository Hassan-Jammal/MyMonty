
export const run = () => {

    // Toggle Mobile Menu and do other stuff
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");
    const links = document.querySelectorAll(".nav_links li");
    
    hamburger.addEventListener('click', () => {
        //Animate Links
        navLinks.classList.toggle("open");

        links.forEach(link => {
            link.classList.toggle("fading");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
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

    var monthly = document.getElementsByClassName("monthly");
    var yearly = document.getElementsByClassName("yearly");

    function checkMembership(event) {
        if(event.target.id == 'monthly'){
            for (var i = 0; i < monthly.length; i++) {
                monthly[i].style.display = "block";
                yearly[i].style.display = "none";
            }
        }
        else{
            for (var i = 0; i < yearly.length; i++) {
                yearly[i].style.display = "block";
                monthly[i].style.display = "none";
            }
        }
    }

    document.querySelectorAll("input[name='membership']").forEach((input) => {
        input.addEventListener('change', checkMembership);
    });

}