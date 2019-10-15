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
  private catsJSON;

  constructor(private httpClient:HttpClient) { }

  getCats(): Observable<Cat[]> {

    return this.httpClient.get<Cat[]>(this.catsUrl);
  }

  getCat(id: number): Observable<Cat> {

  return this.getCats().pipe(
    map((cats: Cat[]) => cats.find(cat => cat.id === id)));
}

getCatsAsClass(): Cat[] {

  let catsAsClass: Cat[];
  this.getCats()
      .subscribe({
        next:cats => this.catsJSON = cats,
        complete: () =>
          this.catsJSON.array.forEach(catJSON => {
            catsAsClass.push(new Cat(catJSON.id,
              catJSON.name,
              catJSON.birthday,
              catJSON.gender,
              catJSON.colour,
              catJSON.sireId,
              catJSON.damId,
              catJSON.title,
              catJSON.breed,
              catJSON.photoLink))
          })
        });

  return catsAsClass;
}
}
