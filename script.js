'use strict';

// setting up the variables...
let userNumber;
let machineNumber;
let score = 20;
let highScore = 0;
let message;

// Generating a random number...
machineNumber = Math.trunc(Math.random() * 20 + 1);
console.log(machineNumber);

// Setting and getting the data...
function setMessage(message) {
	document.querySelector('#message').textContent = message;
}

function setScore(score) {
	document.querySelector('#score').textContent = score;
}

function setHighScore() {
	document.querySelector('#highscore').textContent = highScore;
}

function setResult(machineNumber) {
	document.querySelector('.hidden').textContent = machineNumber;
}

function getNumber() {
	userNumber = Number(document.querySelector('.input').value);
}

function setNumber() {
	document.querySelector('.input').value = '';
}

function setColor(color) {
	document.querySelector('.container').style.backgroundColor = color;
}

const video = document.querySelector('.video');

// Defining a method to compare user number and machine number...
function compareNumber() {
	if (score < 1) {
		setMessage('Game over! Play Again 🎮');
	} else if (!userNumber || userNumber < 1 || userNumber > 20) {
		setMessage('Invalid Number ⛔');
	} else {
		if (userNumber === machineNumber) {
			setMessage('You got the number! 🎉');
			setColor('#59a673');
			setResult(machineNumber);
			if (score > highScore) {
				highScore = score;
				setHighScore(highScore);
			}
		} else {
			score--;
			setScore(score);
			if (userNumber > machineNumber) {
				setMessage('Too high! ⬆️');
			} else {
				setMessage('Too Low! ↘️');
			}
		}
	}
}

// Using the .addEventListener method...
document.querySelector('.btn-check').addEventListener('click', function () {
	getNumber();
	compareNumber();
});

// Resetting the game back to its initial values...
document.querySelector('.try-area').addEventListener('click', function () {
	score = 20;
	message = 'Start Guessing 😁';
	machineNumber = Math.trunc(Math.random() * 20 + 1);
	console.log(machineNumber);
	setResult('?');
	setMessage(message);
	setScore(score);
	setNumber();
	setColor('#808080');
});
