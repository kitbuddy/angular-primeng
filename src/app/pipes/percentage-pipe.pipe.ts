import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentagePipe'
})
export class PercentagePipePipe implements PipeTransform {

  transform(value: number): number {
    return value/100;
  }

}
