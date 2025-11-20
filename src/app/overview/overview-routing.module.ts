import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';
/** Layout Component (Shell) */
import { ShellComponent } from '../core/shell/shell.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent, // Wraps in main layout (sidebar + toolbar)
    children: [
      {
        path: '',
        component: OverviewComponent,
        data: {
          title: 'Overview',     // Shows in browser tab & page header
          breadcrumb: 'Overview',          // Shows in breadcrumb
          addBreadcrumbLink: false         // Keeps breadcrumb clean (same as official dashboard)
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
