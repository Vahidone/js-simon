
// selezionare gli elementi che ci servono 

const outputResult = document.querySelector('.print-result');
const casualNumbers = document.querySelector('.casual-numbers');
const bottone = document.querySelector('.bottone');

let casualNumbersArray = [];
let guessNumbers = [];

for (i = 0; i < 5; i++) {
  const numeroCasuale = Math.floor(Math.random() * 50) + 1;
  casualNumbersArray.push(numeroCasuale);
  casualNumbers.innerHTML += numeroCasuale + '  ';
}

bottone.addEventListener('click', function (){

  location.reload();
});

setTimeout(function () {

  casualNumbers.innerHTML = '';
  

  for (i = 0; i < 5; i++) {
    const numberUser = parseInt(prompt('inserisci un numero' + (i + 1)));
    guessNumbers.push(numberUser);
  }

  let correctNumber = 0;
  for (i = 0; i < casualNumbersArray.length; i++) {
    const numeroCasuale = casualNumbersArray[i];
    
    if (guessNumbers.includes(numeroCasuale)) correctNumber++;
  }
  
  let risultato = 'hai indovinato' + ' ' + correctNumber + ' ' + 'numeri' + ' ' + ' ' + ':';
  for (i = 0; i < guessNumbers.length; i++) {
    const numberUser = guessNumbers[i];
    if (casualNumbersArray.includes(numberUser)) {
      risultato += numberUser + ' ';
    }
  }
  
  outputResult.textContent = risultato;


}, 5000);


