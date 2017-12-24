import {FilmsGuard} from './films.guard';
import {FilmExistsGuard} from './film-exists.guard';
import {PersonExistsGuard} from './person-exists.guard';
import {PersonsGuard} from '@app/features/search/guards/persons.guard';

export const guards: any[] = [FilmsGuard, FilmExistsGuard, PersonExistsGuard, PersonsGuard];

export * from './films.guard';
export * from './film-exists.guard';
export * from './person-exists.guard';
export * from './persons.guard';
