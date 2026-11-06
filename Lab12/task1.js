// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 12 - Task 1: Higher-order function applyTwice

function applyTwice(fn, val) {
  return fn(fn(val));
}

function addTen(num) {
  return num + 10;
}

console.log(applyTwice(addTen, 5));
