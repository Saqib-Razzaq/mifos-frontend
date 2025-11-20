import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientsSharesComponent } from './clients-shares.component';

@NgModule({
  imports: [
    ClientsSharesComponent, // ✅ import instead of declare
    RouterModule.forChild([{ path: '', component: ClientsSharesComponent }])
  ]
})
export class ClientsSharesModule {}
