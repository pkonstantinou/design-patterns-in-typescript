import { House } from './house';
import { HouseBuilder } from './house-builder';

export class HouseBoatDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('House Boat')
      .setWallMaterial('Wood')
      .setNumberOfDoors(6)
      .setNumberOfWindows(8)
      .getResult();
  }
}
