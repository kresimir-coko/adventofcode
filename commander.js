const fs = require("fs");

const commandsFile = fs.readFileSync("./commands.txt", {
  encoding: "utf8",
  flag: "r",
});

let commands = commandsFile.split("\n");

let coordinates = {
  depth: 0,
  location: 0,
};

function goForward(speed) {
  console.log(`Going forward at ${speed}`);

  coordinates.location += parseInt(speed);
}

function goDeeper(drop) {
  console.log(`Going deeper at ${drop}`);

  coordinates.depth += parseInt(drop);
}

function goHigher(rise) {
  console.log(`Going higher at ${rise}`);

  coordinates.depth -= parseInt(rise);
}

commands.forEach((command) => {
  if (command.includes("forward")) {
    const value = command.charAt(command.length - 1);

    goForward(value);
  } else if (command.includes("down")) {
    const value = command.charAt(command.length - 1);

    goDeeper(value);
  } else {
    const value = command.charAt(command.length - 1);

    goHigher(value);
  }
});

console.log("coordinates: ", coordinates.depth * coordinates.location);
