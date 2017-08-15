import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toCaps' })
export class CapsPipe implements PipeTransform {
  transform(value: string, args?: any[]) {
    return value.toUpperCase();
  }
}