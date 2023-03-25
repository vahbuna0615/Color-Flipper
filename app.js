const colors = ["green", "red", "blue", "yellow", "orange", "violet"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  console.log(document.body);
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(){
  //Math.random generates random number between 0-1, 
  //multiplying length of colors array with ran.number gives val between 0-3
  //Math.floor rounds down decimals to nearest whole number - eg. 0.98 -> 0
  return Math.floor(Math.random() * colors.length);
}