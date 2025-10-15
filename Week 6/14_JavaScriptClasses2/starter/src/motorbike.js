import MotorVehicle from './motorvehicle.js';

export default class Motorbike extends MotorVehicle {
  constructor(make, model, engineSize, driveType, wheels = 2) {
    super(make, model, wheels, engineSize);
    this._driveType = driveType;
  }

  // Getter for driveType
  get driveType() {
    return this._driveType;
  }

  // Override accelerate method
  accelerate(time) {
    this._speed = this._speed + ((0.5 * this._engineSize / this._wheels) * time);
  }
}
