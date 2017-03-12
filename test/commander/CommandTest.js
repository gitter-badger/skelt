import Command from "../../src/commander/Command.js";

const com = new Command(
  "command",
  {
    delete: {
      process: function(co) {
        console.log("delete command");
        console.log("aiueo " + co.commandName);
      },
      help: "delete method",
      alt: "-d",
    },
    make: {
      process: function() {
        console.log("make command");
      },
      help: "make method",
      alt: "-m",
    },
  },
  "skelt"
);

try {
  com.doProcess("delete");

  com.doProcess("make");

  com.doProcess("made");

  com.doProcess("-d");

  com.doProcess("-m");

  com.doProcess("-u");
} catch(e) {
  console.log(e.message);
}
