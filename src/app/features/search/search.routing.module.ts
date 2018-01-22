import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as fromContainers from './containers';

import * as fromComponents from './components';

import * as fromGuards from './guards';

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
    path: 'locations',
    component: fromContainers.LocationsSearchComponent,
  },
  {
    path: 'people',
    children: [
      {
        path: ':personId',
        canActivate: [fromGuards.PersonExistsGuard],
        component: fromContainers.PersonItemComponent
      },
      {
        path: '',
        canActivate: [fromGuards.PersonsGuard],
        component: fromContainers.PeopleSearchComponent,
      }
    ]
  },
  {
    path: 'species',
    children: [
      {
        path: ':speciesId',
        canActivate: [fromGuards.SpeciesExistsGuard],
        component: fromContainers.SpeciesItemComponent
      },
      {
        path: '',
        canActivate: [fromGuards.SpeciesGuard],
        component: fromContainers.SpeciesSearchComponent
      }
    ]
  },
  {
    path: '',
    component: fromComponents.SearchDashboardComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class SearchRoutingModule {
}
