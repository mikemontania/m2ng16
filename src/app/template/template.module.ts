import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SublevelMenuComponent } from './side-nav/sublevel-menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SublevelMenuComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        SideNavComponent,
        SublevelMenuComponent,
        FooterComponent
    ]
})
export class TemplateModule { }
