import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from 'src/app/models/theme.model';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnInit {
  @Input('appTheme') themeName: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.applyTheme();
    this.themeService.theme$.subscribe(() => {
      this.applyTheme();
    });
  }

  applyTheme() {
    console.log('Applying theme:', this.themeName);
    const theme = this.themeService.getTheme(this.themeName);
    console.log('Applying theme:', theme);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', theme.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', theme.textColor);
    // Apply other styles as needed
  }
}
