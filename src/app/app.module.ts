import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './containers/app.component';
import {RouterModule, Routes} from '@angular/router';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../environments/environment';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {PrimeNgModule} from './primeng/prime.ng';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search'},
  {
    path: 'search',
    loadChildren: '../search/search.module#SearchModule'
  }
];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forFeature('search',{})
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
