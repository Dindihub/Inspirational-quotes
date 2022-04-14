import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed',pure:false
})
export class DatePipe implements PipeTransform {
  transform(value:Date): number{
  const now = new Date();
  const quoteCreated = new Date(value);
  const timeElapsedMinutes = now.getTime()-quoteCreated.getTime();
  const timeElapsedHour = timeElapsedMinutes/60
  return timeElapsedHour;
    }
  }
  
  


