import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {services} from './services';
import {components} from './components';
import {MaterialModule} from './MaterialModule';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [...services],
  declarations: [...components],
  exports: [...components, CommonModule]
})
export class SharedModule {}
