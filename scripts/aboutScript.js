const faqItem = document.querySelectorAll(".faq__item");
faqItem.forEach((item) => {
  item.addEventListener("click", function (e) {
    const clicked = e.target.closest(".faq__item");
    clicked.querySelector(".fa-plus").classList.toggle("faq__active-icon");
    clicked.querySelector(".faq__answer").classList.toggle("faq__active");
  });
});
