let rlsync = require('readline-sync')

function ex_1() {
  console.log("false"); // correct
  console.log("true"); // correct
  console.log("true"); // wrong: 3
  console.log("3"); // correct
  console.log("false"); // correct
  console.log("true"); // correct
  console.log("false"); // correct
  console.log("false"); // correct
  console.log("false"); // correct
  console.log("true"); // correct
  console.log("false"); // correct
  console.log("true");
}

function ex_2_3(num) {
  if (typeof num !== 'Number') {
    throw new Error('Input is not a number');
  }
  return (num % 2 == 0) ? "even" : "odd";
}

function ex_7(string) {
  return (string.length > 10) ? string.toUpperCase() : string;
}

function ex_8(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else {
    console.log(`${num} is less than 0`);
  }
}
