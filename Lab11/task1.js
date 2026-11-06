// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 11 - Task 1: Block scope vs outer scope

let level = "outer";

{
  let level = "inner";
  console.log(level);
}

console.log(level);
