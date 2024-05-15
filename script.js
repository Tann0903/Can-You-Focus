// Stack Overflow - Fisher–Yates (aka Knuth) Shuffle
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
      ];
  }

  return array;
}

// Define game icons
let gameIcons = [
  { value: "Ghost", image: "./img/Ghost-icon.png" },
  { value: "Ghost", image: "./img/Ghost-icon.png" },
  { value: "Death", image: "./img/Death-icon.png" },
  { value: "Death", image: "./img/Death-icon.png" },
  { value: "Cat", image: "./img/Cat-icon.png" },
  { value: "Cat", image: "./img/Cat-icon.png" },
  { value: "Halloween", image: "./img/Halloween-icon.png" },
  { value: "Halloween", image: "./img/Halloween-icon.png" },
  { value: "Skeleton", image: "./img/Skeleton-icon.png" },
  { value: "Skeleton", image: "./img/Skeleton-icon.png" },
];

// Function to handle user clicks
function userClick(icon) {
  clicked.push(icon);
}

// Initialize variables
let clicked = [];
let firstGuess = null;
let secondGuess = null;
let firstGuessElement = null;
let secondGuessElement = null;
let guessCount = 0;
let countDown = 60;

// Shuffle game icons
shuffle(gameIcons);

// Define winning combos
let winningCombos = [
  ["Ghost", "Ghost"],
  ["Death", "Death"],
  ["Cat", "Cat"],
  ["Skeleton", "Skeleton"],
  ["Halloween", "Halloween"],
];

// Function to update timer display
function updateTimerDisplay() {
  document.getElementById("timer").innerText = "Time Left: " + countDown;
}

// Initialize timer display
updateTimerDisplay();

let timer; // Declare the timer variable outside the event listener

// Event listener for card clicks
let iconsEl = document.querySelectorAll(".gameIcons");
let matchesMade = 0; // Track matches made
let maxGuesses = 10; // Maximum number of guesses allowed

iconsEl.forEach(function (el, index) {
    el.addEventListener("click", function () {
        // Check if the timer is already running
        if (!timer) {
            // Start the timer if it's not already running
            timer = setInterval(function () {
                countDown--;
                updateTimerDisplay(); // Update the timer display
                if (countDown === 0) {
                    clearInterval(timer);
                    document.getElementById("resultMessage").innerText = "Time's up! You lost!";
                }
            }, 1000); // Set the interval to 1000 ms (1 second)
        }

        let clickedIcon = gameIcons[index];
        guessCount++;
        el.setAttribute("src", clickedIcon.image);
        userClick(clickedIcon);

        if (firstGuess === null) {
            firstGuess = clickedIcon;
            firstGuessElement = el;
        } else {
            secondGuess = clickedIcon;
            secondGuessElement = el;

            if (firstGuess.value === secondGuess.value) {
                matchesMade++; // Increment matches made
                firstGuess = null;
                secondGuess = null;

                // Check if all pairs are found
                if (matchesMade === gameIcons.length / 2) { // Check matches made against half of total icons
                    document.getElementById("resultMessage").innerText = "Congratulations! You won!";
                    clearInterval(timer); // Stop the timer
                }
            } else {
                setTimeout(flipTheCard, 300);
                firstGuess = null;
                secondGuess = null;
            }
        }

        // Check if max guesses reached
        if (guessCount / 2 === maxGuesses) {
            clearInterval(timer); // Stop the timer
            document.getElementById("resultMessage").innerText = "You lost!"; // Display loss message
        }

        document.getElementById("guesses").innerText = "Your Guesses: " + guessCount / 2;
    });
});

// Function to flip the card
function flipTheCard() {
  secondGuessElement.setAttribute("src", "img/stamp-skeleton-icon.png");
  firstGuessElement.setAttribute("src", "img/stamp-skeleton-icon.png");
}

// Function to restart the game
document.getElementById("restartButton").addEventListener("click", function() {
  clicked = [];
  guessCount = 0;
  countDown = 60; // Reset countdown
  updateTimerDisplay(); // Update timer display
  shuffle(gameIcons); // Reshuffle game icons
  firstGuess = null;
  secondGuess = null;
  firstGuessElement = null;
  secondGuessElement = null;
  matchesMade = 0; // Reset matches made

  // Clear result message
  document.getElementById("resultMessage").innerText = "";

  // Reset images
  iconsEl.forEach(function (el, index) {
      el.setAttribute("src", gameIcons[index].image);
  });
});
