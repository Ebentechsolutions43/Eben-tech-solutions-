// ========================================
// Eben Tech Solutions JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // CONFIGURATION
    // ========================================

    const API_BASE_URL =
        "https://eben-tech-solutions.onrender.com";


    // ========================================
    // MOBILE MENU
    // ========================================

    const menuToggle =
        document.getElementById("menu-toggle");

    const mobileNav =
        document.querySelector(".nav-links");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", function () {

            mobileNav.classList.toggle("active");

        });
    }


    // ========================================
    // NAVIGATION LINKS
    // ========================================

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const href =
                this.getAttribute("href");

            // Only handle links beginning with #
            if (href && href.startsWith("#")) {

                const target =
                    document.querySelector(href);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                    if (mobileNav) {
                        mobileNav.classList.remove("active");
                    }
                }
            }

        });

    });


    // ========================================
    // HEADER SHADOW
    // ========================================

    const header =
        document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 4px 10px rgba(0,0,0,0.3)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    // ========================================
    // BACK TO TOP
    // ========================================

    const backToTop =
        document.getElementById("backToTop");

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


    // ========================================
    // DARK / LIGHT MODE
    // ========================================

    const themeToggle =
        document.getElementById("theme-toggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (
                document.body.classList.contains("dark-mode")
            ) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        });

    }


    // ========================================
    // WHATSAPP POPUP
    // ========================================

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


    // ========================================
    // AI CHATBOT
    // ========================================

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


    if (chatToggle && chatBox) {

        chatToggle.addEventListener("click", function () {

            if (chatBox.style.display === "flex") {

                chatBox.style.display = "none";

            } else {

                chatBox.style.display = "flex";

            }

        });

    }


    function addMessage(message, className) {

        if (!chatMessages) return;

        const messageElement =
            document.createElement("div");

        messageElement.className =
            className;

        messageElement.textContent =
            message;

        chatMessages.appendChild(
            messageElement
        );

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }


    function getBotResponse(message) {

        const text =
            message.toLowerCase().trim();


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


        return "I'm still learning 🤖. Try asking me about our services, websites, software, SEO, prices, or how to contact Eben Tech Solutions.";

    }


    function sendMessage() {

        if (!userInput || !chatMessages) return;

        const message =
            userInput.value.trim();

        if (!message) return;

        addMessage(
            message,
            "user-message"
        );

        userInput.value = "";

        const response =
            getBotResponse(message);

        setTimeout(function () {

            addMessage(
                response,
                "bot-message"
            );

        }, 500);

    }


    if (sendBtn) {

        sendBtn.addEventListener(
            "click",
            sendMessage
        );

    }


    if (userInput) {

        userInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendMessage();

                }

            }
        );

    }


    // ========================================
    // TYPING ANIMATION
    // ========================================

    const typing =
        document.getElementById("typing");

    if (typing) {

        const text =
            "Eben Tech Solutions";

        let i = 0;

        function typeText() {

            if (i < text.length) {

                typing.textContent +=
                    text.charAt(i);

                i++;

                setTimeout(
                    typeText,
                    120
                );

            }

        }

        typeText();

    }


    // ========================================
    // LOADING SCREEN
    // ========================================

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.display =
                "none";

        }, 1200);

    }


    // ========================================
    // FOOTER YEAR
    // ========================================

    const footer =
        document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            "© " +
            new Date().getFullYear() +
            " Eben Tech Solutions. All Rights Reserved.";

    }


    // ========================================
    // LOAD SERVICES FROM RENDER BACKEND
    // ========================================

    async function loadServices() {

        const container =
            document.getElementById(
                "backend-services"
            );

        if (!container) return;

        try {

            const response =
                await fetch(
                    API_BASE_URL +
                    "/api/services"
                );

            if (!response.ok) {

                throw new Error(
                    "Server returned " +
                    response.status
                );

            }

            const data =
                await response.json();


            // Supports either:
            // ["Web Design", "SEO"]
            //
            // OR:
            // { services: ["Web Design", "SEO"] }

            const services =
                Array.isArray(data)
                    ? data
                    : data.services;


            if (!Array.isArray(services)) {

                throw new Error(
                    "Invalid services response"
                );

            }


            container.innerHTML = "";


            services.forEach(function (service) {

                const item =
                    document.createElement("div");

                item.className =
                    "backend-service";

                item.textContent =
                    "✓ " + service;

                container.appendChild(
                    item
                );

            });


        } catch (error) {

            console.error(
                "Could not connect to backend:",
                error
            );

            container.innerHTML =
                "<p>Unable to load services.</p>";

        }

    }


    // Load services ONCE
    loadServices();


    // ========================================
    // GET A QUOTE
    // ========================================

    const quoteForm =
        document.getElementById(
            "quoteForm"
        );

    const quoteStatus =
        document.getElementById(
            "quoteMessageStatus"
        );


    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                const submitButton =
                    quoteForm.querySelector(
                        "button[type='submit']"
                    );


                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.textContent =
                        "Sending...";

                }


                const formData = {

                    name:
                        document
                            .getElementById(
                                "quoteName"
                            )
                            .value
                            .trim(),

                    email:
                        document
                            .getElementById(
                                "quoteEmail"
                            )
                            .value
                            .trim(),

                    phone:
                        document
                            .getElementById(
                                "quotePhone"
                            )
                            .value
                            .trim(),

                    service:
                        document
                            .getElementById(
                                "quoteService"
                            )
                            .value,

                    budget:
                        document
                            .getElementById(
                                "quoteBudget"
                            )
                            .value,

                    message:
                        document
                            .getElementById(
                                "quoteMessage"
                            )
                            .value
                            .trim()

                };


                try {

                    const response =
                        await fetch(
                            API_BASE_URL +
                            "/api/quote",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify(
                                        formData
                                    )
                            }
                        );


                    const result =
                        await response.json();


                    if (
                        response.ok &&
                        result.success
                    ) {

                        if (quoteStatus) {

                            quoteStatus.textContent =
                                "✅ Your quote request has been submitted successfully!";

                        }

                        quoteForm.reset();


                    } else {

                        if (quoteStatus) {

                            quoteStatus.textContent =
                                result.message ||
                                "Something went wrong. Please try again.";

                        }

                    }


                } catch (error) {

                    console.error(
                        "Quote submission error:",
                        error
                    );


                    if (quoteStatus) {

                        quoteStatus.textContent =
                            "Unable to submit your request right now. Please try again later.";

                    }

                }


                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        "Request My Quote";

                }

            }
        );

    }

});
