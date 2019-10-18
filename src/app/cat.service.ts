import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catsUrl = 'https://kurbobs.benn0.be/cats';
  catsJSON;
  catsAsClass: Cat[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCats(): Observable<Cat[]> {

    return this.httpClient.get<Cat[]>(this.catsUrl);
  }

  getCatsAsClass(): Cat[] {
    this.catsAsClass = [];
    this.getCats()
      .subscribe({
        next: cats => this.catsJSON = cats,
        complete: () => {
          this.catsJSON.forEach(catJSON => {
            this.catsAsClass.push(new Cat(catJSON))
          });
        }
      });
    return this.catsAsClass;
  }

  getCat(id: number): Observable<Cat> {

    return this.getCats().pipe(
      map((cats: Cat[]) => cats.find(cat => cat.id === id)));
  }

  addCat(cat: Cat): Observable<Cat> {
    console.log("adding", cat);
    return this.httpClient.post<Cat>(this.catsUrl+'/add', cat, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    };
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}


