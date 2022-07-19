import { SmallChair } from './small-chair';
import { MediumChair } from './medium-chair';
import { BigChair } from './big-chair';
import { IChair } from './chair';

export class ChairFactory {
  static getChair(chair: string): IChair | undefined {
    try {
      if (chair === 'BigChair') {
        return new BigChair();
      } else if (chair === 'MediumChair') {
        return new MediumChair();
      } else if (chair === 'SmallChair') {
        return new SmallChair();
      }
      throw new Error('Class not Found');
    } catch (e) {
      console.log(e);
    }
  }
}
