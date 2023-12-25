import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from '../template/side-nav/side-nav.component';
import { Theme } from '../models/theme.model';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  collapsed: boolean = true;
  selectedTheme: Theme;

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      this.selectedTheme = theme;
    });
  }

  ngOnInit() {
    // Puedes colocar lógica de inicialización aquí si es necesario.
  }

  onToggleSideNav(event: SideNavToggle): void {
    this.collapsed = event.collapsed;
    console.log('Collapsed:', this.collapsed);
  }
  onThemeChanged(newTheme: Theme) {
    this.selectedTheme = newTheme;
  }

}
