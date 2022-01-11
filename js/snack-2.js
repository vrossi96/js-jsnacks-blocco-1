console.log('JS ok');
const risultato = document.getElementById("risultato");

//! Secondo esercizio

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


const firstWord = prompt('Inserisci la prima parola').trim();
const secondWord = prompt('Inserisci la seconda parola').trim();
console.log(firstWord, secondWord);

let result = firstWord + ' ' + secondWord;
if (firstWord.length === 0 || secondWord.length === 0) {
  result = 'Devi inserire due parole';
}else {
  if (firstWord.length > secondWord.length) {
   result = secondWord + ' ' + firstWord;
  }
}

console.log(result);

risultato.innerText = result;