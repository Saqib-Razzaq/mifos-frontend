import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsLoansComponent } from './clients-loans.component';

const routes: Routes = [{ path: '', component: ClientsLoansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsLoansRoutingModule { }
