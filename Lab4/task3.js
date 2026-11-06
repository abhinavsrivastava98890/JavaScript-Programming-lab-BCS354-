// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 4 - Task 3: Function billWithTax with default taxRate

function billWithTax(amount, taxRate = 0.18) {
  return amount + (amount * taxRate);
}

console.log(billWithTax(100));
