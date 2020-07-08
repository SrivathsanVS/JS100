let rlsync = require('readline-sync')

function ex_2(num) {
  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
