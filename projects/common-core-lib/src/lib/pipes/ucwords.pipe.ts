import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucwords'
})
export class UcwordsPipe implements PipeTransform {

  transform(str: any): string {
    return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
  }

}
