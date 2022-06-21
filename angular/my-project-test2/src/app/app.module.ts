import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { ServiçosService } from './serviços.service';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiçosService],
  bootstrap: [AppComponent],
  declarations: [
    LoginComponent,
    HomeComponent
  ]
})
export class AppModule { }
