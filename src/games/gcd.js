import {
  welcome,
  correctAnswer,
  wrongAnswer,
  getRandomExpression,
  questionAnswer,
  congratulations,
} from '../index.js';

const gcd = () => {
  const name = welcome();
  const gameStep = 3;
  let step = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (step < gameStep) {
    const number1 = getRandomExpression(100, 1);
    const number2 = getRandomExpression(100, 1);

    const userQA = questionAnswer(`${number1} ${number2}`);
    let currentGcd;
    const minNumber = number1 < number2 ? number1 : number2;

    for (let i = minNumber; i > 0; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        currentGcd = i;
        break;
      }
    }

    if (Number(userQA) !== currentGcd) {
      wrongAnswer(userQA, currentGcd, name);
      step = 0;
      break;
    } else {
      correctAnswer();
      step += 1;
    }
  }

  if (step === gameStep) {
    congratulations(name);
  }
};

export default gcd;
