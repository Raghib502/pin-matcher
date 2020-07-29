const errorSection = document.getElementById('error');
const succeedSection = document.getElementById('succeed');

errorSection.style.display ='none';
succeedSection.style.display = 'none';

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min );
}
  
function randomValue() {
    document.getElementById('random-number').value = randomNumber(1000 , 9999);
  }
