function ex_1() {
  let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };
  return person.name
}

function ex_2() {
  console.log('All are valid keys')
}

function ex_3() {
  let myArray = {0: 'a', 1: 'b', 2: 'c'};
  for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
  }
}

function ex_4(obj) {
  return Object.keys(obj).map(element => element.toUpperCase());
}

function ex_5_6(obj) {
  let new_obj = Object.create(obj);
  new_obj['qux'] = 3;
  return new_obj;
}

function ex_7(obj, key_arr=[]) {
  return (!key_arr.length)
}


function ex_7(obj, key_arr=[]) {
  let new_obj = {};
  if (!key_arr.length) {
    key_arr = Object.keys(obj);
  }
  console.log(key_arr);
  for (let ind in key_arr){
    str_key = key_arr[ind];
    new_obj[str_key] = obj[str_key];
  }
  return new_obj;
}
