import { Dimension } from './dimension';

export interface IChair {
  height: number;
  width: number;
  depth: number;
  name: string;
  getDimensions(): Dimension;
  getName(): string;
}

export class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;
  name = '';

  getDimensions(): Dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth
    };
  }

  getName(): string {
    return this.name;
  }
}
