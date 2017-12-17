import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {storeFreeze} from 'ngrx-store-freeze';
import {SharedModule} from '../shared/shared.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { reducers, effects, CustomSerializer } from './store';

import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search'},
  {
    path: 'search',
    loadChildren: '../search/search.module#SearchModule'
  },
  {
    path: 'about',
    component: fromComponents.AboutComponent
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
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  bootstrap: [fromContainers.AppComponent],
})
export class AppModule {}
