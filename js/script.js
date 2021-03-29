// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
// Categoria selezionata dall'utente
// Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.

// Funzioni generateButtonElement
// Quando si fa click su generate button comprare il div con il biglietto
var generateButtonElement = document.getElementById('generate-button');
generateButtonElement.addEventListener('click', function() {
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

});