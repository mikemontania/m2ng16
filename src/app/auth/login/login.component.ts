import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  username: string;
  recuerdame: boolean = false;
  auth2: any;

  constructor(
    public router: Router,

    public _loginService: LoginService
  ) { }

  ngOnInit() { 

    this.username = localStorage.getItem('username') || '';
    if (this.username.length > 1) {
      this.recuerdame = true;
    }

  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    Swal.fire({
      title: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'info',
    });
    Swal.showLoading();

    let user: any = {username:forma.value.username, password:forma.value.password}  ;
    this._loginService.login(user, forma.value.recuerdame)
      .subscribe(correcto => {
        this.router.navigate(['/dashboard']);
        Swal.close();
      });
  }

}
