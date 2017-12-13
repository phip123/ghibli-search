import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimeNgModule} from './primeng/prime.ng';
import {services} from './services';
import {components} from './components';


@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  providers: [...services],
  declarations: [...components],
  exports: [...components, CommonModule]
})
export class SharedModule {}
