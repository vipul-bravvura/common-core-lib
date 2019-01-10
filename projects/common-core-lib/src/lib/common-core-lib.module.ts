import { NgModule } from '@angular/core';
import { CommonCoreLibComponent } from './common-core-lib.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [
  ],
  declarations: [CommonCoreLibComponent, FooComponent],
  exports: [CommonCoreLibComponent, FooComponent]
})
export class CommonCoreLibModule { }
