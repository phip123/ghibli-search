import { NgModule } from '@angular/core';

import { components } from './components';
import { MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [MaterialModule, RouterModule],
  declarations: [...components],
  exports: [...components, MaterialModule],
})
export class SharedModule {}
