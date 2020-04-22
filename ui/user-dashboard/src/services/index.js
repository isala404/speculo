var http = require('http');

function timeDetect(allDetection, timePeriod, filter){ //timePeriod <- user filter time gap in mili seconds

  timeGap = 50;                 //Decide suitable time gap <- 
  allDetectionTime = []


  allDetection.forEach(element => {

    totalTime = 0;
    
    timestamps = element.timestamps;
    len = timestamps.length;

    for (i = 0; i<len; i++){

      if (timestamps[i+1]-timestamps[i]<=timeGap){

        totalTime = totalTime+timestamps[i+1]-timestamps[i];
        console.log(totalTime);
      }

      if (filter == "more_than"){ 
  
        if (totalTime >= timePeriod){
          allDetectionTime.push(element);
          break;
        }
      }else if(filter == "lower_than"){
    
        if (totalTime <= timePeriod){
          allDetectionTime.push(element);
          break;
        }
      }else{

      }
    
      if(i == len-2){break;}
    }
  });

  return allDetectionTime; // <-Return identified ditections 
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    allDetection = [
      {id:1, name:"Akash", timestamps:[60, 100, 1200]},
      {id:1, name:"Visal", timestamps:[60, 100, 1200]},
      {id:1, name:"Nisal", timestamps:[60, 100, 1200]},
      {id:1, name:"Dinuka", timestamps:[60, 100, 1200]},
      {id:1, name:"Isala", timestamps:[60, 100, 1200]},
      {id:1, name:"Kushan", timestamps:[60, 100, 1200]},
    ]

console.log(timeDetect(allDetection, 100, "lower_than"))

    res.end("Processed");
  }).listen(8080);