export function TimeFilterer(allDetections, timeGapSensitivity, filterOperation, totalExpectedTime) {

  // timeGapSensitivity = 50;                 //Decide suitable time gap <- 
  allChosenPeople =[];     // holds ids of chosen people
  allDetectionTimes = [];    // holds total detected time per person

  allDetections.forEach ( person => {

    totalTime = 0;
    
    timestamps = person.timestamps;
    noOfTimestamps = timestamps.length;

    // calculating total time of a person
    for (i = 0; i < (noOfTimestamps-2); i++){

      if ((timestamps[i+1] - timestamps[i]) <= timeGapSensitivity){
        totalTime = totalTime + (timestamps[i+1] - timestamps[i]);
        // console.log(totalTime);

      } else{
        totalTime ++;          // add chosen second to the total time
      }
    }

    // checking if filter condition is satisfied by each person
    switch(filterOperation) {
      case "more_than_equal":
        if (totalTime >= totalExpectedTime){
          allChosenPeople.push(person.id);
          allDetectionTimes.push(totalTime);
        }
        break;
      case "more_than":
        if (totalTime > totalExpectedTime){
          allChosenPeople.push(person.id);
          allDetectionTimes.push(totalTime);
        }
        break;
      case "equal":
        if (totalTime == totalExpectedTime){
          allChosenPeople.push(person.id);
          allDetectionTimes.push(totalTime);
        }
        break;
      case "lower_than":
        if (totalTime < totalExpectedTime){
          allChosenPeople.push(person.id);
          allDetectionTimes.push(totalTime);
        }
        break;
      case "lower_than_equal":
        if (totalTime <= totalExpectedTime){
          allChosenPeople.push(person.id);
          allDetectionTimes.push(totalTime);
        }
        break;
      default:
        console.log("Filter operation not found");
    }
  
  });

  return {       // Return identified people (ids & total detected times)
    allChosenPeople: allChosenPeople,
    allDetectionTimes: allDetectionTimes
  };
}

//------------------
// example
// allDetections = [
//   {id:1, name:"Akash", timestamps:[60, 100, 1200]},
//   {id:1, name:"Visal", timestamps:[60, 100, 1200]},
//   {id:1, name:"Nisal", timestamps:[60, 100, 1200]},
//   {id:1, name:"Dinuka", timestamps:[60, 100, 1200]},
//   {id:1, name:"Isala", timestamps:[60, 100, 1200]},
//   {id:1, name:"Kushan", timestamps:[60, 100, 1200]},
// ]

// console.log(timeDetect(allDetections, 50, "lower_than", 100))
