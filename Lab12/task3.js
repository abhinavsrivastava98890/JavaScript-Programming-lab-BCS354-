// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 12 - Task 3: Repeat action with repeatAction

function repeatAction(times, action) {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
}

repeatAction(3, (round) => console.log("Round " + round));
