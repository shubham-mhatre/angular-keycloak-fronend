import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  

  registerUser(userDetails: any): Observable<any> {
    debugger;
    return this.http.post(`${baseUrl}registration`, userDetails);
  }
}
