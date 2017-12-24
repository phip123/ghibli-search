import {FilmsEffect} from './films.effect';
import {PersonsEffect} from './people.effect';
import {SpeciesEffect} from '@app/features/search/store/effects/species.effect';

export const effects: any[] = [FilmsEffect, PersonsEffect, SpeciesEffect];

export * from './films.effect';
export * from './people.effect';
export * from './species.effect';
