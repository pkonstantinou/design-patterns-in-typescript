import { SmallTable } from './small-table';
import { MediumTable } from './medium-table';
import { BigTable } from './big-table';
import { ITable } from './table';

export class TableFactory {
  static getTable(table: string): ITable | undefined {
    try {
      if (table === 'BigTable') {
        return new BigTable();
      } else if (table === 'MediumTable') {
        return new MediumTable();
      } else if (table === 'SmallTable') {
        return new SmallTable();
      }
      throw new Error('Class not Found');
    } catch (e) {
      console.log(e);
    }
  }
}
