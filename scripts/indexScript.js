const title = document.querySelector(".title__span");
const testimonialTabsContainer = document.querySelector(
  ".testimonials__tabs--container"
);
const testimonialTabs = document.querySelectorAll(".testimonials__header");
const testimonialContents = document.querySelectorAll(".testimonials__content");
const textEl = document.querySelector(".title__span");
const cursorEl = document.querySelector(".cursor");
const phrases = ["Mark Williams", "a Personal Trainer"];
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
  cursorEl.classList.toggle("hidden");

  if (letterIndex === currentPhrase.length - 1) {
    setTimeout(deleteText, 1000);
  } else {
    letterIndex++;
    setTimeout(typeText, 100);
  }
}

typeText();

//testimonials
testimonialTabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".testimonials__header");
  testimonialTabs.forEach((tab) => {
    tab.classList.remove("testimonials__header--active");
  });
  clicked.classList.add("testimonials__header--active");
  testimonialContents.forEach((content) => {
    content.classList.remove("testimonials__content--active");
  });
  console.log(clicked.dataset.tab);
  const activeContent = document.querySelector(
    `.testimonials__content--${clicked.dataset.tab}`
  );
  activeContent.classList.add("testimonials__content--active");
});
