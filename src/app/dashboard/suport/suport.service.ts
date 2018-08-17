import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { Suport } from './suport.model';
import { EMAG_API } from '../../app.api';


@Injectable({
  providedIn: 'root'
})
export class SuportService {

  constructor(private http: HttpClient) { }

  addSuport(suport: Suport): Observable<Suport> {
    return this.http.post<Suport>(`${EMAG_API}/suport`, suport);
  }

}
