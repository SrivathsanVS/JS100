function ex_1() {
  return 'John' + ' ' + 'Doe';
}

function ex_2(num) {
  let tenth_power = 1;
  while (parseInt(num / tenth_power) > 10) {
    tenth_power = tenth_power * 10;
  }
  console.log("Tenth power is " + tenth_power);
  while (num > 0) {
    console.log(parseInt(num / tenth_power));
    num = (num % tenth_power);
    tenth_power = (tenth_power / 10);
  }
}

function ex_3(variable) {
  answers = {
    'true': 'string',
    'false': 'boolean',
    '1.5': 'Number',
    '2': 'Number',
    'undefined': 'undefined',
    'foo_bar': 'object'
  }
  return answers[variable]
}

function ex_4() {
  console.log('var foo; is a statement');
  console.log('foo = 5; is an expression');
  console.log('foo; is an expression');
}

function ex_5() {
  console.log('The given expression involves implicit coercion of the 10 to String type, that results in the eventual string concatenated result.')
}

function ex_6() {
  return Number('5') + 10;
}

function ex_7() {
  console.log(`The value of 5 + 10 is ${Number('5') + 10}`);
}

function ex_8() {
  console.log('Arrays are zero-indexed, an undefined object is returned')
}

function ex_9() {
  names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
  return names;
}

function ex_10() {
  let pets = {
    'asta': 'dog',
    'butterscotch': 'cat',
    'pudding': 'cat',
    'neptune': 'fish',
    'darwin': 'lizard'
  };
  return pets;
}

function ex_11() {
  console.log("'foo' === 'Foo' expected to return false");
}

function ex_12() {
  console.log('parseInt("3.1415") expected to return 3');
}

function ex_13() {
  console.log("'12' < '9' expected to evaluate to true")
}
