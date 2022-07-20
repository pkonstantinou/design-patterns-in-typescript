// Bridge Pattern Concept Sample Code

interface IAbstraction {
  method(value: string[]): void;
}

class RefinedAbstractionA implements IAbstraction {
  private implementor: IImplementor;

  constructor(implementor: IImplementor) {
    this.implementor = implementor;
  }

  method(value: string[]): void {
    this.implementor.method(value);
  }
}

class RefinedAbstractionB implements IAbstraction {
  private implementor: IImplementor;

  constructor(implementor: IImplementor) {
    this.implementor = implementor;
  }

  method(value: string[]): void {
    this.implementor.method(value);
  }
}

interface IImplementor {
  method(value: string[]): void;
}

class ConcreteImplementorA implements IImplementor {
  method(value: string[]): void {
    console.log(value);
  }
}

class ConcreteImplementorB implements IImplementor {
  method(value: string[]): void {
    value.forEach((v) => console.log(v));
  }
}

// The Client
const VALUES = ['a', 'b', 'c'];

const REFINED_ABSTACTION_A = new RefinedAbstractionA(
  new ConcreteImplementorB()
);
REFINED_ABSTACTION_A.method(VALUES);

const REFINED_ABSTACTION_B = new RefinedAbstractionB(
  new ConcreteImplementorA()
);
REFINED_ABSTACTION_B.method(VALUES);
