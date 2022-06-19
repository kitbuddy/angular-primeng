import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyBy100'
})
export class MultiplyBy100Pipe implements PipeTransform {

  transform(value: number): number {
    return value*100;
  }

}
