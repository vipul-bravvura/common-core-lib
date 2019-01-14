import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from 'util';

/*
 * this pipe will return integer part of the price string
 * for empty string, '0* is returned
 */
@Pipe({name: 'integerPart'})
export class IntegerPartPipe implements PipeTransform {
    transform(value: any): string {
        if (isUndefined(value) || value === null) {
            value = '0.0';
        }
        value = value.toString();
        if (value.length === 0) {
            return '0';
        }
        const indexVal = value.indexOf('.');
        if (indexVal !== -1) {
            return value.substr(0, value.indexOf('.'));
        } else {
            return value;
        }
    }
}

/*
 * this pipe will return decimal part of the price string
 * for empty string or in absence of decimal part, '0* is returned with the number of decimal places passed as argument
 */
@Pipe({name: 'decimalPart'})
export class DecimalPartPipe implements PipeTransform {
    transform(value: any, places: number = 2): string {
        if (isUndefined(value) || value === null) {
            value = '0.0';
        }
        value = value.toString();
        const indexVal = value.indexOf('.');
        if (indexVal !== -1) {
            const v = value.substr(indexVal + 1, places);
            const vLen = v.length;
            if (vLen < places) {
                const vNum = Number(v) * Math.pow(10, places - vLen);
                return vNum.toString();
            } else {
                return value.substr(indexVal + 1, places);
            }
        } else {
            return '0'.repeat(places);
        }
    }
}

/*
 * This pipe returns price * quantity and upto given decimal prices
 * todo need to make places dynamic
 */
@Pipe({name: 'totalPrice'})
export class TotalPricePipe implements PipeTransform {
    transform(value: any, quantity, places: number): string {
        return ((Number(value) * 1.00000001) * Number(quantity)).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    }
}

/*
 * This pipe returns formatted price up to given decimal prices
 * todo need to make places as dynamic
 */
@Pipe({name: 'formatPrice'})
export class FormatPricePipe implements PipeTransform {
    transform(value: any, places: number = 2): string {
        if ((isUndefined(value)) || (value === null) || (value === '')) {
            value = '0.0'     }
        value = ((Number(value) % 1) === 0) ? (value.toString() + '.000000') : (Number(value) * 1.00000001).toString();
        return value.match(/^-?\d+(?:\.\d{0,2})?/)[0];
    }
}
