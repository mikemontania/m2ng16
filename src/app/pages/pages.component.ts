import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from '../template/side-nav/side-nav.component';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  collapsed: boolean = true;

  constructor() { }

  ngOnInit() {
   }
   onToggleSideNav(event: SideNavToggle): void {
    this.collapsed = event.collapsed;
    console.log('Collapsed:', this.collapsed);
}
}
