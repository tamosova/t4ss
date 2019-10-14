import { Injectable } from '@angular/core';
import { CatteryInfo } from '././cattery-info';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  })
export class MarkerCatteryService {
  private catteriesUrl = 'assets/catteries.json';
  constructor(private httpClient:HttpClient) { }

  getCatteries(): Observable<CatteryInfo[]> {
    return this.httpClient.get<CatteryInfo[]>(this.catteriesUrl);
  }

}
