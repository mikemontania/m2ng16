import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  SidebarService,
  LayoutService,
  LoginGuard,
  AuthGuard,
  LoginService,
  VerificaTokenGuard,
  InterceptorService,
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ 
    LoginService, 
    LayoutService,
    SidebarService,
    LoginGuard,
    AuthGuard,
    VerificaTokenGuard,
    InterceptorService,
  ],
  declarations: []
})
export class ServiceModule { }
