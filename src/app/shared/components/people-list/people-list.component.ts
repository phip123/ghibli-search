import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Person} from '@app/core/models/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit {

  @Input('people')
  people: Person[];

  constructor() {
  }

  ngOnInit() {
  }

}
