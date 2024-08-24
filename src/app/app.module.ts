import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { KeycloakService } from './keycloak/keycloak.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export function kcFactory(kcService:KeycloakService){
  return () => kcService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,//as we want it to run when our app boostrap.
      deps:[KeycloakService],//it dependent on the service that we have created so add deps.
      useFactory:kcFactory,//instead of class, we call the method, so used "useFactory"
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
