import {makeHelper} from './util/makeHelper';

export default class Command {
  /*
    {
      make: {
        process: func(Command),
        help: "",
        alt: "-m",
      },
      delete: {
        process: func(Command),
        help: "",
        alt: "-d",
      }
    }
  */
  constructor(commandName, commands, prefix = "") {
    this.commandName = commandName;
    this.commands = commands;
    this.input = "";
    this.prefix = prefix;
  }

  isValidCommand(input) {
    const commands = this.commands;

    for (let [key, value] of Object.entries(commands)) {
      this.input = key;
      if (key == input) return true;
      if ("alt" in value) {
        if (value.alt == input) return true;
      }
    }

    return false;
  }

  doProcess(input) {
    if (this.isValidCommand(input)) {
      this.commands[this.input].process(this);
    } else {
      throw new Error(makeHelper(this.prefix, this.commandName, this.commands));
    }
  }
}
