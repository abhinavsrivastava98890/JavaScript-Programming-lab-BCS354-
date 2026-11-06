// Name: Abhinav Srivastava
// Roll Number / Student ID: BCS2025376
// Section: E
// Lab 8 - Task 3: Object composition Engine inside Car

class Engine {
  constructor(power) {
    this.power = power;
  }
}

class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }
  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}

let car = new Car(150);
console.log(car.start());
