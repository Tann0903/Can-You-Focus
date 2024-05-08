// alert("Yooooo!")

// An array of cards
// function MATH.RANDOM()?
//FOR LOOPS

// I don't HAVE to use for loops; i can use if else else statements as long as it works.

// click button events
// -for when the cards flip
// -if there is already a match
// -if there is no match (sort of reset)
// -SOUNDS
// - setTimeout events (card flips)

// shuffling function
// difference between 1st click (when user is guessing) and 2nd click (when checking a match)

// POP UP MODULE TO DISPLAY THE RULES - yes
// WIN LOSS POP UP - yes
// LINK that Paul sent

// ***************************************

let gameCards = [
    {value: "Ghost", image: "./img/Ghost-icon.png"},
    {value: "Death", image: "./img/Death-icon.png"},
    {value: "Ghost", image: "./img/Ghost-icon.png"},
    {value: "Death", image: "./img/Death-icon.png"},
]
// The cards in this array are objects
// values and image are properties

document.querySelectorAll(".gameCards")
//document. que... - Open the page, use inspect tools and paste it into the console. You should see the cards highlighted in the DOM.

// ELEMENTS!!
gameElements.array.forEach(element => {
    gameElements.
});


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
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
