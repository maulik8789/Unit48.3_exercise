function guessingGame() {
    let ans = Math.floor(Math.random()*100);
    let won = false;
    let tries = 0;

return function guessRand(num){
    if(won){
        return(`The game is over, you already won!`);
    }
    if (num == ans){
        won = true;
        tries += 1;
        return (`You win! You found ${ans} in ${tries} guesses.`);
    }
    if(num < ans){
        tries += 1;
        return(`${num} is too low!`)
    }
    if(num > ans){
        tries += 1;
        return(`${num} is too high!`)
    }
}
}

module.exports = { guessingGame };
