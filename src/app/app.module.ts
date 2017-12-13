import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './containers/app.component';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {PrimeNgModule} from '../shared/primeng/prime.ng';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from '../search/store/reducers';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {storeFreeze} from 'ngrx-store-freeze';
import { FilmListComponent } from '../shared/components/film-list/film-list.component';
import {SharedModule} from 'primeng/primeng';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search'},
  {
    path: 'search',
    loadChildren: '../search/search.module#SearchModule'
  }
];

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),

    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
