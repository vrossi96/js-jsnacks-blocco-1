console.log('JS ok');
const risultato = document.getElementById("risultato");

//! Terzo esercizio

//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


/* Con array

const allNumbers = [];

let anyNumber = 0;
for (let i = 0; i < 10; i++) {
  anyNumber = parseInt(prompt('Inserisci un numero', 5));
  if (!isNaN(anyNumber)) {
    allNumbers.push(anyNumber);
  }
}

console.table(allNumbers);

let sum = 0;
for (let i = 0; i < allNumbers.length; i++) {
  sum += allNumbers[i];
}

*/
let sum = 0;
for (let i = 0; i < 10; i++){
  number = parseInt(prompt('Inserisci un numero', 5))
  if (isNaN(number)) {
    console.log('Numero non valido');
  } else {
    sum += number;
  }
}

console.log(sum);
risultato.innerText = sum;





