// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
// Categoria selezionata dall'utente
// Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.

// Funzioni generateButton
// Quando si fa click su generate button comprare il div con il biglietto
var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function() {
    // Far apparire il div quando si fa click
    var ticketVisibleElement = document.getElementById('ticket-visible');
    ticketVisibleElement.className = ticketVisibleElement.classList + ' visible';

    // Prendere il nome dalla value dell'input ticket-generator-name e stamparla in ticket-user-name
    var ticketGeneratorNameElement = document.getElementById('ticket-generator-name');
    var userName = ticketGeneratorNameElement.value;
    console.log(userName);

    document.getElementById('ticket-user-name').innerHTML = userName;

    // Prendere la categoria del biglietto dal value del select ticket-generator-age e stamparla in ticket-user-offer
    var ticketGeneratorAgeElement = document.getElementById('ticket-generator-age');
    var userOfferValue = ticketGeneratorAgeElement.value;
    console.log(userOfferValue);

    var userOffer = 'Prezzo base';
    if(userOfferValue == 'minorenne') {
        userOffer = 'Sconto Minorenni';
    } else if ( userOfferValue == 'over' ) {
        userOffer = 'Sconto Silver';
    }
    console.log(userOffer);

    document.getElementById('ticket-user-offer').innerHTML = userOffer;

    // Generare random number da 1 a 9 per la carrozza e stamparlo in ticket-user-number
    var randomNumberCarrozza = randomNumber(1, 10);
    console.log(randomNumberCarrozza);

    document.getElementById('ticket-user-number').innerHTML = randomNumberCarrozza;

    // Generare random number tra 90000 e 100000 escluso per il codice treno e stamparlo in ticket-user-code
    var randomNumberTrain = randomNumber(90000, 100000);
    console.log(randomNumberTrain);

    document.getElementById('ticket-user-code').innerHTML = randomNumberTrain;

    // Prendere i km dalla value dell'input ticket-generator-km trasformarli in numero, calcolare il prezzo e stamparlo in ticket-user-price
    var ticketGeneratorKmElement = document.getElementById('ticket-generator-km');
    var userKm = ticketGeneratorKmElement.value;
    console.log(userKm);

});

// Funzioni cancelButton
// Quando si fa click su cancelButton il div scompare e si resettano i valori del form
var cancelButton = document.getElementById('cancel-button');
cancelButton.addEventListener( 'click', function() {
    // Far sparire il div quando si fa click
    var ticketVisibleElement = document.getElementById('ticket-visible');
    ticketVisibleElement.className = ticketVisibleElement.classList + ' invisible';

    // Resettare i valori del form quando si fa click
    var ticketGeneratorNameElement = document.getElementById('ticket-generator-name');
    ticketGeneratorNameElement.value = '';

    var ticketGeneratorAgeElement = document.getElementById('ticket-generator-age');
    ticketGeneratorAgeElement.value = '' ;

    var ticketGeneratorKmElement = document.getElementById('ticket-generator-km');
    ticketGeneratorKmElement.value = '' ;
} );


// Funzione RandomNumber
// Funzione che genera un numero casuale con un minimo e un massimo (il massimo è escluso)
// 
// min -> numero intero che rappresenta il minimo numero generabile
// max -> numero intero che rappresenta il massimo numero generabile (il massimo è escluso)
// 
// return: random number tra min e max (max escluso)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }