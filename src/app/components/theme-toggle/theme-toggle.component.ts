import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/models/theme.model';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">Toggle Theme</button>
  `,
})
export class ThemeToggleComponent implements OnInit {
  currentTheme: Theme;
  @Output() themeChanged: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      console.log('Received theme:', theme);
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    console.log(2);
    const currentThemeIndex = this.themeService.themes.indexOf(this.currentTheme);
    const nextThemeIndex = (currentThemeIndex + 1) % this.themeService.themes.length;
    const nextTheme = this.themeService.themes[nextThemeIndex];

    this.themeService.setTheme(nextTheme);
    this.themeChanged.emit(nextTheme); // Emitir el evento con el nuevo tema
  }
}
