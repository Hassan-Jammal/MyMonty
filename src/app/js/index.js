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
