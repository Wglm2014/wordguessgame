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
var selectedValue = -1;
var totalWordLetters = 0;
var letterFound = "";
var score = 0;
var chances = 11;
var hangin = 0;
var wordArray = [];

function onSelection() {
    selectedValue = parseInt(categoriesList.value);
    resetVars(true);
}

function play() {
    if (selectedValue === -1) { return alert("Please choose a category"); }
    resetVars(true);
    words = categories[selectedValue];
    var number = Math.floor(Math.random() * words.length);
    word = words[number][0];
    hints = words[number][1];
    wordArray = word.split("");

    //creates the boxes to be replace with the letters of the word to be guessed
    for (var i = 0; i < wordArray.length; i++) {
        var span = document.createElement("span");
        span.setAttribute("id", "Span" + i);
        span.setAttribute("class", "border");
        span.textContent = "__";
        guessedWord.appendChild(span);
    };
    hint.textContent = hints[Math.floor(Math.random() * hints.length)];
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

        //find if the pressed key  exists in the random word
        if (word.includes(userKey)) {
            console.log(score);

            //searches all the events where the letter exists inside of the array
            for (var i = 0; i < wordArray.length; +i++) {
                if (wordArray[i] === userKey) {
                    totalWordLetters++;

                    letterFound = document.getElementById("Span" + i);
                    letterFound.textContent = userKey;
                }
            }
            console.log(totalWordLetters);
            // if the total words letters equals the lenght scores
            if (totalWordLetters === word.length) {
                score++;
                gameScore.textContent = score;
                // if score is 10 he won the whole match
                if (score === 3) {
                    song.currentTime = 0;
                    setTimeout(function () { song.play() }, 3000);
                    song.pause();
                    reset(true);
                }
            }

        } else {
            if (chances === hangin) {
                alert("Lost this one!!!");
                setTimeout(function () { resetVars(true) }, 3000);
            } else {
                hangin++;
                var source = "./assets/images/hangman" + hangin + ".jpg";
                image.src = source;
            }

        }

    }
}

function keepPlaying() {
    var again = confirm("Keep playing?");
    if (again === 1) {
        resetVars(true);
        play();

    } else {
        resetVars(true);
    }
}


//reset all variables
function resetVars(partial) {
    hint.textContent = "";
    selectedValue = categoriesList.value;
    totalWordLetters = 0;
    words = [];
    hints = [];
    word = "";
    letterFound = "";
    hangin = 0;
    guessedWord.textContent = "";
    lettersPress.textContent = "";
    image.src = "./assets/images/hangman0.jpg";
    if (!partial) {
        categoriesList.value = "-1";
        selectedValue = -1;
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





