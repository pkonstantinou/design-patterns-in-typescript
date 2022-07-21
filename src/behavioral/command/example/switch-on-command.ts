import { ICommand } from './icommand';
import { Light } from './light';

export class SwitchOnCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}
