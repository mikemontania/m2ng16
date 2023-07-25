import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 
 import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    public _loginService: LoginService,
    public router: Router
  ) {}

  canActivate() {

    if ( this._loginService.estaLogueado() ) {
/*       console.log( 'PASO EL GUARD');
 */      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/login']);
      return false;
    }

  }
}
