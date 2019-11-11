import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padding'
})
export class PaddingPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    return '0'.repeat(args) + value;
  }
}
