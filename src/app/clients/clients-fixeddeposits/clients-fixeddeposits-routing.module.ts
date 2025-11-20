import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsFixedDepositsComponent } from './clients-fixeddeposits.component';

const routes: Routes = [{ path: '', component: ClientsFixedDepositsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsFixedDepositsRoutingModule {}
