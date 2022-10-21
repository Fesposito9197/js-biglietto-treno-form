// prendo i valori di nome cognome km eta 
const genera = document.getElementById('genera');

genera.addEventListener('click' , function( ){
    const passangerInfo = document.getElementById('nome-passeggero').value;
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
    } else if (passangerInfo=="over65"){
        ticketPrice-= ticketPrice * 0.4
        document.getElementById("offerta").innerHTML = "Offerta silver"
    }
})
