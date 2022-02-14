import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'profile', loadChildren: () => import('./route-modules/profile/profile.module').then(m => m.ProfileModule) }, 
  { path: 'dashboard', loadChildren: () => import('./route-modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'expenses', loadChildren: () => import('./route-modules/expenses/expenses.module').then(m => m.ExpensesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
