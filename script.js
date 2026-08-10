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
    const text = message.toLowerCase().trim();

    // Greetings
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening")
    ) {
        return "Hello! 👋 Welcome to Eben Tech Solutions. How can I help you today?";
    }

    // Services
    if (
        text.includes("service") ||
        text.includes("what do you do") ||
        text.includes("what can you do")
    ) {
        return "We offer Web Design, Software Development, E-commerce, SEO, Graphic Design and IT Support. 💻";
    }

    // Website
    if (
        text.includes("website") ||
        text.includes("web design")
    ) {
        return "Yes! 🌐 We design modern, responsive and professional websites for businesses, organizations and individuals.";
    }

    // Software
    if (
        text.includes("software") ||
        text.includes("app") ||
        text.includes("application")
    ) {
        return "We can help with software and application development. Tell us about the project you have in mind. 🚀";
    }

    // E-commerce
    if (
        text.includes("ecommerce") ||
        text.includes("e-commerce") ||
        text.includes("online store")
    ) {
        return "Yes! 🛒 We can help create an online store where customers can view products and place orders.";
    }

    // SEO
    if (
        text.includes("seo") ||
        text.includes("google") ||
        text.includes("search engine")
    ) {
        return "We provide SEO services to help improve a website's visibility in search engines. 🔎";
    }

    // Graphic Design
    if (
        text.includes("graphic") ||
        text.includes("logo") ||
        text.includes("design")
    ) {
        return "We can help with professional graphic design, including logos and digital materials. 🎨";
    }

    // IT Support
    if (
        text.includes("it support") ||
        text.includes("computer problem") ||
        text.includes("technical support")
    ) {
        return "Our IT support service can help with common technology and computer-related problems. 🛠️";
    }

    // Price
    if (
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("how much") ||
        text.includes("fee")
    ) {
        return "💰 Project prices depend on the type and requirements of the project. Contact us on WhatsApp for a personalized quote.";
    }

    // Contact
    if (
        text.includes("contact") ||
        text.includes("whatsapp") ||
        text.includes("phone")
    ) {
        return "📱 You can contact Eben Tech Solutions through the WhatsApp button on the website.";
    }

    // About
    if (
        text.includes("about") ||
        text.includes("who are you") ||
        text.includes("eben tech")
    ) {
        return "Eben Tech Solutions provides Web Design, Software Development and IT Support to help businesses and individuals grow digitally. 🚀";
    }

    // Thanks
    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {
        return "You're welcome! 😊 Is there anything else you'd like to know?";
    }

    // Goodbye
    if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {
        return "Goodbye! 👋 Thanks for visiting Eben Tech Solutions.";
    }

    // Default response
    return "I'm still learning 🤖. Try asking me about our services, websites, software, SEO, prices, or how to contact Eben Tech Solutions.";
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
async function loadServices() {
    const container = document.getElementById("backend-services");

    if (!container) return;

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/api/services"
        );

        const data = await response.json();

        container.innerHTML = "";

        data.services.forEach(service => {
            const item = document.createElement("div");

            item.className = "backend-service";
            item.textContent = service;

            container.appendChild(item);
        });

    } catch (error) {
        console.error("Could not connect to backend:", error);
        container.textContent = "Unable to load services.";
    }
}

loadServices();
// Load services from backend
async function loadServices() {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/services");
        const data = await response.json();

        const servicesBox = document.getElementById("backend-services");

        if (servicesBox) {
            servicesBox.innerHTML = "";

            data.services.forEach(service => {
                const item = document.createElement("div");
                item.className = "backend-service";
                item.textContent = "✓ " + service;
                servicesBox.appendChild(item);
            });
        }

    } catch (error) {
        console.error("Backend error:", error);
    }
}

loadServices();
