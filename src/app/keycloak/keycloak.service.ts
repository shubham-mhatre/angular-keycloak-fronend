import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*this service should run when we bootstrap our application.
 * so we need to tell our angular application that 
 * we have authentication provider i.e keycloak
 * so add it to provider section of app.module.ts file
 */
export class KeycloakService {

  constructor() { }

  async init(){
    console.log("initializing keycloack");
  }
}
