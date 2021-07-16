/*
Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)


effettuato un diagramma invece degli step (mi sono trovato da DIO)

*/

// display
var timerDisplay = document.getElementById('timer');
var resultDisplay = document.getElementById('result');




// numeri generati
var arrayNumeri = [];

//numeri vincenti
var userArray = [];

//  tutte scelte utente
var userChoice = [];
var seconds = 30;





while (arrayNumeri.length < 5) {

    // Random numbers are generated
    var randomNumber = randomNumberGenerate(1, 100);


    if (!arrayNumeri.includes(randomNumber)) {
        // pushed in arrayNumeri only if different
        arrayNumeri.push(randomNumber);
    }
}

// alert on page

alert('I tuoi 5 numeri sono: ' + arrayNumeri);

// timeout 30 sec
var game = setTimeout(function () {

    for (i = 0; i < arrayNumeri.length; i++) {
        // validazione se è un numero
        do {
            var userNumber = askInfo();
            if (numValidate(userNumber)) {
                alert('Per favore inserire un numero!');
            }
            if (userChoice.includes(userNumber)) {
                alert('Numero già scelto riprovare!');
            }

        } while (numValidate(userNumber) || userChoice.includes(userNumber));



        // push scelte utente per controllo doppioni
        userChoice.push(userNumber);


        // push numeri vincenti
        if (arrayNumeri.includes(userNumber)) {
            userArray.push(userNumber);
        }

    }

    //alert('Hai indovinato ' + userArray.length + ' numeri ' + userArray);
    resultDisplay.innerText = 'Hai indovinato ' + userArray.length + ' numeri.' + userArray;

}, 30500);


// countdown



var countdown = setInterval(function () {

    console.log(seconds--);
    timerDisplay.innerText = '00:' + seconds;

    if (seconds === 0) {
        clearInterval(countdown);
        timerDisplay.innerText = "Time's up";
    }
}, 1000);

// FUNCTION

// Generate random number 
function randomNumberGenerate(min, max) {
    return Math.floor(Math.random() * max - min + 1) + 1;
}

// number validate

function numValidate(num) {
    var isInvalid = false;
    if (isNaN(num) || num <= 0 || num > 100 || !num || num == " ") {
        isInvalid = true;
    }
    return isInvalid;
}


function askInfo() {
    var num = parseInt(prompt('Inserisci un numero'))
    return num;
}