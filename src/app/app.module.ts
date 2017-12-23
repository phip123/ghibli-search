import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';


import {RouterModule, Routes} from '@angular/router';
import {environment} from '@env/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {storeFreeze} from 'ngrx-store-freeze';

import * as fromContainers from './root/containers';
import * as fromComponents from './root/components';
import {CustomSerializer, effects, reducers} from './root/store';

import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from '@app/core';

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {
    path: 'search',
    loadChildren: './features/search/search.module#SearchModule'
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
    CoreModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  bootstrap: [fromContainers.AppComponent],
})
export class AppModule {
}
