'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let message = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message(' 👩‍🦰 No number');
  } else if (guess === number) {
    message('correct number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      guess > number ? message('too long') : message('too short');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('you lost');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'guess number';
});
