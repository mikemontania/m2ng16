import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  menuStatus: boolean = true;

  MenuToggled() {
    this.menuStatus = !this.menuStatus;
    this.menuToggled.emit(this.menuStatus);
  }
}
