import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importar htto
import { HttpClientModule } from '@angular/common/http';
//servicios
import { ArticlesService } from './articles.service';
//scroll
import {ScrollingModule } from '@angular/cdk/scrolling'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { InfoComponent } from './info/info.component';
import { ArrowsBtnComponent } from './arrows-btn/arrows-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    InfoComponent,
    ArrowsBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule
  ],

  //agregar servicio al proveedor
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
