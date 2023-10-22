// Fetching and Displaying quote
const quoteDisplay = document.getElementById('quote');
const quoteNumber = document.getElementById('quote-number');

async function fetchQuote() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const quote = data.slip.advice;
    const quoteCount = data.slip.id;
    quoteDisplay.textContent = '"' + quote + '"';
    quoteNumber.textContent = '#' + quoteCount;
    diceAnimation();
}

// Dice Animation
const diceIcon = document.getElementById('dice-icon');
let rotation = 0;
function diceAnimation() {
    rotation += 45;
    diceIcon.style.transform = `rotate(${rotation}deg)`;
}

