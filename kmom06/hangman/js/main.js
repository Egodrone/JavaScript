(function () {
    'use strict';
    var hangman = window.Hangman;
    var letterArea = document.getElementsByClassName("letterArea")[0];
    var selectedLetters = document.getElementById("selectedLetters");
    var generatedWord = hangman.peek();
    var countWrong = 0;
    var displaySelected = "";
    //set to true when the game is over
    //shut down eventListener
    var gameOver = false;
    //Array to check if the letter was already selected
    var existingLetters = "";
    var messageToUser = document.getElementById("winOrLose");
    var toAdd = "abcdefghijklmnopqrstuvxyzåäö";
    var countCorrect = 0;

    toAdd = toAdd.toUpperCase();
    generatedWord = generatedWord.toUpperCase();
    var alphabet = "abcdefghijklmnopqrstuvxyzåäö".split("").map(function(item) {
        return item.toUpperCase();
    });
    var arrGeneratedWords = generatedWord.split("");

    for (var i = 0; i < hangman.validParts.length; i++) {
        hangman.hide(hangman.validParts[i]);
    }
    function checkLetterInStr(passedLetter) {
        if (existingLetters.includes(passedLetter) == false) {
            existingLetters = existingLetters + String(passedLetter);
            var checker = generatedWord.includes(passedLetter);

            //gives true if the letter exist in the word
            if (checker == true) {
                displaySelected = displaySelected + String(passedLetter);
                selectedLetters.innerHTML = displaySelected;
                for (var i = 0; i < generatedWord.length; i++) {
                    if (arrGeneratedWords[i] == passedLetter) {
                        var correct = document.getElementsByClassName("letterCorrect")[i];

                        correct.innerHTML = passedLetter;
                        countCorrect++;
                    }
                }
                if (countCorrect == generatedWord.length) {
                    gameOver = true;
                    messageToUser.innerHTML = "You won!";
                    existingLetters = existingLetters + toAdd;
                }
            } else {
                //display part of the body
                if (countWrong < 9) {
                    hangman.show(hangman.validParts[countWrong]);
                    countWrong = countWrong + 1;
                    displaySelected = displaySelected + String(passedLetter);
                    selectedLetters.innerHTML = displaySelected;
                    if (countWrong == 9) {
                        gameOver = true;
                        messageToUser.innerHTML = "Game Over";
                        existingLetters = existingLetters + toAdd;
                    }
                } else {
                    gameOver = true;
                    messageToUser.innerHTML = "Game Over";
                    existingLetters = existingLetters + toAdd;
                    console.log(gameOver);
                }
            }
        }
    }

    for (var i2 = 0; i2 < alphabet.length; i2++) {
        var temp = document.createElement("div");

        temp.className = "letter";
        temp.innerHTML = alphabet[i2];
        temp.addEventListener("click", function(event) {
            if (existingLetters.length < toAdd.length) {
                event.target.style.background = "#c1caca";
                event.target.classList.remove("letter");
                event.target.classList.remove("nopo");
                event.target.classList.toggle("nopo");
            }
            console.log(event.target.innerHTML);
            checkLetterInStr(event.target.innerHTML);
        });
        letterArea.appendChild(temp);
    }
    for (var i3 = 0; i3 < generatedWord.length; i3++) {
        var temp2 = document.createElement("div");

        temp2.className = "letterCorrect";
        temp2.innerHTML = "-";

        letterArea.appendChild(temp2);
    }

    console.log(alphabet);
})();
