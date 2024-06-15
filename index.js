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


