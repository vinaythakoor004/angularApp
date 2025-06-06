import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) return '';

    return value.toUpperCase();
  }

}
