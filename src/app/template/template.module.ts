import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';  
import { SideNavComponent } from './side-nav/side-nav.component';
import { SublevelMenuComponent } from './side-nav/sublevel-menu.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule, 
    ],
    declarations: [
        HeaderComponent,
        SideNavComponent,
        SublevelMenuComponent
    ],
    exports: [ 
        HeaderComponent,
        SideNavComponent,
        SublevelMenuComponent
    ]
})
export class TemplateModule { }
