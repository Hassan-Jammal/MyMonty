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

    // Toggle Membership
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

    // Hero text animation
    const txts=document.querySelector(".animate-text").children, txtsLen=txts.length;
    const textInTimer=2500, textOutTimer=2200;
    let index=0;

    function animateText() {
        for(let i=0; i<txtsLen; i++){
            txts[i].classList.remove("text-in","text-out");  
        }
        txts[index].classList.add("text-in");

        setTimeout(function(){
            txts[index].classList.add("text-out");              
        },textOutTimer)

        setTimeout(function(){
            if(index == txtsLen-1){
                index=0;
            }
            else{
                index++;
            }
            animateText();
        },textInTimer); 
    }
        
    animateText();

    // var userAgent = window.navigator.userAgent,
    //     platform = window.navigator.platform,
    //     macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    //     windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    //     iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    //     os = null;
    
    // if (macosPlatforms.indexOf(platform) !== -1) {
    //     document.getElementById("downloadStore").src = "./assets/apple.png";
    // } else if (iosPlatforms.indexOf(platform) !== -1) {
    //     document.getElementById("downloadStore").src = "./assets/apple.png";
    // } else if (windowsPlatforms.indexOf(platform) !== -1) {
    //     document.getElementById("downloadStore").src = "./assets/android.png";
    // } else if (/Android/.test(userAgent)) {
    //     document.getElementById("downloadStore").src = "./assets/android.png";
    // } else if (!os && /Linux/.test(platform)) {
    //     os = 'Linux';
    // }
    
    // return os;
    alert(navigator.userAgentData.platform)
    // switch (navigator.userAgentData.platform)
    // {
    //     case "Windows":
    //         document.querySelector("#downloadStore img.windows").classList.add("d-block");
    //         break;
    //     case "Apple":
    //         document.querySelector("#downloadStore img.apple").classList.add("d-block");
    //         break;
    //     case "Android":
    //         document.querySelector("#downloadStore img.android").classList.add("d-block");
    //         break;
    //     case "Huwawei":
    //         document.querySelector("#downloadStore img.Huwawei").classList.add("d-block");
    //         break;
    //     default:
    //         alert("!")
    // }
}