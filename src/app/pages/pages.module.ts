import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TemplateModule } from "../template/template.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";


@NgModule({
  declarations: [ 
    DashboardComponent,
    PagesComponent, 
  ],
  exports: [
    DashboardComponent,
    PagesComponent],
  imports: [
    CommonModule,
    TemplateModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule,


  ],
  providers: [
  ]
})
export class PagesModule { }
