function ex_1() {
  let timeOfDay = ['Morning', 'Afternoon', 'Evening'];
  let name = 'Victor';
  for (let i = 0; i < timeOfDay.length; i++) {
    console.log(`Good ${timeOfDay[i]}, ${name}.`)
  }
}

function ex_2() {
  let curr_age = 20;
  let year_inc = 10;
  console.log(`You are ${curr_age} years old.`);
  for (let i = 0; i < 4; i++) {
    console.log(`In ${year_inc} years, you will be ${curr_age + year_inc} years old.`);
    year_inc += 10;
  }
}

function ex_3() {
  console.log('Error encountered as variable foo does not exist in the global scope.');
}

function ex_4() {
  console.log('Error encountered as assignment to const attempted.');
}

function ex_5() {
  console.log('Bar is the expected output')
}

function ex_6() {
  console.log('Bar is the expected output')
}
