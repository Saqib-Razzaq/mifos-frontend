// src/app/overview/overview.module.ts
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { SharedModule } from '../shared/shared.module';   // ← THIS IS REQUIRED!

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    OverviewRoutingModule,
    SharedModule        // ← This gives you mat-form-field, mat-select, mat-icon, translate pipe, etc.
  ]
})
export class OverviewModule { }