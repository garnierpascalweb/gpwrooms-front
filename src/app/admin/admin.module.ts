import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { YearSynthesisGraphComponent } from './year-synthesis-graph/year-synthesis-graph.component';




@NgModule({
  declarations: [
    HomeComponent,
    CustomerListComponent,
    YearSynthesisGraphComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
