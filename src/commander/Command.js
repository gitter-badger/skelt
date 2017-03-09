import {makeHelper} from './util/makeHelper';

export default class Command {
  /*
    {
      make: {
        process: func,
        help: "",
        alt: "-m",
      },
      delete: {
        process: func,
        help: "",
        alt: "-d",
      }
    }
  */
  constructor(commandName, commands) {
    this.commandName = commandName;
    this.commands = commands;
    this.input = "";
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
      this.commands[this.input].process();
    } else {
      throw new Error(makeHelper("Skelt", this.commandName, this.commands));
      //console.log(makeHelper("skelt", this.commands));
    }
  }
}
