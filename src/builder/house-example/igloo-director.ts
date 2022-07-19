import { House } from './house';
import { HouseBuilder } from './house-builder';

export class IglooDirector {
  static construct(): House {
    // Note that in this IglooDirector, it has omitted the
    // setNumberOfWindows call since this Igloo will have
    // no windows.
    return new HouseBuilder()
      .setBuildingType('Igloo')
      .setWallMaterial('Ice')
      .setNumberOfDoors(1)
      .getResult();
  }
}
