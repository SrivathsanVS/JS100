function ex_4(arr) {
  return arr.reduce(function(accumulator, element) {
    if (element > accumulator) {
      accumulator = element;
    }
    return accumulator;
  }, 0)
}

function ex_6(arr, reg) {
  return arr.filter(element => (element.match(reg)));
}
