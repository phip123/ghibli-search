import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fromServices from './services/index';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
  ],
  exports: [
  ],
  declarations: [],
  providers: [...fromServices.services],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
