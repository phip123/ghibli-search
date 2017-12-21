import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {services} from './services/index';
import * as fromModels from './models';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ...fromModels,
  ],
  declarations: [],
  providers: [...services],
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
