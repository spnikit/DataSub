export function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
export function getFact(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 1;

  return n * getFact(n - 1);
}
export function bubbleSort(inputArr: number[]) {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
}
export function insertionSort(inputArr: number[]) {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
}
