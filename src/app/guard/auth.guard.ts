import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
      const tokenService = inject(KeycloakService);
      const router = inject(Router);
      if (tokenService.keyCloakFn.isTokenExpired()) {
        router.navigate(['login']);
        return false;
      }
      return true;
  }
  
}
