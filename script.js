// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===== CLOSE MENU AFTER CLICK (MOBILE) =====
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===== SMOOTH FADE-IN ANIMATION =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15,
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===== ACTIVE NAVBAR LINK =====
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


// ===== PROFILE IMAGE ANIMATION =====
const profileImage = document.querySelector(".photo img");

profileImage.addEventListener("mousemove", () => {
    profileImage.style.transform = "scale(1.05)";
});

profileImage.addEventListener("mouseleave", () => {
    profileImage.style.transform = "scale(1)";
});


// ===== TYPING EFFECT =====
const typingText = document.querySelector(".highlight");

const words = [
    "Sourabh Chetan",
    "Full Stack Developer",
    "AI & ML Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===== SCROLL TO TOP BUTTON =====
const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});