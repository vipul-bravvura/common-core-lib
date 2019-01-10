import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phonenumber'})
export class PhoneNumberPipe implements PipeTransform {
    transform(str: any): string {
        return '(' + str.substr(0, 3) + ') ' + str.substr(3, 3) + '-' + str.substr(6, 10);
    }
}
