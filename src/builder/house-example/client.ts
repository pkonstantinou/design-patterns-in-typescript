// House Builder Example Code

import { CastleDirector } from './castle-director';
import { IglooDirector } from './igloo-director';
import { HouseBoatDirector } from './houseboat-director';

const CASTLE = CastleDirector.construct();
const IGLOO = IglooDirector.construct();
const HOUSEBOAT = HouseBoatDirector.construct();

console.log(CASTLE.construction());
console.log(IGLOO.construction());
console.log(HOUSEBOAT.construction());
