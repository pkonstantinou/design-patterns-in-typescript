import CarFactory from './car-factory';

const CAR = CarFactory.getCar('BigCar');
console.log(CAR.getDimensions());
CAR.startEngine();
