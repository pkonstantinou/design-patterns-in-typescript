import { Table } from './table';

export class MediumTable extends Table {
  constructor() {
    super();
    this.name = 'Medium Table';
    this.height = 50;
    this.width = 50;
    this.depth = 50;
  }
}
