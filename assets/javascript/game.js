//charges all the elements from the dom
window.onload = function () {
    var lettersPress = document.getElementById("lettersPress");
    var guessedWord = document.getElementById("guessedWord");
    var categoriesList = document.getElementById("categoriesList");


    //Global variables
    var totalWordLetters = 0;
    var words = [];
    var hints = [];
    var word = "_";

    //opens the file with the words and hints
    function categorieSelected(selection) {
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var file = JSON.parse(this.responseText);
            }
        };
        xhttp.open("GET", "./javascript/" + categoriesList.nodeValue + ".txt", true);
        xhttp.send();

    }



    //fill the arrays for the words and the hints


    //
    document.onkeyup = function (event) {
        var userKey = event.key;
        //only is the user press and alphabet letter
        if (alpahbet.contains(userKey)) {
            totalWordLetters++;
            lettersPress.textContent += userKey;
        }
    }

    function play() {
        word.forEach(element => {
            guessedWord.textContent += "-";
        });

        if (totalWordLetters === word.length) return;
    }

}

