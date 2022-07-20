import Car from './car';

export default class SmallCar extends Car {
  constructor() {
    super();
    this.height = 120;
    this.width = 150;
    this.depth = 350;
  }

  startEngine(): void {
    console.log('Starting engine of Small Car');
  }
}
