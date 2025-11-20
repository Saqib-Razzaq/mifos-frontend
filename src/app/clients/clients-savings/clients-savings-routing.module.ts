import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsSavingsComponent } from './clients-savings.component';

const routes: Routes = [{ path: '', component: ClientsSavingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsSavingsRoutingModule {}
