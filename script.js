const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
