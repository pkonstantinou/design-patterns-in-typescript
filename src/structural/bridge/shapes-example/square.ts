// A Square Abstraction

import { IShape } from './ishape';
import { IShapeImplementer } from './ishape-implementer';

export class Square implements IShape {
  private implementer: IShapeImplementer;

  constructor(implementor: IShapeImplementer) {
    this.implementer = implementor;
  }

  draw(): void {
    this.implementer.drawImplementation();
  }
}
