import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, getRandomExpression } from '../index.js';

const operators = ['+', '-', '*'];

const calc = () => {
  const number1 = getRandomExpression(100, 1);
  const number2 = getRandomExpression(100, 1);
  const operatorIndex = getRandomExpression(operators.length, 0);
  const operator = operators[operatorIndex];
  let realAnswer;

  console.log(`Question: ${number1} ${operator} ${number2}`);
  const yourAnswer = readlineSync.question('Your answer: ');

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

  if (Number(yourAnswer) !== realAnswer) {
    wrongAnswer(yourAnswer, realAnswer);
  } else {
    correctAnswer();
  }
};

export default calc;
