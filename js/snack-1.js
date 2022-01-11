console.log('JS ok');
const risultato = document.getElementById("risultato");

//! Primo esercizio

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


const firstNumber = parseInt(prompt('Inserisci il primo numero'));
const secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log(firstNumber, secondNumber);

//# Secondo metodo con validazione
let result = `I numeri ${firstNumber} e ${secondNumber} sono uguali`;
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  result = `Uno dei valori non è valido`
} else { 
  if (firstNumber > secondNumber) {
    result = `Primo numero ${firstNumber} è maggiore`;
  } else if (firstNumber < secondNumber) {
    result = `Secondo numero ${secondNumber} è maggiore`;
  }
}

console.log(result);

risultato.innerText = result;
