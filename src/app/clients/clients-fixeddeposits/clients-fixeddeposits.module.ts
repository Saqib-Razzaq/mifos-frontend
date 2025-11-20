import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsFixedDepositsComponent } from './clients-fixeddeposits.component';

@NgModule({
  imports: [
    ClientsFixedDepositsComponent, // ✅ import instead of declare
    RouterModule.forChild([{ path: '', component: ClientsFixedDepositsComponent }])
  ]
})
export class ClientsFixedDepositsModule {}
