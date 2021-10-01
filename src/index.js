import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const correctAnswer = () => console.log('Correct!');

export const wrongAnswer = (wrong, correct, name) => console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);

export const getRandomExpression = (maxNumber, startNumber) => Math.floor(Math.random()
  * maxNumber + startNumber);

export const questionAnswer = (str) => {
  console.log(`Question: ${str}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export const congratulations = (name) => console.log(`Congratulations, ${name}!`);
