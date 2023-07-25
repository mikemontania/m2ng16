import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PagesComponent } from './pages.component';
import { LoginGuard } from '../services/service.index';

 
const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [ LoginGuard ],
      loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },
]; 
@NgModule({
    imports: [ RouterModule.forChild(pagesRoutes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}