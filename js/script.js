
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

  casualNumbers.innerHTML = '';

  for (i = 0; i < 5; i++) {
    const numberUser = parseInt(prompt('inserisci un numero' + (i + 1)));
    guessNumbers.push(numberUser);
    
    

  }


}, 5000);


