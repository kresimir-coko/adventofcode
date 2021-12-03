const fs = require("fs");

const measurements = fs.readFileSync("./measurements.txt", {
  encoding: "utf8",
  flag: "r",
});

const measurementsArray = measurements.split("\n");

const filteredArray = measurementsArray.filter(
  (measurement, index) =>
    parseInt(measurement) > parseInt(measurementsArray[index - 1])
);

console.log("filteredArray: ", filteredArray.length);
