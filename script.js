// ========================================
// Eben Tech Solutions JavaScript
// ========================================

// Display welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Eben Tech Solutions!");
});

// Smooth scrolling for navigation links
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Reveal sections while scrolling
const sections = document.querySelectorAll("section");

const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Initial styles for animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Footer year updates automatically
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Eben Tech Solutions. All Rights Reserved.`;
}
// Back to Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
