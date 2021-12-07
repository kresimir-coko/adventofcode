const fs = require("fs");

const commandsFile = fs.readFileSync("./commands.txt", {
  encoding: "utf8",
  flag: "r",
});

let commands = commandsFile.split("\n");

let coordinates = {
  aim: 0,
  depth: 0,
  location: 0,
};

function goForward(amount) {
  coordinates.location += parseInt(amount);
  coordinates.depth += parseInt(amount) * coordinates.aim;
}

function incrementAim(amount) {
  coordinates.aim += parseInt(amount);
}

function decrementAim(amount) {
  coordinates.aim -= parseInt(amount);
}

commands.forEach((command) => {
  if (command.includes("forward")) {
    const value = command.charAt(command.length - 1);

    goForward(value);
  } else if (command.includes("down")) {
    const value = command.charAt(command.length - 1);

    incrementAim(value);
  } else {
    const value = command.charAt(command.length - 1);

    decrementAim(value);
  }
});

console.log("coordinates: ", coordinates.depth * coordinates.location);
