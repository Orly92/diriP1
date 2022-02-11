import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './shared/error/error.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NewWineComponent } from './new-wine/new-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WinesComponent,
    ContactComponent,
    PageTitleComponent,
    WineCardComponent,
    WineDetailComponent,
    ErrorComponent,
    NewWineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
