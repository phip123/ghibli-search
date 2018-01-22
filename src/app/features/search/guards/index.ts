import {FilmsGuard} from './films.guard';
import {FilmExistsGuard} from './film-exists.guard';
import {PersonExistsGuard} from './person-exists.guard';
import {PersonsGuard} from '@app/features/search/guards/persons.guard';
import {SpeciesGuard} from '@app/features/search/guards/species.guard';
import {SpeciesExistsGuard} from '@app/features/search/guards/species-exists';

export const guards: any[] = [FilmsGuard, FilmExistsGuard, PersonExistsGuard, PersonsGuard, SpeciesGuard, SpeciesExistsGuard];

export * from './films.guard';
export * from './film-exists.guard';
export * from './person-exists.guard';
export * from './persons.guard';
export * from './species.guard';
export * from './species-exists';
