const navBar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector(".body");
const xMark = document.querySelector(".fa-xmark");
const title = document.querySelector('.title__span');
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

        const textEl = document.querySelector(".title__span");
        const cursorEl = document.querySelector(".cursor");
        const phrases = [  "Mark Williams","a Personal Trainer"];
        let phraseIndex = 0;
        let letterIndex = 0;
      
        function deleteText() {
          const currentPhrase = phrases[phraseIndex];
          const currentLetter = currentPhrase[letterIndex];
      
          textEl.textContent = currentPhrase.slice(0, letterIndex);
          cursorEl.classList.toggle("hidden");
      
          if (letterIndex === 0) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
          }
      
          if (letterIndex > 0) {
            letterIndex--;
            setTimeout(deleteText, 100);
          } else {
            setTimeout(typeText, 1000);
          }
        }
      
        function typeText() {
          const currentPhrase = phrases[phraseIndex];
          const currentLetter = currentPhrase[letterIndex];
      
          textEl.textContent = currentPhrase.slice(0, letterIndex) + currentLetter;
          cursorEl.classList.toggle("hidden")
          
          if (letterIndex === currentPhrase.length - 1) {
            setTimeout(deleteText, 1000);
          } else {
            letterIndex++;
            setTimeout(typeText, 100);
          }
        }
      
        typeText();