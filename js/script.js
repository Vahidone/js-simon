
//  selezionare gli elementi  

const outputResult = document.querySelector('.print-result');
const casualNumbers = document.querySelector('.casual-numbers');
const bottone = document.querySelector('.bottone');

// creare gle array  per numeri casuali e indovinati 
let casualNumbersArray = [];
let guessNumbers = [];

// generare i numeri casuali 
for (i = 0; i < 5; i++) {
  const numeroCasuale = Math.floor(Math.random() * 50) + 1;
  casualNumbersArray.push(numeroCasuale);
}
casualNumbers.innerHTML = casualNumbersArray.join(', ');

// aggiungere al bottone una funzione di reset ** (wip) **
bottone.addEventListener('click', function (){

  location.reload();
});

// fare reset dopo 3 secondi per casualNumbers 
setTimeout(resetPlay, 3000);
function resetPlay () {
  casualNumbers.innerHTML = ' ';
};


// creare setTime per cominciare il gioco di 3,5 secondi 
setTimeout(startPlay, 3100);

  function startPlay () {
     // creare i 5 prompt  
  for (i = 0; i < 5; i++) {
    const numberUser = parseInt(prompt('inserisci un numero' + (i + 1)));
    guessNumbers.push(numberUser);
  }

  // controllare quanti numeri indovinati sono corretti 
  let correctNumber = 0;
  for (i = 0; i < casualNumbersArray.length; i++) {
    const numeroCasuale = casualNumbersArray[i];
    
    if (guessNumbers.includes(numeroCasuale)) correctNumber++;
  }
  
  // individuare quali numeri sono stati indovinati e stamparli in campo del risultato 
  let risultato = 'hai indovinato' + ' ' + correctNumber + ' ' + 'numeri' + ' ' + ':';
  for (i = 0; i < guessNumbers.length; i++) {
    const numberUser = guessNumbers[i];
    if (casualNumbersArray.includes(numberUser)) {
      risultato += numberUser + ' ';
    }
  }

    // stampare il risultato 
    outputResult.textContent = risultato;
  };
  





