import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';
const moment = _moment;

@Pipe({ name: 'ampm' })
export class AMPMPipe implements PipeTransform {
    transform(str: any): string {
          const formatDate = moment(new Date()).format('YYYY-MM-DD');
          return moment(formatDate + ' ' + str).format('hh:mm A');
    }
}
