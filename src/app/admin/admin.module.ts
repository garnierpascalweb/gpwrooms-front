import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { YearSynthesisGraphComponent } from './year-synthesis-graph/year-synthesis-graph.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './nav/nav.component';
import { YearSynthesisDatasComponent } from './year-synthesis-datas/year-synthesis-datas.component';





@NgModule({
  declarations: [
    HomeComponent,
    CustomerListComponent,
    YearSynthesisGraphComponent,
    NavComponent,
    YearSynthesisDatasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
