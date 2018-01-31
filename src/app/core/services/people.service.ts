import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person.model';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import * as urls from '../util/url.constants';
import {forkJoin} from 'rxjs/observable/forkJoin';

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
        return people.filter((p: Person) => isInMovie(p, id));
      }),
      catchError((error: any) => Observable.throw(error.json())),
    );
  }


  public getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${urls.peopleUrl}/${id}`).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  public findPeopleForSpecies(id: string): Observable<Person[]> {
    return this.http.get<Person[]>(urls.peopleUrl).pipe(
      map((people: Person[]) => {
        return people.filter((p: Person) => isOfSpecies(p, id));
      }),
      catchError((error: any) => Observable.throw(error.json())),
    );
  }

  public findPeopleForLocation(residents: string[]): Observable<Person[]> {
    const list: Observable<Person>[] = residents.map(s => this.http.get<Person>(s).pipe(
      catchError(err => Observable.throw(err.json()))
    ));

    return forkJoin(...list);
  }
}

function isOfSpecies(person: Person, id: string): boolean {
  const url = `${urls.speciesUrl}/${id}`;
  return person.species === url;
}

function isInMovie(p: Person, id: string): boolean {
  const url = `${urls.filmUrl}/${id}`;
  return p.films.some(u => u === url);
}
