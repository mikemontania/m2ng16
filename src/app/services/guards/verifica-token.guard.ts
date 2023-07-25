import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { LoginService } from '../login/login.service';
@Injectable()
export class VerificaTokenGuard implements CanActivate {
  constructor(
               public _loginService: LoginService,
               public _router: Router
    ) {}
  canActivate(): Promise<boolean> | boolean {
    console.log('Inicio de VerificaTokenGuard');
    let token = this._loginService.token;
    let payload = JSON.parse(atob(token.split('.')[1]));
    // console.log('exp', payload.exp * 1000);
    // console.log('ini', payload.iat * 1000);
    let expirado = this.expirado(payload.exp);

    if (expirado) {
      this._router.navigate(['/login']);
      return false;
    }



    return this.verificaRenueva(payload.exp);
  }

  verificaRenueva(fechaExp: number): Promise<boolean> {
   return new Promise ((resolve, rejet) => {
     let tokenExp = new Date( fechaExp * 1000);
     let ahora = new Date();
     ahora.setTime(ahora.getTime() + 10 * 60 * 60 * 1000);
     // ahora.setTime(ahora.getTime() + 10  * 60 * 1000);
     console.log('tokenExp ', tokenExp);
     console.log('ahora' , ahora);

     if (tokenExp.getTime() > ahora.getTime()) {
      resolve(true);
     } else {
       this._loginService.actualizarToken().subscribe( () => {
        resolve(true);
       }, () => {
        this._router.navigate(['/login']);
        rejet(false);
       }
       );
     }
   });
  }

  expirado(fechaExp: number) {
    let ahora = new Date().getTime() / 1000;
    if ( fechaExp < ahora) {
       return true;
    } else {
      return false;
    }

  }
}
