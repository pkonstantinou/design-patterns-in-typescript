// A Circle Abstraction

import { IShape } from './ishape';
import { IShapeImplementer } from './ishape-implementer';

export class Circle implements IShape {
  private implementor: IShapeImplementer;

  constructor(implementor: IShapeImplementer) {
    this.implementor = implementor;
  }

  draw(): void {
    this.implementor.drawImplementation();
  }
}
