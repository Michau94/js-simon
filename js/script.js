/*
Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)

*/



var arrayNumeri = [];



while (arrayNumeri.length < 5) {

    // Random numbers are generated
    var randomNumber = randomNumberGenerate(1, 100);


    if (!arrayNumeri.includes(randomNumber)) {
        // pushed in arrayNumeri only if different
        arrayNumeri.push(randomNumber);
    }
}











// FUNCTION

// Generate random number 
function randomNumberGenerate(min, max) {
    return Math.floor(Math.random() * max - min + 1) + 1;
}