import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardData } from '../interfaces/DashboardData';
import { baseUrl } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http :HttpClient) { }

  getDashboardData():Observable<DashboardData>{
    debugger;
    return this.http.get<DashboardData>(`${baseUrl}dashboard/get`);
  }
}
