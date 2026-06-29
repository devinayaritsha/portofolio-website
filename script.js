const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "☀️ Good Morning! Welcome to my portfolio.";
} else if (hour < 18) {
    greeting.textContent = "🌤️ Good Afternoon! Welcome to my portfolio.";
} else {
    greeting.textContent = "🌙 Good Evening! Welcome to my portfolio.";
}
