import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdduserComponent } from './dashboard/adduser/adduser.component';
import { EdituserComponent } from './dashboard/edituser/edituser.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'adduser', component: AdduserComponent },
      { path: 'edituser', component: EdituserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
