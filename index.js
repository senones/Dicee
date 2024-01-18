// index.js

// Function to update the dice images and h1 text
function playGame() {
    // Create variables for random numbers for Player 1 and Player 2
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Construct filenames for the corresponding dice images
    var diceImageFilename1 = 'dice' + randomNumber1 + '.png';
    var diceImageFilename2 = 'dice' + randomNumber2 + '.png';

    // Set the src attributes of the img elements to display the random dice images for Player 1 and Player 2
    document.querySelector('.img1').src = './images/' + diceImageFilename1;
    document.querySelector('.img2').src = './images/' + diceImageFilename2;

    // Compare dice values and update the text in the h1 element
    var h1Element = document.querySelector('h1');

    if (randomNumber1 > randomNumber2) {
        h1Element.innerHTML = 'Player 1 Wins!';
    } else if (randomNumber2 > randomNumber1) {
        h1Element.innerHTML = 'Player 2 Wins!';
    } else {
        h1Element.innerHTML = 'It\'s a Draw!';
    }
}

// Add event listener to the Play button
document.getElementById('playButton').addEventListener('click', playGame);
