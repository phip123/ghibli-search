import {Component, Input, OnInit} from '@angular/core';
import {Species} from '@app/core/models/species.model';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  @Input('species')
  species: Species[];

  constructor() {
  }

  ngOnInit() {
  }

}
