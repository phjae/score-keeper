const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const scr1 = document.querySelector('.scr1');
const scr2 = document.querySelector('.scr2');

const round = document.querySelector(".round");

let count1 = 0;
let count2 = 0;
let winningScore = 3;
let gameOver = false;

btn1.addEventListener('click', () => {
  if (!gameOver) {
    count1 += 1;
    if (count1 === winningScore) {
      gameOver = true;
      btn1.classList.add('disabled');
      btn2.classList.add('disabled');
    }
    scr1.textContent = count1;
  }
  winner();
});

btn2.addEventListener('click', () => {
  if (!gameOver) {
    count2 += 1;
    if (count2 === winningScore) {
      gameOver = true;
      btn1.classList.add('disabled');
      btn2.classList.add('disabled');
    }
    scr2.textContent = count2;
  }
  winner();
});

round.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  reset();
})

btn3.addEventListener('click',reset);

function reset() {
  gameOver = false;
  count1 = 0;
  count2 = 0;
  scr1.textContent = 0;
  scr2.textContent = 0;
  scr1.classList.remove('winner', 'loser');
  scr2.classList.remove('winner', 'loser');
  btn1.classList.remove('disabled');
  btn2.classList.remove('disabled');
}

function winner() {
  if (gameOver){
    if (count1 === winningScore) {
      scr1.classList.add('winner');
      scr2.classList.add('loser');
    } else if (count2 === winningScore) { 
      scr1.classList.add('loser');
      scr2.classList.add('winner');
    }
  }
}