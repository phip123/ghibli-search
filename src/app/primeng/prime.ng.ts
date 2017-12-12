import { InputTextModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule
  ]
})
export class PrimeNgModule {}
