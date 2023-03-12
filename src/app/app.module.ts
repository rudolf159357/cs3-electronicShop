import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { CardComponent } from './components/card/card.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { AdversingComponent } from './components/adversing/adversing.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { TvComponent } from './views/tv/tv.component';
import { PhonesComponent } from './views/phones/phones.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { IphonesComponent } from './views/iphones/iphones.component';
import { MacbooksComponent } from './views/macbooks/macbooks.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    CardComponent,
    CardBoxComponent,
    AdversingComponent,
    FooterComponent,
    HomeComponent,
    TvComponent,
    PhonesComponent,
    NotebooksComponent,
    IphonesComponent,
    MacbooksComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
