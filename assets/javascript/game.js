//charges all the elements from the dom
var lettersPress = document.getElementById("lettersPress");
var guessedWord = document.getElementById("guessedWord");
var categoriesList = document.getElementById("categories");
var hint = document.getElementById("hint");
var gameScore = document.getElementById("score");
var song = document.getElementById("song");
var image = document.getElementById("image");

//Global variables
var words = [];
var word = '';
var hints = [];
var selectedValue = parseInt(categoriesList.value);
var totalWordLetters = 0;
var letterFound = "";
var score = 0;
var chances = 11;
var hangin = 0;
var wordArray = [];
function onSelection() {
    selectedValue = parseInt(categoriesList.value);
    console.log(selectedValue);
}

function play() {
    if (selectedValue === -1) { return alert("Please choose a category"); }
    resetVars(true);
    words = categories[selectedValue];
    var number = Math.floor(Math.random() * words.length);
    word = words[number][0];
    hints = words[number][1];
    wordArray = word.split("");
    for (var i = 0; i < wordArray.length; i++) {
        var span = document.createElement("span");
        span.setAttribute("id", "Span" + i);
        span.setAttribute("class", "border");
        span.textContent = "__";
        guessedWord.appendChild(span);
    };
    hint.textContent = hints[Math.floor(Math.random() * hints.length)];
}

//reset all the game

function reset() {
    resetVars(false);
}

//user gussing the words
document.onkeyup = function (event) {
    if (totalWordLetters === word.length) {
        keepPlaying();
    };
    var userKey = event.key;
    //only is the user press and alphabet letter
    if (alphabet.includes(userKey)) {

        lettersPress.textContent += userKey;
        if (word.includes(userKey)) {
            totalWordLetters++;
            for (var i = 0; i < wordArray.length; +i++) {
                if (wordArray[i] === userKey) {
                    letterFound = document.getElementById("Span" + i);
                    letterFound.textContent = userKey;
                }
            };

        } else {
            hangin++;
            image.setAttribute("source", "../images/hangman" + hangin + ".jpg");
        }
        if (totalWordLetters === word.length) {
            score++;
            gameScore.textContent = score;
            // keep playing
        }
        if (score = 10) {
            for (var i = 0; i < 100; i++) {
                song.play();
            }
            song.pause();
        }
    }
}

function keepPlaying() {
    var again = confirm("Keep playing?");
    if (again === 1) {
        play();

    } else {
        reset();
    }
}

function removeSpans() {

    guessedWord.textContent = "";

}

//reset all variables
function resetVars(partial) {
    if (partial) {
        selectedValue = categoriesList.value;
        totalWordLetters = 0;
        words = [];
        hints = [];
        word = "";
        letterFound = "";
        hangin = 0;
        removeSpans();
    } else {
        categoriesList.value = "-1";
        selectedValue = -1;
        totalWordLetters = 0;
        words = [];
        hints = [];
        word = "";
        score = 0;
        hangin = 0;
        removeSpans();
    }

}

//opens the file with the words and hints
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var categories = [
    [
        ["batman", ["lives in Gotham city", "he is the dark night", "secretly guys want to be like him"]],
        ["superman", ["he is a reporter", "the yellow light from the sun make him powerful", "he is the man of iron"]],
        ["wonderwoman", ["she is an amazon", "her name is Diana", "she is a feminist"]]
    ],
    [
        ["thejoker", ["his face has a creepy smile", "he has very dark humor", "his girlfriend is a harlequin"]],
        ["lexluthor", ["he hates superman", "is the ceo of his own Company", "IQ level of 17"]]

    ]];





