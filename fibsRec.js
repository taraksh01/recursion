function fibsRec(n) {
  if (n <= 0) {
    return "Please Enter a positive number";
  }
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibsRec(-3));
console.log(fibsRec(0));
console.log(fibsRec(8));
console.log(fibsRec(20));
