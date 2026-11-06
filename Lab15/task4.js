// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 15 - Task 4: Load local users with Promise and async-await

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Asha" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Meera" }
      ]);
    }, 100);
  });
}

async function printUsers() {
  let users = await getUsers();
  users.forEach((user) => {
    console.log(user.name);
  });
}

printUsers();
