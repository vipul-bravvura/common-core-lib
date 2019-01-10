import { NgModule } from '@angular/core';
import { CommonCoreLibComponent } from './common-core-lib.component';
import { FooComponent } from './foo/foo.component';
import { UcwordsPipe } from './pipes/ucwords.pipe';
import { AMPMPipe } from './pipes/custom-date.pipe';
import { OrderByPipe } from './pipes/custom-order.pipe';
import { IntegerPartPipe, DecimalPartPipe, TotalPricePipe, FormatPricePipe } from './pipes/custom-price.pipe'; 
import { GroupByPipe } from './pipes/groupby.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
@NgModule({
  imports: [
  ],
  declarations: [CommonCoreLibComponent, FooComponent, UcwordsPipe, IntegerPartPipe, DecimalPartPipe, TotalPricePipe, FormatPricePipe, GroupByPipe, PhoneNumberPipe],
  exports: [CommonCoreLibComponent, FooComponent, UcwordsPipe, IntegerPartPipe, DecimalPartPipe, TotalPricePipe, FormatPricePipe, GroupByPipe, PhoneNumberPipe]
})
export class CommonCoreLibModule { }
