import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer';
import { environment } from 'src/environments/environment';
import { TV } from '../model/tv';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getTv(): Observable<TV>{
    return this.http.get<TV>(environment.url + "Api/tv")
  }

  getComputers(): Observable<Computer> {
    return this.http.get<Computer>(environment.url + "Api/tv/computer")
  }
  
}
