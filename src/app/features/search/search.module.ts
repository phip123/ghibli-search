import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {effects, reducers} from './store';

import * as fromContainers from './containers';

import * as fromComponents from './components';

import * as fromGuards from './guards';
import {SharedModule} from '@app/shared/shared.module';
import {SearchRoutingModule} from './search.routing.module';


@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    SearchRoutingModule,
    SharedModule,
    StoreModule.forFeature('search', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class SearchModule {}
