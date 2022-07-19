import SmallCar from './small-car';
import MediumCar from './medium-car';
import BigCar from './big-car';
import ICar from './car';

export default class CarFactory {
  static getCar(car: string): ICar {
    if (car === 'SmallCar') {
      return new SmallCar();
    } else if (car === 'MediumCar') {
      return new MediumCar();
    } else {
      return new BigCar();
    }
  }
}
