import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './base/home/home.component';
import { LandingComponent } from './base/landing/landing.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './contents/about/about.component';
import { PortfolioComponent } from './contents/portfolio/portfolio.component';
import { ContactComponent } from './contents/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

{ path: 'landing', component: LandingComponent},
{ path: '', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'port', component: PortfolioComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'login', component: LoginComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
