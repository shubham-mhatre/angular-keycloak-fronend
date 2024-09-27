
when we hit root url of application http://localhost:4200, we will redirect to keycloak login page.

![image](https://github.com/user-attachments/assets/732ee054-c463-4019-b55e-9ffe3abc3027)

while login token API will get called.

![image](https://github.com/user-attachments/assets/24c7c02b-a77e-4536-889d-cb30e03e57e1)

in response we will get accesstoken, idtoken, expiry time etc

![image](https://github.com/user-attachments/assets/918105f0-4880-4e23-a928-01faff467c0b)

while calling backend API, which is written in spring boot web app, we will pass this token in authorization header as Bearer token

![image](https://github.com/user-attachments/assets/81c75dfa-ad40-47c8-8ca1-ab0e5fb52156)

![image](https://github.com/user-attachments/assets/5ca09be2-e0b2-43f7-a420-47ac07f6df67)


# AngularKeycloak

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
