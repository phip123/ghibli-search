import {FilmService} from './films.service';
import {PersonsService} from './people.service';
import {SpeciesService} from './species.service';
import {LocationService} from './location.service';

export const services: any[] = [FilmService, PersonsService, SpeciesService, LocationService];

export * from './films.service';
export * from './people.service';
export * from './species.service';
export * from './location.service';
