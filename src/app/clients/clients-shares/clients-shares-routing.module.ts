import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsSharesComponent } from './clients-shares.component';

const routes: Routes = [{ path: '', component: ClientsSharesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsSharesRoutingModule { }
