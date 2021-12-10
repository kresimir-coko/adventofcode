const fs = require("fs");

const diagonsticsFile = fs.readFileSync("./diagnostic.txt", {
  encoding: "utf8",
  flag: "r",
});

let diagnostics = diagonsticsFile.split("\n");

const bits = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
};

diagnostics.forEach((diagnostic) => {
  for (let i = 0; i < diagnostic.length; i++) {
    bits[i].push(parseInt(diagnostic[i]));
  }
});

// console.log("bits: ", bits);

// return the number of bits that are 1 in the array
const countBits = (array) => {
  let countOne = 0;
  let countZero = 0;

  array.forEach((bit) => {
    if (bit === 0) {
      countOne++;
    } else {
      countZero++;
    }
  });

  if (countOne > countZero) {
    return 1;
  } else {
    return 0;
  }
};

Object.keys(bits).forEach((key) => {
  console.log(`${key}: ${countBits(bits[key])}`);
});
