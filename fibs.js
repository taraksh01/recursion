function fibs(n) {
  if (n <= 0) {
    return "Please enter a positive number";
  }
  let fibArray = [];
  let first = 0;
  let second = 1;
  if (n > 1) {
    fibArray.push(first);
  }
  if (n > 2) {
    fibArray.push(second);
  }
  for (let i = 2; i < n; i++) {
    second = first + second;
    first = second - first;
    fibArray.push(second);
  }
  return fibArray;
}

console.log(fibs(-3));
console.log(fibs(0));
console.log(fibs(8));
console.log(fibs(30));
