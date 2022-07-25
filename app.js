const weight= document.querySelector('#weight');
const convertButton = document.querySelector('#submit');
const pounds = document.querySelector('#pounds');
const ounces = document.querySelector('#ounces');
const grams = document.querySelector('#grams');

parseFloat(weight.value).toFixed(2);

weight.focus();

function checkWeight(e){
  const userInput = Number(weight.value);

 pounds.value = userInput*2.2046;

 ounces.value = userInput*35.274;

 grams.value = userInput*1000;


 e.preventDefault();
}


convertButton.addEventListener('click', checkWeight);
