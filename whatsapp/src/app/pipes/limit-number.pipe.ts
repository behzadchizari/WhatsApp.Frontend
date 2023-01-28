import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitNumber'
})
export class LimitNumberPipe implements PipeTransform {
  transform(value: number, digit: number): string {
    const lastNumberOfDigit = Math.pow(10, digit) - 1;
    if (value / Math.pow(10, digit) > 1) {
      return lastNumberOfDigit.toString() + "+";
    } else {
      return value.toString();
    }
  }
}