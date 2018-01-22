import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Species} from '@app/core/models/species.model';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesDetailComponent implements OnInit {

  @Input('species')
  species: Species;

  constructor() {
  }

  ngOnInit() {
  }

}
