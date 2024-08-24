import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardData } from '../interfaces/DashboardData';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http :HttpClient) { }

  baseUrl="http://localhost:8081/dashboard"

  getDashboardData():Observable<DashboardData>{
    debugger;
    return this.http.get<DashboardData>(this.baseUrl+"/get");
  }
}
