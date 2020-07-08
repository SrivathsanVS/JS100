let rlsync = require('readline-sync')

function ex_1() {
  console.log("Executing function foo has no bearing on output");
}

function ex_2() {
  let user_input = string_name => {return rlsync.question(`What is your ${string_name}?`)};
  firstName = user_input("first name");
  lastName = user_input("last name");
  console.log(`Hello, ${firstName} ${lastName}!`);
}

function ex_3() {
  multiplicator = rlsync.question('Enter multiplicator: ');
  multiplicand = rlsync.question('Enter multiplicand: ');
  result = Number(multiplicand) * Number(multiplicator);
  console.log(`${multiplicator} x ${multiplicand} = ${result}`);
}

function ex_4() {
  function factorial(num) {
    if (num === 1) {
      return 1;
    } else {
    return num * factorial(num - 1);
    }
  }
  for (let i = 0; i < 5; i++) {
    console.log(factorial(i + 1));
  }
}

function ex_5() {
  console.log('Expected to return undefined');
}

function ex_6() {
  console.log('Expected to return Yipeee!!!');
}
