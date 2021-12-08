/*******************************
 *
 * START Toggle Theme Mode
 *
 *******************************/

var toggle = document.getElementsByClassName("theme-mode");
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark-mode)").matches
    ? "dark-mode"
    : "light-mode");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

for (var i = 0; i < toggle.length; i++) {
  toggle[i].onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light-mode";

    if (currentTheme === "light-mode") {
      targetTheme = "dark-mode";
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  };
}

/*******************************
 *
 * END Toggle Theme Mode
 *
 *******************************/

/*******************************
 *
 * START Toggle Membership
 *
 *******************************/

var monthly = document.getElementsByClassName("monthly");
var yearly = document.getElementsByClassName("yearly");

function checkMembership(event) {
  if (event.target.id == "monthly") {
    for (var i = 0; i < monthly.length; i++) {
      monthly[i].style.display = "inline-block";
      yearly[i].style.display = "none";
    }
  } else {
    for (var i = 0; i < yearly.length; i++) {
      yearly[i].style.display = "inline-block";
      monthly[i].style.display = "none";
    }
  }
}

document.querySelectorAll("input[name='membership']").forEach((input) => {
  input.addEventListener("change", checkMembership);
});

/*******************************
 *
 * END Toggle Membership
 *
 *******************************/

/*******************************
 *
 * START Hero text animation
 *
 *******************************/

const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
const textInTimer = 2500,
  textOutTimer = 2200;
let index = 0;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

animateText();

/*******************************
 *
 * END Hero text animation
 *
 *******************************/

/*******************************
 *
 * START Toggle Mobile Menu Animation
 *
 *******************************/

let subMenu = document.querySelector(".sub-menu");
let navLinks = document.querySelector(".nav-links");
let menuBtn = document.querySelector(".menu");
let hasSubMenu = document.querySelector(".has-sub-menu");
let arrow = document.querySelector(".has-sub-menu span svg");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.classList.toggle("toggle");
});

hasSubMenu.onclick = function () {
  subMenu.classList.toggle("d-block");
  arrow.classList.toggle("rotate");
};

/*******************************
 *
 * END Toggle Mobile Menu Animation
 *
 *******************************/

/*******************************
 *
 * START SVG Rotation
 *
 *******************************/

window.onscroll = function () {
  let image = document.getElementById("website-logo");
  image.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
};

/*******************************
 *
 * END SVG Rotation (GSAP or the simpler one)
 *
 *******************************/

/*******************************
 *
 * START Selecting Language
 *
 * MUST READ
 * This function let you choose between languages.
 * when you choose a language, you should add "selected" attribute to the img in the languages section
 * and then let the magic do its work
 *
 *******************************/

let languagesWrapper = document.querySelector(".languages");
let languageToggler = document.querySelector(".language-toggler");
let language = document.querySelectorAll(".languages-wrapper__list-language");

languageToggler.onclick = function () {
  languagesWrapper.classList.toggle("open");
};

/*******************************
 *
 * END Selecting Language
 *
 *******************************/

/*******************************
 *
 * START Logos Dropdown
 *
 *******************************/

let locationsWrapper = document.querySelector(".locations");
let toggleLocations = document.querySelector(".toggle-locations");
let location = document.querySelectorAll(".locations-wrapper__list-location");
let logo = document.querySelector(".logo");
toggleLocations.onclick = function () {
  locationsWrapper.classList.toggle("open");
  for (var i = 0; i < location.length; i++) {
    location[i].classList.toggle("toggle");
  }
  logo.classList.toggle("open");
};

/*******************************
 *
 * END Logos Dropdown
 *
 *******************************/
