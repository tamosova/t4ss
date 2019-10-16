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
  catsJSON;
  catsAsClass: Cat[] =[];

  constructor(private httpClient:HttpClient) { }

  getCats(): Observable<Cat[]> {

    return this.httpClient.get<Cat[]>(this.catsUrl);
  }

  getCatsAsClass(): Cat[] {
    this.getCats()
    .subscribe({
      next:cats => this.catsJSON = cats,
      complete: () => {this.catsJSON.forEach(catJSON => {
        this.catsAsClass.push(new Cat(catJSON))
      });}
    });
    return this.catsAsClass;
  }

  setCatsAsClass() {
    this.catsJSON.forEach(catJSON => {
      this.catsAsClass.push(new Cat(catJSON))
    });
  }

  getCat(id: number): Observable<Cat> {

  return this.getCats().pipe(
    map((cats: Cat[]) => cats.find(cat => cat.id === id)));
}

}

