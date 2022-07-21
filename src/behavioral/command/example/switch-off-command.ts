import { ICommand } from './icommand';
import { Light } from './light';

export class SwitchOffCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}
