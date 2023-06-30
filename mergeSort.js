function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let a = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      a.push(left[i]);
      i++;
    } else {
      a.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    a.push(left[i++]);
  }

  while (j < right.length) {
    a.push(right[j++]);
  }

  return a;
}

console.log(mergeSort([1,2,6,2,6,2,4,2,6,0]));
console.log(mergeSort([10, 7, 8, 9, 1, 5]));
console.log(mergeSort([30, 2, 10, 0, 222, 33, 55]));
