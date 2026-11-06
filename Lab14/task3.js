// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 14 - Task 3: Repeat with setInterval and stop with clearInterval

let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
