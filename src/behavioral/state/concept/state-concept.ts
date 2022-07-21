// The State Pattern Concept

class Context {
  // This is the object whose behavior will change
  private stateHandles: IState[];
  private handle: IState | undefined;

  constructor() {
    this.stateHandles = [
      new ConcreteStateA(),
      new ConcreteStateB(),
      new ConcreteStateC()
    ];
    this.handle = undefined;
  }

  request(): IState {
    // A method of the state that dynamically changes which
    // class it uses depending on the value of this.#handle
    this.handle = this.stateHandles[Math.floor(Math.random() * 3)];
    return this.handle;
  }
}

interface IState {
  toString(): string;
}

class ConcreteStateA implements IState {
  // A ConcreteState Subclass

  toString(): string {
    return 'I am a ConcreteStateA';
  }
}

class ConcreteStateB implements IState {
  // A ConcreteState Subclass

  toString(): string {
    return 'I am a ConcreteStateB';
  }
}

class ConcreteStateC implements IState {
  // A ConcreteState Subclass

  toString(): string {
    return 'I am a ConcreteStateC';
  }
}

// The Client
const CONTEXT = new Context();
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
