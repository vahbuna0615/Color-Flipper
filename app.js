const colors = ["green", "red", "blue", "yellow", "orange", "violet"];

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn-2');
const color = document.querySelector('.color');

btn2.addEventListener('click', () => {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  //Math.random generates random number between 0-1, 
  //multiplying length of colors array with ran.number gives val between 0-(len-1)
  //Math.floor rounds down decimals to nearest whole number - eg. 0.98 -> 0
  return Math.floor(Math.random() * colors.length);
};

let nextNumber = 0;

btn.addEventListener('click', () => {
    nextNumber++;
    if (nextNumber == colors.length){
      nextNumber = 0; 
    }
    document.body.style.backgroundColor = colors[nextNumber];
    color.textContent = colors[nextNumber];
});
