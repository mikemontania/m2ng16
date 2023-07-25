import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SublevelMenuComponent } from './side-nav/sublevel-menu.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    SublevelMenuComponent,
    DashboardComponent,
     SettingsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
