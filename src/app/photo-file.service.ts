import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './cat-general/cat';

@Injectable({
  providedIn: 'root'
})
export class PhotoFileService {
  private photosUrl = 'https://kurbobs.benn0.be/cats/';

  constructor(private httpClient: HttpClient) { }

  uploadPhoto(id:number, uploadData:FormData):Observable<Object>{
    return this.httpClient.post(`${this.photosUrl}${id}/addPhoto`, uploadData);
  }
}
