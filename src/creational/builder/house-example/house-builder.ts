import { House } from './house';

interface IHouseBuilder {
  house: House;
  setBuildingType(buildingType: string): this;
  setWallMaterial(wallMaterial: string): this;
  setNumberOfDoors(numberOfDoors: number): this;
  setNumberOfWindows(numberOfWindows: number): this;
  getResult(): House;
}

export class HouseBuilder implements IHouseBuilder {
  house: House;

  constructor() {
    this.house = new House();
  }

  setBuildingType(buildingType: string): this {
    this.house.buildingType = buildingType;
    return this;
  }

  setWallMaterial(wallMaterial: string): this {
    this.house.wallMaterial = wallMaterial;
    return this;
  }

  setNumberOfDoors(numberOfDoors: number): this {
    this.house.doors = numberOfDoors;
    return this;
  }

  setNumberOfWindows(numberOfWindows: number): this {
    this.house.windows = numberOfWindows;
    return this;
  }

  getResult(): House {
    return this.house;
  }
}
