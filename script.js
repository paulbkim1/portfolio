const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");


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

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    logo.classList.remove("active");
}))