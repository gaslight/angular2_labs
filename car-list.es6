import {Component, Template, For} from 'angular2/angular2';
import {CarDetails} from 'car';

@Component({
  selector: "car-list"
})
@Template({
  url: "car-list.html",
  directives: [For, CarDetails]
})
export class CarList {
  constructor() {
    this.cars = [
      {make: "Chevy", model: "Nova"},
      {make: "Ford", model: "Fairlane"}
    ];
  }
  addCar() {
    this.cars.push({make: "Honda", model: "Accord"});
  }

}
