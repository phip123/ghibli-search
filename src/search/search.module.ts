import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {reducers, effects} from './store';

import * as fromContainers from './containers';

import * as fromComponents from './components';
import {SharedModule} from '../shared/shared.module';


export const ROUTES: Routes = [
  {
    path: 'movies',
    component: fromContainers.FilmsSearchComponent,
  },
  {
    path: '',
    component: fromComponents.SearchDashboardComponent,
  },

];

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('search', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class SearchModule {}
