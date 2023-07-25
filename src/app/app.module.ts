import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { InterceptorService } from './services/service.index';
import { ServiceModule } from './services/service.module';
import { NopagefoundComponent } from './template/nopagefound/nopagefound.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
     FormsModule,
    ReactiveFormsModule,
    ServiceModule, 
  ],
  providers: [ 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
