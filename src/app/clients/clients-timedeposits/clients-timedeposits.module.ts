import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsTimeDepositsComponent } from './clients-timedeposits.component';

@NgModule({
  imports: [
    ClientsTimeDepositsComponent, // ✅ import instead of declare
    RouterModule.forChild([{ path: '', component: ClientsTimeDepositsComponent }])
  ]
})
export class ClientsTimeDepositsModule {}
