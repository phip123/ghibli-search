import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Species} from '@app/core/models/species.model';
import * as urls from '../util/url.constants';
import {catchError, filter, switchMap, take} from 'rxjs/operators';

@Injectable()
export class SpeciesService {
  constructor(private http: HttpClient) {
  }

  private hasPerson(people: string[], id: string): boolean {
    return people.includes(`${urls.peopleUrl}/${id}`);
  }

  public getSpeciesForPerson(id: string): Observable<Species> {
    return this.getAllSpecies().pipe(
      switchMap(sp => sp),
      filter(species => this.hasPerson(species.people, id)),
      take(1)
    );
  }

  public getAllSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(urls.speciesUrl).pipe(
      catchError((error: any) => Observable.throw(error.json())),
    );
  }


  getSpecies(id: string): Observable<Species> {
    return this.http.get<Species>(`${urls.speciesUrl}/${id}`).pipe(
      catchError(err => Observable.throw(err.json())),
    );
  }
}
