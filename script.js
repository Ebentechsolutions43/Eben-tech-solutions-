// ========================================
// Eben Tech Solutions JavaScript
// ========================================

// Wait until the page is ready
document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Mobile Menu
    // ==============================
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.querySelector(".nav-links");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function () {
            mobileNav.classList.toggle("active");
        });
    }

    // ==============================
    // Navigation Links
    // ==============================
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

                if (mobileNav) {
                    mobileNav.classList.remove("active");
                }
            }
        });
    });

    // ==============================
    // Header Shadow
    // ==============================
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.3)";
            } else {
                header.style.boxShadow = "none";
            }
        }
    });

    // ==============================
    // Back To Top
    // ==============================
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==============================
    // Dark / Light Mode
    // ==============================
    const themeToggle =
        document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️";
            } else {
                themeToggle.textContent = "🌙";
            }
        });
    }

    // ==============================
    // WhatsApp Popup
    // ==============================
    const popup =
        document.getElementById("whatsapp-popup");

    if (popup) {

        setTimeout(function () {
            popup.style.display = "block";
        }, 3000);

        setTimeout(function () {
            popup.style.display = "none";
        }, 10000);
    }

    // ==============================
    // AI CHATBOT
    // ==============================

    const chatToggle =
        document.getElementById("chat-toggle");

    const chatBox =
        document.getElementById("chat-box");

    const sendBtn =
        document.getElementById("send-btn");

    const userInput =
        document.getElementById("user-input");

    const chatMessages =
        document.getElementById("chat-messages");

    // Open / close chatbot
    if (chatToggle && chatBox) {

        chatToggle.addEventListener("click", function () {

            if (chatBox.style.display === "flex") {
                chatBox.style.display = "none";
            } else {
                chatBox.style.display = "flex";
            }

        });
    }

    // Send message
    function sendMessage() {

        if (!userInput || !chatMessages) {
            return;
        }

        const message =
            userInput.value.trim();

        if (message === "") {
            return;
        }

        // Show user's message
        addMessage(message, "user-message");

        // Clear input
        userInput.value = "";

        // Get bot response
        const response =
            getBotResponse(message);

        // Small delay before bot replies
        setTimeout(function () {
            addMessage(response, "bot-message");
        }, 500);
    }

    // Send button
    if (sendBtn) {
        sendBtn.addEventListener("click", sendMessage);
    }

    // Enter key
    if (userInput) {
        userInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }

        });
    }

    // Add message
    function addMessage(message, className) {

        if (!chatMessages) {
            return;
        }

        const messageElement =
            document.createElement("div");

        messageElement.className = className;

        messageElement.textContent = message;

        chatMessages.appendChild(messageElement);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;
    }

    // ==============================
    // Bot Responses
    // ==============================
    function getBotResponse(message) {

        const text =
            message.toLowerCase();

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {
            return "Hello! 👋 Welcome to Eben Tech Solutions. How can I help you today?";
        }

        if (
            text.includes("service") ||
            text.includes("what do you do")
        ) {
            return "We offer Web Design, Software Development, E-commerce, SEO, Graphic Design and IT Support.";
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
            return "Project prices depend on your requirements. Contact us on WhatsApp for a personalized quote.";
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

        return "I'm not sure about that yet. Please contact Eben Tech Solutions on WhatsApp and we'll be happy to help.";
    }

    // ==============================
    // Typing Animation
    // ==============================

    const typing =
        document.getElementById("typing");

    if (typing) {

        const text = "Eben Tech Solutions";
        let i = 0;

        function typeText() {

            if (i < text.length) {

                typing.textContent +=
                    text.charAt(i);

                i++;

                setTimeout(typeText, 120);
            }
        }

        typeText();
    }

    // ==============================
    // Loading Screen
    // ==============================

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(function () {
            loader.style.display = "none";
        }, 1200);
    }

    // ==============================
    // Footer Year
    // ==============================

    const footer =
        document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            "© " +
            new Date().getFullYear() +
            " Eben Tech Solutions. All Rights Reserved.";
    }

});        
