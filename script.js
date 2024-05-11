// options_unclicked = [1, 2, 3, 4]
// clicked = []

// // win logic
// winning_combos = [
//     [1,2],
//     [3,4],
// ]

// 1 = document.querySelector('button1')
// userClick()
// clicked.push()

// // compare clicked to winning combos
// if clicked === winning_combos[1]{
//     console.log(win)
// }

// ***************************************
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
  
  let clicked = []
  
  function userClick(icon) {
      clicked.push(icon);
  }
  
  // Shuffle gameIcons array
  shuffle(gameIcons);
  
  // Winning Combos
  let winningCombos = [["Ghost", "Ghost"], ["Death", "Death"]];
  
  let iconsEl = document.querySelectorAll(".gameIcons");
  
  iconsEl.forEach(function (el, index) {
    el.addEventListener("click", function () {
      // Get the clicked icon
      let clickedIcon = gameIcons[index];
      // Push the clicked icon to the clicked array
      userClick(clickedIcon);
      console.log("Clicked icons", clicked);
    });
  });