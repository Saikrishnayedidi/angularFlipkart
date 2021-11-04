import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterheaderComponent } from './components/filterheader/filterheader.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { AddtocardComponent } from './components/addtocard/addtocard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterheaderComponent,
    HomeComponent,
    CardsComponent,
    MobilesComponent,
    AddtocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
