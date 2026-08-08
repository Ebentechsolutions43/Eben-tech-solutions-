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
const navLinks = document.querySelectorAll(".nav-links a");
const navLinks = document.querySelectorAll(".nav-links a");

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
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});
// ===============================
// Eben AI Assistant
// ===============================

const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

// Open and close chatbot
if (chatToggle && chatBox) {
    chatToggle.addEventListener("click", () => {
        if (chatBox.style.display === "flex") {
            chatBox.style.display = "none";
        } else {
            chatBox.style.display = "flex";
        }
    });
}

// Send message
if (sendBtn && userInput) {
    sendBtn.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
}

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    // Show user's message
    addMessage(message, "user-message");

    // Clear input
    userInput.value = "";

    // Generate bot response
    const response = getBotResponse(message);

    setTimeout(() => {
        addMessage(response, "bot-message");
    }, 500);
}

// Add message to chat
function addMessage(message, className) {
    const messageElement = document.createElement("div");

    messageElement.className = className;
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Bot responses
function getBotResponse(message) {
    const text = message.toLowerCase();

    if (
        text.includes("service") ||
        text.includes("what do you do")
    ) {
        return "Eben Tech Solutions offers Web Design, Software Development, E-commerce, SEO, Graphic Design and IT Support.";
    }

    if (
        text.includes("website") ||
        text.includes("web design")
    ) {
        return "Yes! We design modern, responsive websites for businesses, organizations and individuals.";
    }

    if (
        text.includes("software") ||
        text.includes("app")
    ) {
        return "We can help with software and application development. Contact us on WhatsApp to discuss your project.";
    }

    if (
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("how much")
    ) {
        return "Project prices depend on your requirements. Please contact us on WhatsApp for a personalized quote.";
    }

    if (
        text.includes("contact") ||
        text.includes("whatsapp") ||
        text.includes("phone")
    ) {
        return "You can contact Eben Tech Solutions through the WhatsApp button on this website.";
    }

    if (
        text.includes("seo") ||
        text.includes("google")
    ) {
        return "We provide SEO services to help businesses improve their visibility online.";
    }

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return "Hello! 👋 Welcome to Eben Tech Solutions. How can I help you?";
    }

    return "I'm not sure about that yet. Please contact Eben Tech Solutions on WhatsApp and we'll be happy to help.";
}
