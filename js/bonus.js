// display
var timerDisplay = document.getElementById('timer');
var resultDisplay = document.getElementById('result');
var numberInput = document.getElementById('number');
var alertDisplay = document.getElementById('alert');
var buttonPlay = document.getElementById('play');
var playAgain = document.getElementById('reset');


var numberValue = parseInt(numberInput.value);
console.log(numberValue);

// numeri generati
var arrayNumeri = [];

//numeri vincenti
var userArray = [];

//  tutte scelte utente
var userChoice = [];

// countdown
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


buttonPlay.addEventListener('click', function () {

    // alert nascosto
    alertDisplay.classList.add('hidden');


    var numberValue = numberInput.value;
    numberValue = parseInt(numberValue);

    console.log(numberValue);

    // validazione se è un numero

    if (numValidate(numberValue)) {
        //alert('Per favore inserire un numero!');
        alertDisplay.classList.remove('hidden');
        alertDisplay.innerText = 'Per favore inserire un numero!';
    }

    // controllo doppioni numeri inseriti da utente 
    if (userChoice.includes(numberValue)) {
        //alert('Numero già scelto riprovare!');
        alertDisplay.classList.remove('hidden');
        alertDisplay.innerText = 'Numero già scelto riprovare!';
    }

    console.log(userChoice);

    // push solo se scelta non ripetuta e se numero validato
    if (!userChoice.includes(numberValue) && !numValidate(numberValue)) {
        userChoice.push(numberValue);
        console.log(userChoice);
    }

    // push numeri indovinati in array numeri
    if (arrayNumeri.includes(numberValue)) {
        userArray.push(numberValue);
    }

    numberInput.value = ' ';

    //quando lista scelte utente == 5 mostrare risultato

    if (userChoice.length == 5) {
        //alert('Hai indovinato ' + userArray.length + ' numeri ' + userArray);
        timerDisplay.classList.add('hidden');
        resultDisplay.innerText = 'Hai indovinato ' + userArray.length + ' numeri.' + userArray;

        //nascondi bottone play perchè gioco finito
        buttonPlay.classList.add('hidden');
        playAgain.classList.remove('hidden');

    }

})

playAgain.addEventListener('click', function () {

    document.location.reload();



})


// countdown



var countdown = setInterval(function () {

    console.log(seconds--);
    timerDisplay.innerText = '00:' + seconds;

    if (seconds === 0) {
        clearInterval(countdown);
        timerDisplay.innerText = "Time's up, let's PLAY";
        buttonPlay.classList.remove('hidden');
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
    if (isNaN(num) || num <= 0 || num >= 100 || !num || num == " ") {
        isInvalid = true;
    }
    return isInvalid;
}


function askInfo() {
    var num = parseInt(prompt('Inserisci un numero'))
    return num;
}