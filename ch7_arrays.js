let rlsync = require('readline-sync')

function ex_1() {
  console.log(4, 5, 0, 3, 101);
}

function ex_2(arr) {
  arr.forEach(element => {
    if (element % 2 == 0) {
      console.log(element);
    }})
}

function ex_3(arr) {
  sub_iterator = sub_arr => sub_arr.forEach(element => {
    if (element % 2 == 0) {
      console.log(element);
    }});
  arr.forEach(sub_iterator);
}

function ex_4(arr) {
  return arr.map(element => ((element % 2 == 0) ? 'even' : 'odd'));
}

function ex_5(arr) {
  return arr.filter(element => Number.isInteger(element));
}

function ex_6(arr) {
  return arr.map(element => element.length).filter(element => (element % 2))
}

function ex_7(arr) {
  return arr.reduce((accumulator, element) => accumulator + element * element, 0);
}

function ex_8(arr) {
  return arr.reduce(function(accumulator, element) {
    if (element.length % 2 == 1) {
      accumulator.push(element.length);
    }
    return accumulator;
  }, Array(0))
}

function ex_9(arr) {
  return arr.filter(element => (element === 3)).length > 0;
}

function ex_10() {
  let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
  return arr[1][2];
}
