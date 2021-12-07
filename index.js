const fs = require("fs");

const measurements = fs.readFileSync("./measurements.txt", {
  encoding: "utf8",
  flag: "r",
});

let measurementsArray = measurements.split("\n");

// Day 1 Part 1
const filteredArray = measurementsArray.filter(
  (measurement, index) =>
    parseInt(measurement) > parseInt(measurementsArray[index - 1])
);

// Day 1 Part 2
measurementsArray = measurementsArray.map((measurement) =>
  parseInt(measurement)
);

const arrayWindow = () => {
  let arrayLength = measurementsArray.length;
  let result = [];

  for (let i = 0; i < arrayLength; i++) {
    let slicedArray = measurementsArray.slice(i, i + 3);

    if (slicedArray && slicedArray.length === 3) {
      result.push(slicedArray);

      continue;
    }

    break;
  }

  return result;
};

const measurementsArrayWindow = arrayWindow();

const listOfMeasurementSums = measurementsArrayWindow.map((measurement) => {
  let measurementSum = 0;

  measurement.forEach((measurement) => {
    measurementSum += measurement;
  });

  return measurementSum;
});

let incrementCount = 0;

listOfMeasurementSums.forEach((sum, i) => {
  if (sum < listOfMeasurementSums[i + 1]) {
    incrementCount++;
  }
});

console.log("incrementCount: ", incrementCount);
