import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person.model';
import {Observable} from 'rxjs/Observable';
import {catchError, filter, map} from 'rxjs/operators';
import * as urls from '../util/url.constants';

@Injectable()
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  public getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(urls.peopleUrl).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  public findPeopleForFilm(id: string): Observable<Person[]> {
    return this.http.get<Person[]>(urls.peopleUrl).pipe(
      map((people: Person[]) => {
        return people.filter((p: Person) => this.isInMovie(p, id));
      }),
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  private isInMovie(p: Person, id: string): boolean {
    const url = `${urls.filmUrl}/${id}`;
    return p.films.some(u => u === url);
  }
}
