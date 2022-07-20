// Decorator Concept Sample Code

interface IComponent {
  method(): string;
}

class Component implements IComponent {
  method(): string {
    return 'Component Method';
  }
}

class Decorator implements IComponent {
  private component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  method(): string {
    return `Decorator Method(${this.component.method()})`;
  }
}

// The Client
const COMPONENT = new Component();
console.log(COMPONENT.method());

// The component can be decorated
const DECORATED = new Decorator(COMPONENT);
console.log(DECORATED.method());

// The decodated component can be decorated again
const DECORATED2 = new Decorator(DECORATED);
console.log(DECORATED2.method());
