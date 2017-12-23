import {Component, Input, OnInit} from '@angular/core';
import {Person} from '@app/core/models/person.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input('person')
  person: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
