import {FilmListComponent} from './film-list/film-list.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {PeopleListComponent} from '@app/shared/components/people-list/people-list.component';
import {PersonDetailComponent} from '@app/shared/components/person-detail/person-detail.component';

export const components: any[] = [FilmListComponent, FilmDetailComponent, PeopleListComponent, PersonDetailComponent];

export * from './film-list/film-list.component';
export * from './film-detail/film-detail.component';
export * from './people-list/people-list.component';
export * from './person-detail/person-detail.component';
