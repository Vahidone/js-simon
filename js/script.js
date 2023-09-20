
// selezionare gli elementi che ci servono 
const casualNumbers = document.querySelector('.casual-numbers');
const outputResult = document.querySelector('.print-result');


let casualNumbersArray = [];
let guessNumbers = [];

for (i = 0; i < 5; i++) {
  const numeroCasuale = Math.floor(Math.random() * 50) + 1;
  casualNumbersArray.push(numeroCasuale);
  casualNumbers.innerHTML += numeroCasuale + '  ';
}


setTimeout(function () {

  casualNumbers.textContent = '';

  for (i = 0; i < 5; i++) {
    const numberUser = parseInt(prompt('inserisci un numero' + (i + 1)));
    guessNumbers.push(numberUser);
  }

  let correctNumber = 0;
  for (i = 0; i < casualNumbersArray.length; i++) {
    const numeroCasuale = casualNumbersArray[i];
    
    if (guessNumbers.includes(numeroCasuale)) correctNumber++;
  }
  
  let risultato = 'hai indovinato' + correctNumber + 'numeri';

 

}, 5000);


