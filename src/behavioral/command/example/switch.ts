// The Switch (Invoker) Class.

import { ICommand } from './icommand';

export class Switch {
  private commands: { [id: string]: ICommand } = {};
  private history: [number, string][] = [];

  showHistory() {
    // Print the history of each time a command was invoked
    this.history.forEach(([timestamp, commandName]) => {
      console.log(`${timestamp} : ${commandName}`);
    });
  }

  register(commandName: string, command: ICommand) {
    // Register commands in the Invoker
    this.commands[commandName] = command;
  }

  execute(commandName: string) {
    // Execute any registered command
    if (commandName in this.commands) {
      this.commands[commandName].execute();
      this.history.push([Date.now(), commandName]);
    } else {
      console.log(`Command [${commandName}] is not recognized`);
    }
  }

  replayLast(numberOfCommands: number) {
    // Replay the last N commands
    const commands = this.history.slice(
      this.history.length - numberOfCommands,
      this.history.length
    );
    commands.forEach(([_, commandName]) => {
      this.commands[commandName].execute();
    });
  }
}
