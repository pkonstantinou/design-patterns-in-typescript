import Car from './car';

export default class BigCar extends Car {
  constructor() {
    super();
    this.height = 120;
    this.width = 170;
    this.depth = 400;
  }

  startEngine(): void {
    console.log('Starting engine of Big Car');
  }
}
