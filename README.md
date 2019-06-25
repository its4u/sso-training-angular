# SsoTrainingAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

# Red Hat SSO integration

1. Add keycloak module

    npm install keycloak-angular@5.1.0 --save

2. Modify AppModule to use KeycloakService

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule, APP_INITIALIZER } from '@angular/core';
    
    import { AppRoutingModule } from './app-routing.module';
    import { HttpClientModule } from "@angular/common/http";
    
    import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
    
    
    export function initializer(keycloak: KeycloakService): () => Promise<any> {
        return (): Promise<any> => keycloak.init({config: 'assets/auth/keycloak.json'});
    }
    
    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        KeycloakAngularModule
    ],
    providers: [
        {
        provide: APP_INITIALIZER,
        useFactory: initializer,
        multi: true,
        deps: [KeycloakService]
        },
    bootstrap: [AppComponent]
    })
    export class AppModule { }


3. Copy keycloak.json from Red Hat SSO to the assets folder.

4. Define a guard to verify that the authenticated user has the roles defined on route.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
