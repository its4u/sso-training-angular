import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './features/top-bar/top-bar.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductService } from "@core/services/product.service";
import { HttpClientModule } from "@angular/common/http";

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { AppAuthGuard } from './app-auth-guard';


export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({config: 'assets/auth/keycloak.json'});
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent
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
    ProductService,
    AppAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
