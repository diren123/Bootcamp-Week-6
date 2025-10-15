export default class MotorVehicle {
  constructor(make, model, wheels, engineSize) {
    this._make = make;
    this._model = model;
    this._wheels = wheels;
    this._engineSize = engineSize;
    this._speed = 0;
  }

  // Getters
  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }

  get wheels() {
    return this._wheels;
  }

  get engineSize() {
    return this._engineSize;
  }

  get speed() {
    return this._speed;
  }

  // Accelerate method
  accelerate(time) {
    this._speed = this._speed + ((0.25 * this._engineSize / this._wheels) * time);
  }

  // Brake method
  brake(time) {
    this._speed = ((0.3 * this._engineSize / this._wheels) * time) > 0
      ? this._speed - ((0.3 * this._engineSize / this._wheels) * time)
      : 0;

    if (this._speed < 0) this._speed = 0; // prevent negative speed
  }
}
