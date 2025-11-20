import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsSavingsComponent } from './clients-savings.component';

@NgModule({
  imports: [
    ClientsSavingsComponent, // ✅ import instead of declare
    RouterModule.forChild([{ path: '', component: ClientsSavingsComponent }])
  ]
})
export class ClientsSavingsModule {}
