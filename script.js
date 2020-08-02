// Hide notify-section.

const errorSection = document.getElementById('error');
const succeedSection = document.getElementById('succeed');

errorSection.style.display ='none';
succeedSection.style.display = 'none';

// Random number generate.

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min );
}
  
function randomValue() {
    document.getElementById('random-number').value = randomNumber(1000 , 9999);
    succeedSection.style.display = 'none';
    errorSection.style.display ='none';
}


// Input button , clear and backspace.

function inputBtn(val) 
   { 
       document.getElementById("result").value+=val ;
} 

function clr(){ 
    document.getElementById("result").value = "" ;
} 

const screenView = document.getElementById("result");
function backSpace(){
  
  screenView.value = screenView.value.slice(0, - 1);
}


// Submit function.

document.querySelector('.submit-btn').addEventListener('click', function(){
    const pinNumber = document.getElementById('random-number').value;
    const submitNumber = document.getElementById('result').value;
    if (pinNumber == submitNumber) {
        succeedSection.style.display ='block';
        errorSection.style.display ='none';
        document.getElementById('result').value = "";
    }
    else if(pinNumber != submitNumber){
        errorSection.style.display ='block';
        succeedSection.style.display = 'none';
        document.getElementById('result').value = "";
    }
    else{
        errorSection.style.display ='none';
        succeedSection.style.display = 'none';
    }
});