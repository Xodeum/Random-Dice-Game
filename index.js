window.onload = function() {
    // Generate random numbers between 1 and 6 for both players
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Select the dice images and update them based on the random numbers
    document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
    document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;

    // Determine the winner and update the heading
    let heading = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        heading.textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = "Player 2 Wins!";
    } else {
        heading.textContent = "It's a Draw!";
    }
};
