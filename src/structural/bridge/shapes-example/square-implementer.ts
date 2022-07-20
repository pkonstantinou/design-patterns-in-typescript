import { IShapeImplementer } from './ishape-implementer';

export class SquareImplementer implements IShapeImplementer {
  drawImplementation(): void {
    console.log('**************');
    console.log('*            *');
    console.log('*            *');
    console.log('*            *');
    console.log('*            *');
    console.log('*            *');
    console.log('*            *');
    console.log('**************');
  }
}
