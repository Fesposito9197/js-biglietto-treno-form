// prendo i valori di nome cognome km eta 
const genera = document.getElementById('genera');

genera.addEventListener('click' , function( ){
    const passangerInfo = document.getElementById('nome').value;
    console.log(passangerInfo);
    const passangerKm = document.getElementById('km-passeggero').value;
    console.log(passangerKm);
    const passangerAge = document.getElementById('age').value;
    console.log(passangerAge);

    // Calcolo biglietto
    let ticketPrice = passangerKm * 0.21;
    console.log(ticketPrice)

    // se eta < 18 appliccare il 20%
    // se eta >= 65 appliccare il 40%
    if(!isNaN (passangerInfo) || passangerKm < 0 ){
        alert("inserisci i dati corretti")
    } else if (passangerAge=="minorenne"){
        ticketPrice -= ticketPrice * 0.2
        document.getElementById("offerta").innerHTML = "Offerta young"
        document.getElementById("biglietto").className=("show-ticket")
    } else if (passangerAge=="over65"){
        ticketPrice-= ticketPrice * 0.4
        document.getElementById("offerta").innerHTML = "Offerta silver"
        document.getElementById("biglietto").className=("show-ticket")

    } else {
        ticketPrice = ticketPrice
        document.getElementById("offerta").innerHTML = "offerta standard"
        document.getElementById("biglietto").className=("show-ticket")

    }

    // genero il numero carrozza e il codice cp
    const carrozza = Math.floor(Math.random() * 10) + 1;
    const codice = Math.floor(Math.random() * 9999) + 90000;
    console.log(carrozza)
    console.log(codice)

   
    

    // biglietto completo
    document.getElementById("nome-passeggero").innerHTML = passangerInfo
    document.getElementById("carrozza").innerHTML = carrozza
    document.getElementById("codice").innerHTML = codice
    document.getElementById("costo").innerHTML = ticketPrice.toFixed(2) + "€"
});


// tasto annulla

const annulla = document.getElementById("annulla")

annulla.addEventListener("click", function(){
    document.getElementById("nome").value = ""
    document.getElementById("km-passeggero").value = ""
    document.getElementById("biglietto").className=("d-none")

})

