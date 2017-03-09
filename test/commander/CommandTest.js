import Command from "../../src/commander/Command.js";

const com = new Command(
  "command",
  {
  delete: {
    process: function() {
      console.log("delete command");
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
});

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
