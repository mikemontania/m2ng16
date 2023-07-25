import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SectoresComponent } from './sectores/sectores.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmpleadosComponent,
    SectoresComponent,
    ConceptosComponent
  ],
  exports: [
    EmpleadosComponent,
    SectoresComponent,
    ConceptosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
