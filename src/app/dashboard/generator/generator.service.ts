import { Injectable } from '@angular/core';


import { EMAG_API } from '../../app.api';
import { HttpClient } from '@angular/common/http';
import { EMAG2 } from './EMAG2.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient) { }

  search(emag2: EMAG2): Observable<string[]> {
    return this.http.post<string[]>(`${EMAG_API}/search`, emag2);
  }

}
