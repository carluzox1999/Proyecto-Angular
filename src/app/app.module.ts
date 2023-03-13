import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { appRouterProviders, routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [ appRouterProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
