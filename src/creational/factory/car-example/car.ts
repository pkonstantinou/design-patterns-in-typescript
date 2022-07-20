import { Dimension } from './dimension';

interface ICar {
  height: number;
  width: number;
  depth: number;
  getDimensions(): Dimension;
  startEngine(): void;
}

export default class Car implements ICar {
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): Dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth
    };
  }

  startEngine() {
    console.log('Starting engine');
  }
}
