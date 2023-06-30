function fibs(n) {
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

console.log(fibs(19));
