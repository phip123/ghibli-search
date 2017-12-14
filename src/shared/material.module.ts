import {NgModule} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatExpansionModule, MatIconModule, MatButtonModule, MatToolbarModule],
  exports: [MatExpansionModule, MatIconModule, MatButtonModule, MatToolbarModule]
})
export class MaterialModule {
}
