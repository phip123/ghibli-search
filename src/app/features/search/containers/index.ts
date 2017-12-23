import {FilmsSearchComponent} from './films-search/films.search.component';
import {LocationsSearchComponent} from './locations-search/locations-search.component';
import {PeopleSearchComponent} from './people-search/people-search.component';
import {SpeciesSearchComponent} from './species-search/species-search.component';
import {FilmItemComponent} from './film-item/film-item.component';
import {PersonItemComponent} from '@app/features/search/containers/person-item/person-item.component';

export const containers: any[] = [
  FilmsSearchComponent,
  LocationsSearchComponent,
  PeopleSearchComponent,
  SpeciesSearchComponent,
  FilmItemComponent,
  PersonItemComponent,
];

export * from './films-search/films.search.component';
export * from './locations-search/locations-search.component';
export * from './people-search/people-search.component';
export * from './species-search/species-search.component';
export * from './film-item/film-item.component';
export * from './person-item/person-item.component';
