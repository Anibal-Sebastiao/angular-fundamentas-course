import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number):string {
    let valueWithTransform: string = '';
    switch(value){
      case 1: valueWithTransform = 'Half Hour';
        break;
      case 2: valueWithTransform = 'One Hour';
        break;
      case 4: valueWithTransform = 'Half Day';
        break;
      case 4: valueWithTransform = 'Full Day';
        break;
      default: valueWithTransform = value.toString();
    }
    return valueWithTransform
  }
}
