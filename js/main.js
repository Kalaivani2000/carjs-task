class Car {
  constructor(brand, model, acceleration) {
    this._brand = brand;
    this._model = model;
    this._acceleration = acceleration;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get model() {
    return this._model;
  }

  set model(model) {
    this._model = model;
  }

  get acceleration() {
    return this._acceleration;
  }

  set acceleration(acceleration) {
    this._acceleration = acceleration;
  }
}

var car1 = new Car("Toyota", "Camry", 8.5);
var car2 = new Car("Honda", "Civic", 9.2);
var car3 = new Car("Tesla", "Model S", 2.3);
console.log(car1,car2,car3)