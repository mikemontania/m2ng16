import { Injectable } from '@angular/core';
import { Theme } from 'src/app/models/theme.model';
import { BehaviorSubject, Observable } from 'rxjs';

const THEME_KEY = 'app-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject: BehaviorSubject<Theme>;
  public theme$: Observable<Theme>;

  // Initialize themes in the constructor
  themes: Theme[] = [
    { name: 'default', backgroundColor: '#ffffff', textColor: '#000000' },
    { name: 'dark', backgroundColor: '#2c2c2c', textColor: '#ffffff' },
    // Add more themes as needed
  ];

  constructor() {
    this.themeSubject = new BehaviorSubject<Theme>(this.getStoredTheme() || this.themes[0]);
    this.theme$ = this.themeSubject.asObservable();
  }

  setTheme(theme: Theme) {
    this.setStoredTheme(theme);
    this.themeSubject.next(theme);
  }

  getTheme(themeName: string): Theme {
    return this.themes.find(theme => theme.name === themeName) || this.themes[0];
  }

  getStoredTheme(): Theme {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme ? JSON.parse(storedTheme) : null;
  }

  setStoredTheme(theme: Theme) {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }
}
