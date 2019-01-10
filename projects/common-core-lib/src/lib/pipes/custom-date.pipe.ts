import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';

@Pipe({ name: 'ampm' })
export class AMPMPipe implements PipeTransform {
    transform(str: any): string {
          const formatDate = _moment(new Date()).format('YYYY-MM-DD');
          return _moment(formatDate + ' ' + str).format('hh:mm A');
    }
}
