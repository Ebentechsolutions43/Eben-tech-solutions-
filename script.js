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

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
}
const popup = document.getElementById("whatsapp-popup");

if (popup) {
    setTimeout(() => {
        popup.style.display = "block";
    }, 3000);

    setTimeout(() => {
        popup.style.display = "none";
    }, 10000);
}

// ===============================
// Typing Animation
// ===============================

const text = "Eben Tech Solutions";
const typing = document.getElementById("typing");

let i = 0;

function typeText() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 120);
    }
    
});
window.addEventListener("load", typeText);
// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.display = "none";
    }
});
