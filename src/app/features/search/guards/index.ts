import {FilmsGuard} from './films.guard';
import {FilmExistsGuard} from './film-exists.guard';
import {PersonExistsGuard} from './person-exists.guard';

export const guards: any[] = [FilmsGuard, FilmExistsGuard, PersonExistsGuard];

export * from './films.guard';
export * from './film-exists.guard';
export * from './person-exists.guard';
