import {FilmsEffect} from './films.effect';
import {PersonsEffect} from './people.effect';
import {SpeciesEffect} from '@app/features/search/store/effects/species.effect';
import {LocationsEffect} from '@app/features/search/store/effects/locations.effect';

export const effects: any[] = [FilmsEffect, PersonsEffect, SpeciesEffect, LocationsEffect];

export * from './films.effect';
export * from './people.effect';
export * from './species.effect';
export * from './locations.effect';
