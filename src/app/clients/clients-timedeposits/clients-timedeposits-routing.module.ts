import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTimedepositsComponent } from './clients-timedeposits.component';

const routes: Routes = [{ path: '', component: ClientsTimedepositsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsTimedepositsRoutingModule { }
