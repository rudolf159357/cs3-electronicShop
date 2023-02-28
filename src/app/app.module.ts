import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { CardComponent } from './components/card/card.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { AdversingComponent } from './components/adversing/adversing.component';
import { PopularBrandsComponent } from './components/popular-brands/popular-brands.component';
import { BrandComponent } from './components/brand/brand.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    CardComponent,
    CardBoxComponent,
    AdversingComponent,
    PopularBrandsComponent,
    BrandComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
