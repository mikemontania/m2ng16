import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { DashboardComponent } from './dashboard/dashboard.component';
 
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
 
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
   
   
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
