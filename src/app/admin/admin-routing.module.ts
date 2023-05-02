import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';



export const Adminroutes: Routes = [{

  path: '',
  component: AdminComponent,  // specially route for admin module & component.
  children: [
    { path: 'dashboard', loadChildren: () => import('src/app/admin/master/dashboard/dashboard.module').then(m => m.DashboardModule) },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    },
  ]
}];


