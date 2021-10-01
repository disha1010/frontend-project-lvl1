import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
let step = 0;
let isCorrect = true;

export const correctAnswer = () => {
  console.log('Correct!');
  isCorrect = true;
  step += 1;
};

export const wrongAnswer = (wrong, correct) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
  isCorrect = false;
  step = 0;
};

export const getRandomExpression = (maxNumber, startNumber) => Math.floor(Math.random()
  * maxNumber + startNumber);

const games = {
  calc: {
    gameQuestion: () => console.log('What is the result of the expression?'),
    gameFunction: calc,
  },
  even: {
    gameQuestion: () => console.log('Answer "yes" if the number is even, otherwise answer "no".'),
    gameFunction: even,
  },
};

export const gameSkeleton = (gameName) => {
  const gameStep = 3;

  const switchByGameName = (exp1, exp2) => {
    switch (gameName) {
      case 'calc':
        exp1();
        break;
      case 'even':
        exp2();
        break;
      default:
        break;
    }
  };

  console.log(`Hello, ${name}!`);
  switchByGameName(games.calc.gameQuestion, games.even.gameQuestion);

  while (step < gameStep && isCorrect) {
    switchByGameName(games.calc.gameFunction, games.even.gameFunction);
  }

  if (step === gameStep) {
    console.log(`Congratulations, ${name}!`);
  }
};
