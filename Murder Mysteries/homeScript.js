"use strict";

// get header title and button, section 2
const headerTitle = document.querySelector("h1");
const lmButton = document.querySelector(".headerButton");
const section2 = document.querySelector(".Section--2");

// intersection observer object with call back function and object
const headerObserver = new IntersectionObserver(
  function (entries, observer) {
    const [mainTitle, mainButton] = entries;

    if (!mainTitle.isIntersecting || !mainButton.isIntersecting) return;

    mainTitle.target.style.top = "60%";

    mainButton.target.style.bottom = "20%";

    observer.unobserve(mainTitle.target);
    observer.unobserve(mainButton.target);
  },
  {
    root: null,
    threshold: 1,
  }
);

// making observer object observe header title and button
headerObserver.observe(headerTitle);
headerObserver.observe(lmButton);

// smooth scroll to first section

lmButton.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});
