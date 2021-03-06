//INPUT

//chiedo all'utente quanti km dovrà percorrere
var askKm = parseInt(prompt("Quanti km dovrai percorrere?"));
console.log("Km", askKm);

//chiedo all'utente quanti anni ha
var askAge = parseInt(prompt("Quale è la tua età?"));
console.log("Età", askAge);


//OPERAZIONI

 //calcolo prezzo biglietto
var ticketPrice = (askKm * 0.21);

//calcolo biglietto con sconto 20%
var discount20 = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);

//calcolo biglietto con sconto 40%
var discount40 = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);


// OUTPUT

// stabilire il costo biglietto e se spetta lo sconto
if (askAge < 18) {
//prezzo con sconto underAged
document.getElementById("prezzo-biglietto").innerHTML = "Il totale del biglietto con lo sconto minorenni è di " + discount20 + " euro";
console.log("prezzo scontato under 18 è", discount20);
}
else if (askAge > 65) {
//sconto over65 
document.getElementById("prezzo-biglietto").innerHTML = "Il totale del biglietto con lo sconto over 65 è di " + discount40 + " euro";
console.log("prezzo scontato over 65 è", discount40);
}
else { 
//nessuno sconto
document.getElementById("prezzo-biglietto").innerHTML = "Il totale del biglietto è di " + ticketPrice + " euro";
console.log("prezzo biglietto", ticketPrice);
}


  
   