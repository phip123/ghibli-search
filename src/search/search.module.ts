import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {reducers, effects} from './store';

import * as fromContainers from './containers';

import * as fromComponents from './components';

import * as fromGuards from './guards';

import {SharedModule} from '../shared/shared.module';


export const ROUTES: Routes = [
  {
    path: 'movies',
    children: [
      {
        path: ':filmId',
        canActivate: [fromGuards.FilmExistsGuard],
        component: fromContainers.FilmItemComponent
      },
      {
        path: '',
        canActivate: [fromGuards.FilmsGuard],
        component: fromContainers.FilmsSearchComponent,
      }
    ]
  },
  {
    path: 'movies',
    component: fromContainers.FilmsSearchComponent,
  },
  {
    path: 'locations',
    component: fromContainers.LocationsSearchComponent,
  },
  {
    path: 'people',
    component: fromContainers.PeopleSearchComponent,
  },
  {
    path: 'species',
    component: fromContainers.SpeciesSearchComponent,
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
  providers: [...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class SearchModule {}
