// A hypothetical Cube tool from Company A
export interface ICubeA {
  manufacture(width: number, height: number, depth: number): boolean;
}

export class CubeA implements ICubeA {
  static lastTime = Date.now();

  manufacture(width: number, height: number, depth: number): boolean {
    // if not busy, then manufacture a cube with dimensions
    const now = Date.now();
    if (now > CubeA.lastTime + 1500) {
      console.log(
        `Company A built Cube with dimensions ${width}x${height}x${depth}`
      );
      CubeA.lastTime = now;
      return true;
    }
    return false; // busy
  }
}
