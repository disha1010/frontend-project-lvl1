import {
  welcome,
  correctAnswer,
  wrongAnswer,
  getRandomExpression,
  questionAnswer,
  congratulations,
} from '../index.js';

const calc = () => {
  const name = welcome();
  const gameStep = 3;
  const operators = ['+', '-', '*'];
  let step = 0;

  console.log('What is the result of the expression?');

  while (step < gameStep) {
    const number1 = getRandomExpression(100, 1);
    const number2 = getRandomExpression(100, 1);
    const operatorIndex = getRandomExpression(operators.length, 0);
    const operator = operators[operatorIndex];
    let realAnswer;

    const userQA = questionAnswer(`${number1} ${operator} ${number2}`);

    switch (operator) {
      case '+':
        realAnswer = number1 + number2;
        break;
      case '-':
        realAnswer = number1 - number2;
        break;
      case '*':
        realAnswer = number1 * number2;
        break;
      default:
        break;
    }

    if (Number(userQA) !== realAnswer) {
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
};

export default calc;
