import {
  welcome,
  correctAnswer,
  wrongAnswer,
  getRandomExpression,
  questionAnswer,
  congratulations,
} from '../index.js';

const progression = () => {
  const name = welcome();
  const gameStep = 3;
  let step = 0;

  console.log('What number is missing in the progression?');

  while (step < gameStep) {
    const progressionLength = getRandomExpression(10, 5);
    const numberPosition = getRandomExpression(progressionLength, 0);
    let currentNumber = getRandomExpression(100, 0);
    const progressionStep = getRandomExpression(10, 1);
    const arithmeticProgression = [currentNumber];

    for (let i = 1; i < progressionLength; i += 1) {
      currentNumber += progressionStep;
      arithmeticProgression.push(currentNumber);
    }

    const realAnswer = arithmeticProgression[numberPosition];

    arithmeticProgression[numberPosition] = '..';

    const userQA = questionAnswer(arithmeticProgression);

    if (realAnswer !== Number(userQA)) {
      wrongAnswer(userQA, realAnswer, name);
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
}

export default progression;