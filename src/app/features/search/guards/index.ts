import {FilmsGuard} from './films.guard';
import {FilmExistsGuard} from './film-exists.guard';

export const guards: any[] = [FilmsGuard, FilmExistsGuard];

export * from './films.guard';
export * from './film-exists.guard';
