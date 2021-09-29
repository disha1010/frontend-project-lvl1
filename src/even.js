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
    const realAnswer = number % 2 === 0 ? true : false;
    const yourAnswer = answer === 'yes' ? true : answer === 'no' ? false : null;

    if (yourAnswer === null || yourAnswer !== realAnswer) {
      wrongAnswer(answer, realAnswer ? 'yes' : 'no');
      break;
    } else {
      correctAnswer();
    }
  }

  if (step === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default even;
