const words = [
    { word: "bear", missingIndex: 1 },
    { word: "bird", missingIndex: 2 },
    { word: "fish", missingIndex: 3 },
    { word: "goat", missingIndex: 0 },
    { word: "pig", missingIndex: 2 },
    { word: "land", missingIndex: 1 },
    { word: "rain", missingIndex: 3 },
    { word: "road", missingIndex: 2 },
    { word: "time", missingIndex: 1 },
    { word: "wind", missingIndex: 2 }
];
let currentWordIndex = 0;
let currentWord;
let letters = [];

const letterSpans = [
    document.getElementById('letter1'),
    document.getElementById('letter2'),
    document.getElementById('letter3'),
    document.getElementById('letter4')
];

const inputBox = document.getElementById('inputBox');
const resultText = document.getElementById('result');
const checkButton = document.getElementById('checkButton');

function chooseWord() {
    currentWord = words[currentWordIndex];
    letters = currentWord.word.split('');
    letters[currentWord.missingIndex] = '_'; // Hide the missing letter
    displayWord();
}

function displayWord() {
    letterSpans.forEach((span, index) => {
        span.textContent = letters[index].toUpperCase();
    });
}

function checkAnswer() {
    const input = inputBox.value.toLowerCase().trim();
    if (input.length !== 1) {
        alert('Please enter a single letter.');
        return;
    }
    
    if (input === currentWord.word[currentWord.missingIndex]) {
        resultText.textContent = 'Correct!';
        setTimeout(nextWord, 1500); // Move to next word after 1.5 seconds
    } else {
        resultText.textContent = 'Incorrect letter. Try again!';
    }
    
    inputBox.value = '';
}

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0; // Restart from the beginning if end of array is reached
    }
    chooseWord();
}

checkButton.addEventListener('click', checkAnswer);

// Initial setup
chooseWord();
