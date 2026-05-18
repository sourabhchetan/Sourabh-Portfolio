// ===== NAVBAR TOGGLE =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");

    // Change hamburger icon
    hamburger.innerHTML = navLinks.classList.contains("show-menu")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});


// ===== HIDE NAVBAR ON SCROLL DOWN =====
let lastScroll = 0;
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.classList.add("hide-nav");
    } else {
        navbar.classList.remove("hide-nav");
    }

    lastScroll = currentScroll;
});


// ===== ACTIVE NAV LINKS =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});
// ===== MOBILE NAVBAR =====

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});