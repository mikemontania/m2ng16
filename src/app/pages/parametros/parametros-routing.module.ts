import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SectoresComponent } from './sectores/sectores.component';

const parametrosRoutes: Routes = [
  { path: 'empleados', component: EmpleadosComponent, data: { titulo: 'Empleados' } },
  { path: 'sectores', component: SectoresComponent, data: { titulo: 'Sectores' } },
  { path: 'conceptos', component: ConceptosComponent, data: { titulo: 'Conceptos' } },
];
@NgModule({
  imports: [RouterModule.forChild(parametrosRoutes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
