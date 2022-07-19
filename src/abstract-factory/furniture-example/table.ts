import { Dimension } from './dimension';

export interface ITable {
  height: number;
  width: number;
  depth: number;
  name: string;
  getDimensions(): Dimension;
  getName(): string;
}

export class Table implements ITable {
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
