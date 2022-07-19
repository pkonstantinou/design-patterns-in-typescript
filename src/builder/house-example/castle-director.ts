// A Director Class
import { House } from './house';
import { HouseBuilder } from './house-builder';

export class CastleDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Castle')
      .setWallMaterial('Sandstone')
      .setNumberOfDoors(100)
      .setNumberOfWindows(200)
      .getResult();
  }
}
