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
 * START Toggle Mobile Menu Animation
 *
 *******************************/

let menuBtn = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("open");
menuBtn.classList.toggle("toggle");
});

// $('.menu-item-has-children').on("click", function(){
// $(this).next('.sub-menu-wrapper').toggle();
// $(this).find('svg').toggleClass('rotate');
// });


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
 *******************************/

// (Desktop)
let desktopLanguagesWrapper = document.querySelector(
".desktop-header .languages"
);
let desktopLanguageToggler = document.querySelector(
".desktop-header .language-toggler"
);
let desktopLanguage = document.querySelector(
".desktop-header .languages-wrapper__list-language"
);

desktopLanguageToggler.onclick = function () {
desktopLanguagesWrapper.classList.toggle("open");
};

// (Mobile)
let mobileLanguagesWrapper = document.querySelector(
".mobile-header .languages"
);
let mobileLanguageToggler = document.querySelector(
".mobile-header .language-toggler"
);
let mobileLanguage = document.querySelector(
".mobile-header .languages-wrapper__list-language"
);

mobileLanguageToggler.onclick = function () {
mobileLanguagesWrapper.classList.toggle("open");
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

// (Desktop)
let desktopLocationsWrapper = document.querySelector(
".desktop-header .locations"
);
let desktopLocationsToggler = document.querySelector(
".desktop-header .toggle-locations"
);
let desktopLocation = document.querySelector(
".desktop-header .locations-wrapper__list-location"
);
let desktopLogo = document.querySelector(".desktop-header .logo");

desktopLocationsToggler.onclick = function () {
desktopLocationsWrapper.classList.toggle("open");
desktopLocation.classList.toggle("toggle");
desktopLogo.classList.toggle("open");
};

// (Mobile)
let mobileLocationsWrapper = document.querySelector(
".mobile-header .locations"
);
let mobileLocationsToggler = document.querySelector(
".mobile-header .toggle-locations"
);
let mobileLocation = document.querySelector(
".mobile-header .locations-wrapper__list-location"
);
let mobileLogo = document.querySelector(".mobile-header .logo");

mobileLocationsToggler.onclick = function () {
mobileLocationsWrapper.classList.toggle("open");
mobileLocation.classList.toggle("toggle");
mobileLogo.classList.toggle("open");
};

/*******************************
 *
 * END Logos Dropdown
 *
 *******************************/

window.onload = () => {
const menuDimensions = {
	plans: { height: 0, width: 0 },
	features: { height: 0, width: 0 },
	features: { height: 0, width: 0 },
	plans: { height: 0, width: 0 },
};

const menuOptions = document.querySelectorAll("[data-menu-opt]");
const menuSections = document.querySelectorAll("[data-section]");
const menuContainer = document.querySelector(".desktop-menu");
const menuPointer = document.querySelector(".menu-pointer");
const headerContainer = document.querySelector(".header");
const optionsBar = document.querySelector(".desktop-nav__tabs");

menuContainer.classList.add("desktop-menu--rotate");

for (section of menuSections) {
	const sectionName = section.dataset.section;
	menuDimensions[sectionName] = {
	height: Math.ceil(section.getBoundingClientRect().height),
	width: Math.ceil(section.getBoundingClientRect().width),
	};
}

for (element of menuOptions) {
	const targetSection = element.dataset.menuOpt;
	const containerLeftEdge = optionsBar.getBoundingClientRect().x;
	const sourceElRect = element.getBoundingClientRect();
	const sourceCenter = Math.round(
	sourceElRect.x + sourceElRect.width / 2
	);

	element.addEventListener("mouseenter", (e) => {
	const targetElement = document.querySelector(
		`.section-${targetSection}`
	);

	for (section of menuSections) {
		section.classList.remove("desktop-menu__section--visible");
	}

	menuContainer.setAttribute(
		"style",
		`height: ${menuDimensions[targetSection].height}px; width: ${menuDimensions[targetSection].width}px;`
	);

	if (menuPointer.classList.contains("menu-pointer--visible")) {
		menuPointer.setAttribute(
		"style",
		`transform: translateY(-6px) translateX(${Math.floor(
			sourceCenter - containerLeftEdge - 8
		)}px) rotate(45deg)`
		);
	} else {
		menuPointer.setAttribute(
		"style",
		`transform: translateX(${Math.floor(
			sourceCenter - containerLeftEdge - 8
		)}px) rotate(45deg)`
		);
	}

	menuContainer.classList.add("desktop-menu--visible");
	targetElement.classList.add("desktop-menu__section--visible");
	menuContainer.addEventListener("transitionend", addResizeAnim);
	menuContainer.addEventListener("transitionend", positionArrow);
	});
}

const clearAfterLeaving = () => {
	menuContainer.classList.remove("desktop-menu--anim-resize");
	menuPointer.classList.remove("menu-pointer--anim-transform");
	menuPointer.classList.remove("menu-pointer--visible");
	menuPointer.removeAttribute("style");
	for (section of menuSections) {
	section.removeAttribute("style");
	}
	menuContainer.removeAttribute("style");
	menuContainer.removeEventListener(
	"transitionstart",
	clearAfterLeaving
	);
};

const positionArrow = () => {
	if (!menuPointer.classList.contains("menu-pointer--visible")) {
	const styles = menuPointer.getAttribute("style");
	if (
		styles &&
		menuContainer.classList.contains("desktop-menu--visible")
	) {
		const newStyles = styles.replace("transform: ", "");
		menuPointer.setAttribute(
		"style",
		`transform: translateY(-6px) ${newStyles}`
		);
		menuPointer.classList.add("menu-pointer--visible");
		menuPointer.classList.add("menu-pointer--anim-transform");
	}
	}
	menuContainer.removeEventListener("transitionend", positionArrow);
};

const addResizeAnim = () => {
	if (!menuContainer.classList.contains("desktop-menu--anim-resize")) {
	menuContainer.classList.add("desktop-menu--anim-resize");
	for (section of menuSections) {
		section.setAttribute("style", "transition-duration: 0.25s");
	}
	}
	menuContainer.removeEventListener("transitionend", addResizeAnim);
};

headerContainer.addEventListener("mouseleave", () => {
	menuContainer.addEventListener("transitionstart", clearAfterLeaving);
	menuContainer.classList.remove("desktop-menu--visible");
});
};

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
