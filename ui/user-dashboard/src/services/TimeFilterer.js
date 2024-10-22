export function TimeFilterer(allDetections, timeGapSensitivity, filterOperation, totalExpectedTime) {

  // timeGapSensitivity = 50;                 //Decide suitable time gap <- 
  let allChosenPeople =[];     // holds ids of chosen people
  let allDetectionTimes = [];    // holds total detected time per person

  allDetections.forEach ( person => {

    let totalTime = 0;
    
    const timestamps = person.timestamps;
    const noOfTimestamps = timestamps.length;

    // calculating total time of a person

    if (noOfTimestamps === 1){
      
      totalTime = 1;

    } else {
        for (let i = 0; i < noOfTimestamps; i++){ 
          
          if (i < (noOfTimestamps-1)) {           // problem with logic --- problem with checking for single seconds, if not included in a range

            if ((timestamps[i+1] - timestamps[i]) <= timeGapSensitivity){
              totalTime = totalTime + (timestamps[i+1] - timestamps[i]);
              // console.log(totalTime);

            } else if (i !== 0) { // if not the first or last position

              // making sure that chosen timestamp isn't within the range of times included in a timegap period
              if (((timestamps[i] - timestamps[i-1]) > timeGapSensitivity) &&
                    ((timestamps[i+1] - timestamps[i]) > timeGapSensitivity) )
                    {
                      totalTime++;
                    }
            } else if (i === 0) {    // if the first position
              if ( ((timestamps[i+1] - timestamps[i]) > timeGapSensitivity) )
                {
                  totalTime++;
                }
            }
              
          } else if (i === (noOfTimestamps-1)){  // last time stamp
              // making sure that chosen timestamp isn't within the range of times included in a timegap period
              if ( ((timestamps[i] - timestamps[i-1]) > timeGapSensitivity) )
                {
                  totalTime++;
                }
          }

                  // else if the timegaps of [i - (i-1)] and [(i+1) - i] are > timeGapSensitivity => totalTime++
            // handle the starting and ending point of this condition to be within the bounds of the array
            // stating and ending poisition needs to be checked only with one of the conditions

            // else{
            //   totalTime ++;          // add chosen second to the total time
            //     // if taken in previous iteration, extra second will be added
            // }
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
          if (totalTime === totalExpectedTime){
            allChosenPeople.push(person.id);
            allDetectionTimes.push(totalTime);
          }
          break;
        case "less_than":
          if (totalTime < totalExpectedTime){
            allChosenPeople.push(person.id);
            allDetectionTimes.push(totalTime);
          }
          break;
        case "less_than_equal":
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
