import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaseCovid } from '../Models/case-covid';

@Injectable({
  providedIn: 'root'
})
export class CovidCaseService {

  URL = "https://static.pipezero.com/covid/data.json";
  constructor(
    private http : HttpClient
  ) { }

  public GetCaseCovids() : Observable<CaseCovid>{
    return this.http.get<CaseCovid>(this.URL);
  }
}
