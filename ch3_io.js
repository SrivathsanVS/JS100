let rlsync = require('readline-sync')

function ex_1() {
  let name = rlsync.question('What is your name?');
  console.log(`Hello, ${name}!`);
}

function ex_2() {
  let firstName = rlsync.question('What is your first name?');
  let lastName = rlsync.question('What is your last name?');
  console.log(`Hello, ${firstName} ${lastName}!`);
}

function ex_3() {
  let curr_age = Number(rlsync.question('How old are you?'));
  let year_inc = 10;
  console.log(`You are ${curr_age} years old.`)
  for (let i = 0; i < 4; i++) {
    console.log(`In ${year_inc} years, you will be ${curr_age + year_inc} years old.`);
    year_inc += 10;
  }
}
