// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { CallbackComponent } from './zitadel/callback/callback.component';
// import { SelfServiceModule } from './self-service/self-service.module';


// const routes: Routes = [
//   { path: 'callback', component: CallbackComponent },
//   { path: 'self-service', component: SelfServiceComponent },
//   { path: '**', component: NotFoundComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CallbackComponent } from './zitadel/callback/callback.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },

  // ✅ Lazy-load the Self Service module (recommended way)
  {
    path: 'self-service',
    loadChildren: () =>
      import('./self-service/self-service.module').then(
        (m) => m.SelfServiceModule
      ),
    data: { title: 'Self Service', breadcrumb: 'Self Service' }
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
