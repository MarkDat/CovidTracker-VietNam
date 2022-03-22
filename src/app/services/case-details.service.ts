import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseDetailsService {

  URL = "https://covid19.gov.vn/ajax/dien-bien-dich.htm";
  constructor(
    private http : HttpClient
  ) { }

  public GetCaseCovidDetails() : Observable<string>{
    return this.http.get<string>(this.URL);
  }

}
