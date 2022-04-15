import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed',pure:false
})
export class DatePipe implements PipeTransform {
  transform(value:any): number{  
//   let now:any = new Date();
//   let quoteCreated:any = (now.getFullYear(),now.getMonth(),now.getDate());
// let timeElapsed= Math.abs(new Date()-quoteCreated.getTime)
// let dateDifference=timeElapsed*0.001;
// let totalTimeElapsed=dateDifference/86400

// return totalTimeElapsed

let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return (0);
    }
  }



  // let timeElapsedMinutes = new Date(value).getTime()-quoteCreated.getTime();
  // let timeElapsedHour = timeElapsedMinutes/60
  // return timeElapsedHour;
}
  
  
  


