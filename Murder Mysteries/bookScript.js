"use strict";

// get buttons

const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");

// get book1 and all book sections

const book1 = document.querySelector(".bookSC--1");
const bookSections = document.querySelectorAll(".bookSectionContainer");

// get books underlay
const bookUnderlay = document.querySelector(".booksUnderlay");

// left button functionality

leftButton.addEventListener("click", function () {
  bookSections.forEach(function (section, index) {
    section.style.transform = `translateX(${index * 100}%)`;
  });
  bookUnderlay.style.background =
    "linear-gradient(145deg, #1e3eb5, rgba(63, 136, 167, 0.85))";
  bookUnderlay.style.opacity = 0.6;
});

// right button functionality

rightButton.addEventListener("click", function () {
  bookSections.forEach(function (section, index) {
    section.style.transform = `translateX(${index * 100 - 100}%)`;
  });
  bookUnderlay.style.background =
    "linear-gradient(145deg, #3F88A7, rgba(57, 102, 218, 0.5))";
  bookUnderlay.style.opacity = 1;
});

// IntersectionObserverAPI for book1 section animation

const bookObserver = new IntersectionObserver(
  function (enteries, observer) {
    const [section] = enteries;

    if (!section.isIntersecting) return;

    section.target.style.transform = "translateY(0%)";

    observer.unobserve(section.target);
  },
  {
    root: null,
    threshold: 0.25,
  }
);

bookObserver.observe(book1);
