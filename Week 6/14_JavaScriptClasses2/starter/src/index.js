import MotorVehicle from './motorvehicle.js';
import Car from './car.js';
import Motorbike from './motorbike.js';

// CAR TEST
const myCar = new Car("Toyota", "Camry", 2500, 4, true);
console.log("Car:", myCar);

// Accelerate car
myCar.accelerate(10);
console.log("Car speed after accelerate(10):", myCar.speed);

// MOTORBIKE TEST
const myBike = new Motorbike("Kawasaki", "Ninja", 650, "chain");
console.log("Motorbike:", myBike);

// Accelerate motorbike
myBike.accelerate(10);
console.log("Motorbike speed after accelerate(10):", myBike.speed);

// COMPARE RESULTS
if (myCar.speed > myBike.speed) {
  console.log("🏎️ The Car wins the race!");
} else if (myCar.speed < myBike.speed) {
  console.log("🏍️ The Motorbike wins the race!");
} else {
  console.log("It's a tie!");
}
