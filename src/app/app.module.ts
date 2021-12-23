import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { WinesComponent } from './wines/wines.component';
import { ContactComponent } from './contact/contact.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { WineCardComponent } from './shared/wine-card/wine-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WinesComponent,
    ContactComponent,
    PageTitleComponent,
    WineCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
