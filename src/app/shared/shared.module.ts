import { NgModule } from '@angular/core';

import { components } from './components';
import { MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MaterialModule, RouterModule, CommonModule],
  declarations: [...components],
  exports: [...components, MaterialModule,CommonModule],
})
export class SharedModule {}
