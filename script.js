'use strict';

let gues = Math.trunc(Math.random() * 20) + 1;
let scoree = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);
  if (!userNumber) {
    document.querySelector('.message').textContent = '🤗Please Enter Number';
  } else if (userNumber < 1 || userNumber > 20) {
    document.querySelector('.message').textContent = '😫Enter between 1 - 20 ';
  } else if (userNumber !== gues) {
    if (scoree > 1) {
      scoree--;
      document.querySelector('.message').textContent =
        userNumber < gues
          ? 'Higher Then you Think😉😉😉'
          : 'Lower Then you Think😉😉😉';
      document.querySelector('.score').textContent = scoree;
    } else {
      document.querySelector('.message').textContent = 'You loose the game😥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#8b0000';
    }
  } else {
    document.querySelector('.message').textContent = 'CORRECT ANSWER 😍';
    document.querySelector('.number').textContent = gues;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < scoree) {
      highScore = scoree;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  scoree = 20;
  gues = Math.trunc(Math.random() * 20) + 1;
});
