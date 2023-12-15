import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
/* Se le direttive vengono importate in questo file,
cancellatele dagli import e dalle dichiarazioni per evitare errori */

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
