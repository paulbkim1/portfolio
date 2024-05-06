const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");

window.onload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener("scroll", (event) => {
  if (hamburger.classList.contains("active")) {
    event.preventDefault();
  } else {
    header.classList.toggle("stickyScroll", window.scrollY > 0);
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  logo.classList.toggle("active");
  header.classList.toggle("stickyScroll", window.scrollY > -1);
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    logo.classList.remove("active");
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in");
  const growElements = document.querySelectorAll(".grow-in");

  function isVisible(element) {
    const elementBox = element.getBoundingClientRect();
    const distanceFromTop = -70;

    return elementBox.top - window.innerHeight < distanceFromTop;
  }

  function scanDocument() {
    slideElements.forEach((element) => {
      if (isVisible(element)) {
        element.classList.add("slide-visible");
      } else {
        element.classList.remove("slide-visible");
      }
    });

    growElements.forEach((element) => {
      if (isVisible(element)) {
        element.classList.add("grow-visible");
      } else {
        element.classList.remove("grow-visible");
      }
    });
  }

  window.addEventListener("scroll", scanDocument);
});

const texts = [
  "Front End Developer",
  "Problem Solver",
  "Perpetual Learner",
  "Dedicated Professional",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typed").textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(erase, 2000);
  } else {
    const delay = letter.endsWith(" ") ? 30 : 110;
    setTimeout(type, delay);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById("typed").textContent = letter;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(type, 120);
  } else {
    const delay = letter.endsWith(" ") ? 30 : 60;
    setTimeout(erase, delay);
  }
}

type();
