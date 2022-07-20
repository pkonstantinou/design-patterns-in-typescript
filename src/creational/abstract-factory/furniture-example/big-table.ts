import { Table } from './table';

export class BigTable extends Table {
  constructor() {
    super();
    this.name = 'Big Table';
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }
}
