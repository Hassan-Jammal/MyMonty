/*******************************
 *
 * START Toggle Theme Mode
 *
 *******************************/

var toggle = document.getElementsByClassName("theme-mode__btn");
var storedTheme =localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark-mode)").matches ? "dark-mode" : "light-mode");

if (storedTheme)
	document.documentElement.setAttribute("data-theme", storedTheme);

for (var i = 0; i < toggle.length; i++) {
	toggle[i].onclick = function () {
		this.classList.toggle("rotate");
		
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
 * START Toggle Mobile Menu Animation
 *
 *******************************/

let menuBtn = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	menuBtn.classList.toggle("toggle");
});

let menuHasChildren = document.querySelectorAll(".menu-item-has-children");
menuHasChildren.forEach((el) => {
	el.addEventListener("click", () => {
		el.nextElementSibling.classList.toggle("d-block");
		el.querySelector("svg").classList.toggle("rotate");
  	});
});

/*******************************
 *
 * END Toggle Mobile Menu Animation
 *
 *******************************/

/*******************************
 *
 * START Selecting Language
 *
 *******************************/

let languagesWrapper = document.querySelectorAll("header .languages");
let languagesToggler = document.querySelectorAll("header .language-toggler");

languagesToggler.forEach((el) => {
	el.addEventListener("click", () => {
		languagesWrapper.forEach((language) => {
			language.classList.toggle("open");
		});
  	});
});

/*******************************
 *
 * END Selecting Language
 *
 *******************************/

/*******************************
 *
 * START Locations Dropdown
 *
 *******************************/

let locationsWrapper = document.querySelectorAll("header .locations");
let locationsToggler = document.querySelectorAll("header .toggle-locations");
let logo = document.querySelector("header .logo");

locationsToggler.forEach((el) => {
	el.addEventListener("click", () => {
		locationsWrapper.forEach((location) => {
			location.classList.toggle("open");
			location.parentElement.classList.toggle("open");
		});
	});
});

/*******************************
 *
 * END Locations Dropdown
 *
 *******************************/

/*******************************
 *
 * START SVG Rotation
 *
 *******************************/

window.onscroll = function () {
	let image = document.getElementById("website-logo");
	image.style.transform = "translate(-50%, -50%) rotate(" + window.pageYOffset / 4 + "deg)";
};

/*******************************
 *
 * END SVG Rotation
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
		const sourceCenter = Math.round(sourceElRect.x + sourceElRect.width / 2);

		element.addEventListener("mouseenter", (e) => {
			const targetElement = document.querySelector(`.section-${targetSection}`);

			for (section of menuSections) {
				section.classList.remove("desktop-menu__section--visible");
			}

			setTimeout(function () {
				menuContainer.setAttribute("style",`height: ${menuDimensions[targetSection].height}px; width: ${menuDimensions[targetSection].width}px;`);
			},100);
			
			if (menuPointer.classList.contains("menu-pointer--visible")) {
				menuPointer.setAttribute("style", `transform: translateY(-6px) translateX(${Math.floor(sourceCenter - containerLeftEdge - 8)}px) rotate(45deg)`);
			} else {
				menuPointer.setAttribute("style", `transform: translateX(${Math.floor(sourceCenter - containerLeftEdge - 8)}px) rotate(45deg)`);
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
		menuContainer.removeEventListener("transitionstart", clearAfterLeaving);
  	};

	const positionArrow = () => {
		if (!menuPointer.classList.contains("menu-pointer--visible")) {
			const styles = menuPointer.getAttribute("style");
			if (styles && menuContainer.classList.contains("desktop-menu--visible")) {
				const newStyles = styles.replace("transform: ", "");
				menuPointer.setAttribute("style",`transform: translateY(-6px) ${newStyles}`);
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