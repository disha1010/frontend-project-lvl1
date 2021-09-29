import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
let step = 0;

const correctAnswer = () => {
  console.log('Correct!');
  step += 1;
};

const wrongAnswer = (wrong, correct) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
  step = 0;
};

const even = () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (step < 3) {
    const number = Math.floor(Math.random() * 10 + 1);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes') {
      if (number % 2 === 0) {
        correctAnswer();
      } else {
        wrongAnswer('yes', 'no');
        break;
      }
    } else if (answer === 'no') {
      if (number % 2 !== 0) {
        correctAnswer();
      } else {
        wrongAnswer('no', 'yes');
        break;
      }
    } else {
      wrongAnswer(answer, 'yes or no');
      break;
    }
  }

  if (step === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default even;
