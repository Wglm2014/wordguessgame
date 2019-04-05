//charges all the elements from the dom
var lettersPress = document.getElementById("lettersPress");
var guessedWord = document.getElementById("guessedWord");
var categoriesList = document.getElementById("categoriesList");
var hint = document.getElementById("hint");

//Global variables
var totalWordLetters = 0;
var words = [];
var hints = [];
var word = "";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
document.onkeyup = function (event) {
    if (totalWordLetters === word.length) return;
    var userKey = event.key;
    //only is the user press and alphabet letter
    if (alphabet.includes(userKey)) {
        totalWordLetters++;
        lettersPress.textContent += userKey;
    }
}

function play() {
    var number = Math.floor(Math.random() * words.length);
    word = words[number][0];
    hints = words[number][1];
    console.log(word);
    var wordArray = word.split("");
    console.log(wordArray.length);
    wordArray.forEach(element => {
        console.log(guessedWord);
        var span = document.createElement("span");
        span.setAttribute("id", element + "Span");
        span.setAttribute("class", "border");
        span.textContent = "__";
        guessedWord.appendChild(span);
    });

    hint.textContent = hints[Math.floor(Math.random() * hints.length)];

    if (totalWordLetters === word.length) return;
}

//opens the file with the words and hints
function categorySelected(selection) {
    words = categories[selection];
    word = '';
    hints = [];
    hint.textContent = "";
    guessedWord.textContent += "";

}


var categories = [
    [
        ["batman", ["lives in Gotham city", "he is the dark night", "secretly guys want to be like him"]],
        ["superman", ["he is a reporter", "the yellow light from the sun make him powerful", "he is the man of iron"]],
        ["wonder woman", ["she is an amazon", "her name is Diana", "she is a feminist"]]
    ],
    [
        ["the joker", ["his face has a creepy smile", "he has very dark humor", "his girlfriend is a harlequin"]],
        ["lex luthor", ["he hates superman", "is the ceo of his own Company", "IQ level of 17"]]

    ]];





