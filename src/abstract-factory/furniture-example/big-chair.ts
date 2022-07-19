import { Chair } from './chair';

export class BigChair extends Chair {
  constructor() {
    super();
    this.name = 'Big Chair';
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }
}
