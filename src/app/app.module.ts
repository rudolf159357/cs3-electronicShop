import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TableComputersComponent } from './views/table-computers/table-computers.component';
import { MenuCardsComponent } from './components/menu-cards/menu-cards.component';
import { MenuBoxComponent } from './components/menu-box/menu-box.component';
import { IphonesComponent } from './views/iphones/iphones.component';
import { MacbooksComponent } from './views/macbooks/macbooks.component';

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
    TableComputersComponent,
    MenuCardsComponent,
    MenuBoxComponent,
    IphonesComponent,
    MacbooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
