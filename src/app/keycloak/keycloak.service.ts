import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

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

  private keyCloak :Keycloak | undefined;
  private profile :UserProfile | undefined;

  get keyCloakFn(){
    if(!this.keyCloak){
      this.keyCloak=new Keycloak({
        url:"http://localhost:8080/",
        clientId:"my-app",
        realm:"keycloak-learning"
      });
    }
    return this.keyCloak;
  }

  get userProfile() : UserProfile | undefined {
    return this.profile;
  }

  async init(){
    console.log("authenticationg user . . .");
    const authenticated = await this.keyCloakFn?.init({
      onLoad:"login-required"
    });

    if(authenticated){
      console.log("user authenticated successfully . . .");
      this.profile = (await this.keyCloakFn?.loadUserProfile) as UserProfile;
      this.profile.token=this.keyCloak?.token;
    }
  }

  login(){
    return this.keyCloakFn?.login();
  }

  logout(){
    return this.keyCloakFn?.logout({redirectUri:"http://localhost:4200"});
  }
}
