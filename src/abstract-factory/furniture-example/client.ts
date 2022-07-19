// Abstract Factory Use Case Example Code
import { FurnitureFactory } from './furniture-factory';

let FURNITURE = FurnitureFactory.getFurniture('BigChair');
console.log(FURNITURE?.getName());
console.log(FURNITURE?.getDimensions());

FURNITURE = FurnitureFactory.getFurniture('BigTable');
console.log(FURNITURE?.getName());
console.log(FURNITURE?.getDimensions());
