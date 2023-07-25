import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VerificaTokenGuard } from "../services/service.index";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";

 


const childRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [VerificaTokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'dashboard', component: DashboardComponent, canActivate: [VerificaTokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'settings', component: SettingsComponent, canActivate: [VerificaTokenGuard], data: { titulo: 'settings' } },
    
    {
      path: 'parametros', // Prefijo para las rutas de parámetros
      loadChildren: () => import('./parametros/parametros.module').then(m => m.ParametrosModule)
    },
  
]
 
@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
