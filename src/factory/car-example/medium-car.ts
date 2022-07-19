import Car from './car';

export default class MediumCar extends Car {
  constructor() {
    super();
    this.height = 120;
    this.width = 160;
    this.depth = 380;
  }

  startEngine(): void {
    console.log('Starting engine of Medium Car');
  }
}
