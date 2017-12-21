import { FilmService } from './films.service';
import {PersonsService} from './people.service';

export const services: any[] = [FilmService,PersonsService];

export * from './films.service';
export * from './people.service';
