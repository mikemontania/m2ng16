import { Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
 
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(public _loginService: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

 
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._loginService.token}`
        }
      });
    
    return next.handle(request);
  }
}
