import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = "http://localhost:57837/";

  getCV() {
    return this.http.get(this.BaseURI + 'CV');
  }
}
