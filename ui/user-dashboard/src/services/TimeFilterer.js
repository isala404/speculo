import React from 'react';


function timeDetect(allDetections,timeGapSensitivity, totalExpectedTime, filterOperation){ //timePeriod <- user filter time gap in seconds

  // timeGapSensitivity = 50;                 //Decide suitable time gap <- 
  allDetectionTime = []
  allChosenPeople = []      // holds id & total detected time per person

  allDetections.forEach(element => {

    totalTime = 0;
    
    timestamps = element.timestamps;
    noOfTimestamps = timestamps.length;

    for (i = 0; i < noOfTimestamps; i++){

      if (timestamps[i+1] - timestamps[i] <= timeGapSensitivity){

        totalTime = totalTime + timestamps[i+1] - timestamps[i];
        console.log(totalTime);
      }
      // else{
      //   totalTime ++;          // add chosen second to the total time
      // }


      // have a switch case instead  >>>??????
      if (filterOperation == "more_than_equal"){ 
  
        if (totalTime >= totalExpectedTime){
          allDetectionTime.push(element);
          break;                          // is a break needed?
        }
      } else if(filterOperation == "more_than"){
        if (totalTime > totalExpectedTime){
          allDetectionTime.push(element);
          break;
        }
        
      } else if(filterOperation == "equal"){
        if (totalTime == totalExpectedTime){
          allDetectionTime.push(element);
          break;
        }

      } else if(filterOperation == "lower_than"){
        if (totalTime < totalExpectedTime){
          allDetectionTime.push(element);
          break;
        }

      } else if(filterOperation == "lower_than_equal"){
        if (totalTime <= totalExpectedTime){
          allDetectionTime.push(element);
          break;
        }
      }
    
      if (i == noOfTimestamps - 2) { break; }
    }
  });

  return allDetectionTime; // <-Return identified ditections 
}

//------------------

// allDetections = [
//   {id:1, name:"Akash", timestamps:[60, 100, 1200]},
//   {id:1, name:"Visal", timestamps:[60, 100, 1200]},
//   {id:1, name:"Nisal", timestamps:[60, 100, 1200]},
//   {id:1, name:"Dinuka", timestamps:[60, 100, 1200]},
//   {id:1, name:"Isala", timestamps:[60, 100, 1200]},
//   {id:1, name:"Kushan", timestamps:[60, 100, 1200]},
// ]

console.log(timeDetect(allDetections,50, 100, "lower_than"))
