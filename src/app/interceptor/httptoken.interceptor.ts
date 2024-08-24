import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable()
export class HttptokenInterceptor implements HttpInterceptor {

  constructor(private keyCloakService:KeycloakService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.keyCloakService.keyCloakFn.token;
    debugger;
    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }

}
