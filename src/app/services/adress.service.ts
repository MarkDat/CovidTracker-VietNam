import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdressService {

  URL = "http://ip-api.com/json";
  constructor(
    private http : HttpClient
  ) { }

  public GetAdress() : Observable<any>{
    return this.http.get<any>(this.URL);
  }
}
