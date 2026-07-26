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