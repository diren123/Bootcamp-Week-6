import MotorVehicle from './motorvehicle.js';

export default class Car extends MotorVehicle {
  constructor(make, model, engineSize, doors, satNav = false, wheels = 4) {
    super(make, model, wheels, engineSize);
    this._doors = doors;
    this._satNav = satNav;
  }

  // Getters
  get doors() {
    return this._doors;
  }

  get satNav() {
    return this._satNav;
  }

  // Setter for satNav
  set satNav(value) {
    this._satNav = value;
  }
}
