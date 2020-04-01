// timestamps will be in milliseconds
let allDetections = [
  { id: 1, faceName: "Akassh", timestamps: [60, 100, 1200] },
  { id: 2, faceName: "Visal", timestamps: [1000] },
  { id: 3, faceName: "Nisal", timestamps: [100, 500, 1200, 1500] }
];

// milliseconds for this scenario
let selectedTime = 3;

let moreThan = [];
let moreThanOrEqualTo = [];
let lessThan = [];
let lessThanOrEqualTo = [];
let equalTo = [];

// more than or equal to
allDetections.forEach(detection => {
  // more
  if (detection.timestamps.length > selectedTime) {
    moreThan.push(detection);
  }
  if (detection.timestamps.length >= selectedTime) {
    moreThanOrEqualTo.push(detection);
  }

  // less
  if (detection.timestamps.length < selectedTime) {
    lessThan.push(detection);
  }
  if (detection.timestamps.length <= selectedTime) {
    lessThanOrEqualTo.push(detection);
  }

  //equal
  if (detection.timestamps.length === selectedTime) {
    equalTo.push(detection);
  }
});

console.log("MORE");
console.log("------------");
console.log(`More than or equal to ${JSON.stringify(moreThanOrEqualTo)}`);
console.log(`More than ${JSON.stringify(moreThan)}`);
console.log("\nLESS");
console.log("------------");
console.log(`Less than or equal to ${JSON.stringify(lessThanOrEqualTo)}`);
console.log(`Less than ${JSON.stringify(lessThan)}`);
console.log("\nEQUAL");
console.log("------------");
console.log(`Equal to ${JSON.stringify(equalTo)}`);
