import {NgModule} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatExpansionModule, MatIconModule, MatButtonModule],
  exports: [MatExpansionModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {
}
