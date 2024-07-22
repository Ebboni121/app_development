const words = [
    { clue: "The ______ is on the table.", answer: "book", image: "images/book.png" },
    { clue: "The ______ is red .", answer: "apple", image: "images/apple.png" },
    { clue: "He plays the ______ in the band.", answer: "drum", image: "images/drum.png" },
    { clue: "The ______ flew over the fence.", answer: "bird", image: "images/bird.png" },
    { clue: "The hat is  ______ .", answer: "orange", image: "images/hat.png" },
    { clue: "The ______ is brown.", answer: "horse", image: "images/horse.png" },
    { clue: "She wore a pink ______ to the party.", answer: "dress", image: "images/dress.png" },
    {clue: "His ______ are green.", answer: "pants", image: "images/pants.png" },
  ];
  
  let currentWordIndex = 0;
  let currentWord = words[currentWordIndex];
  
  const wordContainer = document.querySelector('.word-container');
  const wordImage = document.getElementById('word-image');
  const userInput = document.getElementById('user-input');
  const checkButton = document.getElementById('check-btn');
  const message = document.getElementById('message');
  const nextButton = document.getElementById('next-btn');
  
  // Function to load the current word
  function loadWord() {
    wordContainer.querySelector('p').textContent = currentWord.clue;
    wordImage.src = currentWord.image;
  }
  
  // Function to check user input
  function checkAnswer() {
    const guess = userInput.value.trim().toLowerCase();
    
    if (guess === currentWord.answer) {
      message.textContent = "Correct!";
      message.style.color = "green";
      nextButton.style.display = "inline-block";
      checkButton.disabled = true;
      userInput.disabled = true;
    } else {
      message.textContent = "Incorrect, try again.";
      message.style.color = "red";
    }
  }
  
  // Function to go to the next word
  function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0; // Restart if end of list is reached
    }
    currentWord = words[currentWordIndex];
    loadWord();
    message.textContent = "";
    userInput.value = "";
    userInput.disabled = false;
    checkButton.disabled = false;
    nextButton.style.display = "none";
  }
  
  // Event listeners
  checkButton.addEventListener('click', checkAnswer);
  nextButton.addEventListener('click', nextWord);
  
  // Initial load
  loadWord();
  