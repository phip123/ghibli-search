import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Person} from '@app/core/models/person.model';
import {Species} from '@app/core/models/species.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailComponent implements OnInit {

  @Input('person')
  person: Person;

  @Input('species')
  species: Species;

  @Input('speciesLoading')
  speciesLoading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
