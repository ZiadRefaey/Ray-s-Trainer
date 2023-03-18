const navBar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector(".body");
const xMark = document.querySelector(".fa-xmark");

document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.add("is-active");
  body.classList.add("mobile-nav__active");
});
xMark.addEventListener("click", function () {
  mobileNav.classList.remove("is-active");
  body.classList.remove("mobile-nav__active");
});

let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollPos) {
    navBar.classList.add("navbar--hidden");
  } else if (currentScrollPos < prevScrollPos) {
    navBar.classList.remove("navbar--hidden");
  }
  if (currentScrollPos < 100) {
    navBar.classList.remove("navbar--border");
  } else {
    navBar.classList.add("navbar--border");
  }
  prevScrollPos = currentScrollPos;
});
// Title  Typing with cursor

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
