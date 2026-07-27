let darkMode = false;

function toggleTheme() {

    if (darkMode == false) {

        document.body.style.backgroundColor = "#111";
        document.body.style.color = "white";

        document.getElementById("btn").innerHTML = "☀️ Light Mode";

        darkMode = true;

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        document.getElementById("btn").innerHTML = "🌙 Dark Mode";

        darkMode = false;
    }

}
let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function updateClock() {
    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000);

updateClock();
let text = "Welcome to Eben Tech Solutions";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
// Open and close the chat
const chatButton = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");

chatButton.addEventListener("click", function () {
    if (chatBox.style.display === "block") {
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "block";
    }
});

// Send message
function sendMessage() {
    const input = document.getElementById("user-input");
    const messages = document.getElementById("chat-messages");

    let userMessage = input.value.trim();

    if (userMessage === "") return;

    messages.innerHTML += "<p><strong>You:</strong> " + userMessage + "</p>";

    let botReply = "Sorry, I don't understand that. Please ask about our services, prices, contact, website development, or IT support.";

const msg = userMessage.toLowerCase();

if (msg.includes("hi") || msg.includes("hello")) {
    botReply = "👋 Hello! Welcome to Eben Tech Solutions. How can I help you today?";
}
else if (msg.includes("who are you")) {
    botReply = "I'm the virtual assistant for Eben Tech Solutions. I'm here to answer your questions.";
}
else if (msg.includes("service")) {
    botReply = "We provide Website Design, Software Development, IT Support, Graphics Design, Logo Design, and Technology Consulting.";
}
else if (msg.includes("website")) {
    botReply = "Yes! We build modern, responsive websites for businesses, schools, churches, and individuals.";
}
else if (msg.includes("price") || msg.includes("cost")) {
    botReply = "Our prices depend on your project. Please contact us for a free quotation.";
}
else if (msg.includes("contact")) {
    botReply = "You can contact us through the contact form or WhatsApp on this website.";
}
else if (msg.includes("location")) {
    botReply = "Eben Tech Solutions serves clients online and can work with customers from anywhere.";
}
else if (msg.includes("ceo") || msg.includes("owner")) {
    botReply = "The founder of Eben Tech Solutions is Eben.";
}
else if (msg.includes("thank")) {
    botReply = "😊 You're welcome! We look forward to working with you.";
}

    const msg = userMessage.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
        botReply = "Hello! Welcome to Eben Tech Solutions. How can I help you today?";
    } else if (msg.includes("service")) {
        botReply = "We offer Web Design, Website Development, IT Support, Graphics Design, and Technology Consulting.";
    } else if (msg.includes("contact")) {
        botReply = "You can contact us using the Contact Form or WhatsApp on this website.";
    } else if (msg.includes("price") || msg.includes("cost")) {
        botReply = "Our prices depend on the project. Please send us a message with your requirements.";
    } else if (msg.includes("thank")) {
        botReply = "You're welcome! We appreciate your visit.";
    }

    messages.innerHTML += "<p><strong>Bot:</strong> " + botReply + "</p>";

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
}
