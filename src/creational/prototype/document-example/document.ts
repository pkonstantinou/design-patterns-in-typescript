// A sample document to be used in Prototype example
import { IPrototype } from './iprototype';

export class Document implements IPrototype {
  name: string;
  array: [number[], number[]];

  constructor(name: string, array: [number[], number[]]) {
    this.name = name;
    this.array = array;
  }

  customMethod(): void {
    console.log('Custom method');
  }

  clone(mode: number): Document {
    // This clone method uses different clone techniques
    let array;
    if (mode === 2) {
      // results in a deep copy of the document
      array = JSON.parse(JSON.stringify(this.array));
    } else {
      // defaultm, results in a shallow copy of the document
      array = Object.assign([], this.array);
    }
    return new Document(this.name, array);
  }
}
