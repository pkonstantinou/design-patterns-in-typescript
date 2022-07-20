import { Chair } from './chair';

export class MediumChair extends Chair {
  constructor() {
    super();
    this.name = 'Medium Chair';
    this.height = 50;
    this.width = 50;
    this.depth = 50;
  }
}
