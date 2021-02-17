import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = environment.sigtURL;

  getCV() {
    return this.http.get(this.BaseURI + '/CV');
  }
}
