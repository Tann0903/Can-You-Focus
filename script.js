// STACK OVERFLOW SHUFFLE
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let gameIcons = [
  { value: "Ghost", image: "./img/Ghost-icon.png" },
  { value: "Death", image: "./img/Death-icon.png" },
  { value: "Ghost", image: "./img/Ghost-icon.png" },
  { value: "Death", image: "./img/Death-icon.png" },
];

function userClick(icon) {
  clicked.push(icon);
}
let clicked = [];

let firstGuess = null;
let secondGuess = null;

let guessCount = 0;

shuffle(gameIcons);

// Winning Combos
let winningCombos = [
  ["Ghost", "Ghost"],
  ["Death", "Death"],
];

let iconsEl = document.querySelectorAll(".gameIcons");

iconsEl.forEach(function (el, index) {
  el.addEventListener("click", function () {
    let clickedIcon = gameIcons[index];
    guessCount++;
    let myspan = document.getElementByName("aa");
    alert(myspan.innerText);
    el.setAttribute("src", clickedIcon.image);
    userClick(clickedIcon);
    console.log("Clicked icons", clicked);

    if (firstGuess === null) {
      firstGuess = index
      alert("First Guess - Total Guesses " + firstGuess)
  } else {
      firstGuess = index
      alert("Second Guess - Total Guesses " + firstGuess)
      
  }


    if (clicked.length === winningCombos[0].length) {
      let clickedValues = clicked.map((icon) => icon.value);
      let comboValues = winningCombos[0];

      if (clickedValues.toString() === comboValues.toString()) {
        console.log("You win!");
        alert("correct")
      } else {
        console.log("Try again!");
        alert("wrong")
      }
    }
  });
});

function restartGame() {

}
