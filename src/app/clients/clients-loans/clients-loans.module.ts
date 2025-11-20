import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsLoansComponent } from './clients-loans.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ClientsLoansComponent }
    ]),
    ClientsLoansComponent // ✅ import instead of declare
  ]
})
export class ClientsLoansModule {}
