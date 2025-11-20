import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginActivitiesRoutingModule } from './login-activities-routing.module';
import { LoginActivitiesComponent } from './login-activities.component';

@NgModule({
  imports: [
    CommonModule,
    LoginActivitiesRoutingModule,
    LoginActivitiesComponent // ✅ Import instead of declare
  ]
})
export class LoginActivitiesModule {}
