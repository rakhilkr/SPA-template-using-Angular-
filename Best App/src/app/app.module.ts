import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { HomeComponent } from './base/home/home.component';
import { LandingComponent } from './base/landing/landing.component';
import { AboutComponent } from './contents/about/about.component';
import { HeadComponent } from './nav/head/head.component';
import { PortfolioComponent } from './contents/portfolio/portfolio.component';
import { ContactComponent } from './contents/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    AboutComponent,
    HeadComponent,
    PortfolioComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
