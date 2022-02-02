// Your code goes here
let game = confirm('Do you want to play a game?');
let numberUser;
let numberGame;
let prize;
let maxNumber;
let currentMaxWin;
let playAgain = true;
let continueOn = true;
const minNumber = 0;
const attempts = 3;
const maxNumberBegin = 8;
const initialMaxWin = 100;
const addNumbers = 4;
const two = 2;
if (!game) {
    alert('You did not become a billionaire, but can.');
} else {
    while (playAgain === true) {
        prize = 0;
        let j = 0;
        continueOn = true;
        while (continueOn === true) {
            currentMaxWin = initialMaxWin * Math.pow(two, j);
            maxNumber = maxNumberBegin + addNumbers * j;
            numberGame = Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
            for (let i = 0; i < attempts; i++) {
                numberUser = Number(prompt(`Choose a roulette pocket number from ${minNumber} to ${maxNumber}
                    Attempts left: ${attempts-i}
                    Total prize: ${prize}$
                    Posiible prize on current attempt: ${currentMaxWin/Math.pow(two, i)}$ `));
                if (Number.isInteger(numberUser) === false) {
                    alert('Please enter the integer');
                }
                console.log(numberUser);
                if (numberUser === numberGame) {
                    if (i === 0) {
                        prize += currentMaxWin / Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxWin/Math.pow(two, i)}$.`);
                        break;
                    } else if (i === 1) {
                        prize += currentMaxWin / Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxWin/Math.pow(two, i)}$.`);
                        break;
                    } else if (i === attempts - 1) {
                        prize += currentMaxWin / Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxWin/Math.pow(two, i)}$.`);
                        break;
                    }
                } else {
                    continue;
                }
            }
            if (numberUser === numberGame) {
                continueOn = confirm('Do you want to continue?', '');
                if (continueOn) {
                    j++;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${prize}$`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                continueOn = false;
            }
        }
        playAgain = confirm('Do you want to play again?');
    }
}