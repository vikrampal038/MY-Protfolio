const navlinks = document.querySelector(".navLinks");

console.log(navlinks);

function toggleMenu() {
  navlinks.classList.toggle("show");
}

const navlist = document.querySelectorAll(".navLinks li a");
console.log(navlist);

navlist.forEach(function (element) {
  console.log(element);

  element.addEventListener("click", toggleMenu);
});

// this code is for Scrolling function

document.getElementById("scrollDown").addEventListener("click", function () {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
});
// document.getElementById("scrollUp").addEventListener("click", function () {
//   window.scrollBy({
//     top: -window.innerHeight,
//     behavior: "smooth",
//   });
// });

// this is Typing animation code

const texts = [
  "Full Stack Web Developer.",
  "Front-End Developer.",
  "Back-End Developer.",
  "Web Designer.",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".detail").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 200); // Pause before starting next sentence
  } else {
    setTimeout(type, 50); // Typing speed
  }
})();
