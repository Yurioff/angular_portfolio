import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutModule } from './pages/about/about.module';
import { abilityModule } from './pages/ability/ability.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ContactModule } from './pages/contact/contact.module';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    abilityModule,
    PortfolioModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
