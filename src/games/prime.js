import {
  welcome,
  correctAnswer,
  wrongAnswer,
  getRandomExpression,
  questionAnswer,
  congratulations,
} from '../index.js';

const prime = () => {
  const name = welcome();
  const gameStep = 3;
  let step = 0;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  while (step < gameStep) {
    const number = getRandomExpression(100, 1);
    let isPrime = true;

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    const userQA = questionAnswer(number);
    const yourAnswer = (userQA === 'yes' || userQA === 'no') ? userQA === 'yes' : null;

    if (yourAnswer === null || yourAnswer !== isPrime) {
      wrongAnswer(userQA, isPrime ? 'yes' : 'no', name);
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

export default prime;
