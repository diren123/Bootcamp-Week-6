import MotorVehicle from './motorvehicle.js';

// Create instance
const myVehicle = new MotorVehicle("myMake", "myModel", 4, 2000);

// Log vehicle and its speed
console.log(myVehicle);
console.log("Initial speed:", myVehicle.speed);

// Accelerate for 10
myVehicle.accelerate(10);
console.log("After accelerating for 10:", myVehicle.speed);

// Brake for 5
myVehicle.brake(5);
console.log("After braking for 5:", myVehicle.speed);

// Brake for another 5
myVehicle.brake(5);
console.log("After braking for another 5:", myVehicle.speed);
