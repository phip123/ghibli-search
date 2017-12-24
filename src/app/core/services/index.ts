import {FilmService} from './films.service';
import {PersonsService} from './people.service';
import {SpeciesService} from './species.service';

export const services: any[] = [FilmService, PersonsService, SpeciesService];

export * from './films.service';
export * from './people.service';
export * from './species.service';
