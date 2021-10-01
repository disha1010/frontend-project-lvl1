import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, getRandomExpression } from '../index.js';

const even = () => {
  const number = getRandomExpression(100, 1);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const realAnswer = number % 2 === 0;
  const yourAnswer = (answer === 'yes' || answer === 'no') ? answer === 'yes' : null;

  if (yourAnswer === null || yourAnswer !== realAnswer) {
    wrongAnswer(answer, realAnswer ? 'yes' : 'no');
  } else {
    correctAnswer();
  }
};

export default even;
