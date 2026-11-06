// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 15 - Task 3: async run with try-catch and await

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

async function run() {
  try {
    console.log(await checkMarks(65));
    await checkMarks(-5);
  } catch (err) {
    console.log("Caught: " + err.message);
  }
}

run();
