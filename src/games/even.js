import {
  welcome,
  correctAnswer,
  wrongAnswer,
  getRandomExpression,
  questionAnswer,
  congratulations,
} from '../index.js';

const even = () => {
  const name = welcome();
  const gameStep = 3;
  let step = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (step < gameStep) {
    const number = getRandomExpression(100, 1);

    const userQA = questionAnswer(number);

    const realAnswer = number % 2 === 0;
    const yourAnswer = (userQA === 'yes' || userQA === 'no') ? userQA === 'yes' : null;

    if (yourAnswer === null || yourAnswer !== realAnswer) {
      wrongAnswer(userQA, realAnswer ? 'yes' : 'no', name);
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

export default even;
