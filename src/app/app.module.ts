import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandComponent } from './pages/land/land.component';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import {HighlightModule} from 'ngx-highlightjs';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandComponent,
    ProfileComponent,
    ExternalApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
