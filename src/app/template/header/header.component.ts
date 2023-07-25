import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private loginService: LoginService
  ) { }
  @Output() menuToggled = new EventEmitter<boolean>();
  menuStatus: boolean = true;

  MenuToggled() {
    this.menuStatus = !this.menuStatus;
    this.menuToggled.emit(this.menuStatus);
  }


  logout() {
    this.loginService.logout()
  }

}
