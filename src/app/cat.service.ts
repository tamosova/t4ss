import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catsUrl = 'assets/cats.json';

  constructor(private httpClient:HttpClient) { }

  getCats(): Observable<Cat[]> {


    return this.httpClient.get<Cat[]>(this.catsUrl);
  }

  getCat(id: number): Observable<Cat> {

  return this.getCats().pipe(
    map((cats: Cat[]) => cats.find(cat => cat.id === id)));
}
}
