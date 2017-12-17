import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from './services';
import { components } from './components';
import { MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  providers: [...services],
  declarations: [...components],
  exports: [...components, CommonModule, MaterialModule],
})
export class SharedModule {}
