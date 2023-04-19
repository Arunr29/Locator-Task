import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component'

import { EligibilityTableComponent } from './eligibility-table/eligibility-table.component';
import { EntranceTableComponent } from './entrance-table/entrance-table.component';
import { JobEntranceTableComponent } from './job-entrance-table/job-entrance-table.component';
import { JobDetailsTableComponent } from './job-details-table/job-details-table.component';

import { AdminNavComponent } from './admin-nav/admin-nav.component';

import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'eligibilityTable', component: EligibilityTableComponent
  },
  {
    path: 'entranceTable', component: EntranceTableComponent
  },
  {
    path: 'jobEntrance', component: JobEntranceTableComponent
  },
  {
    path: 'jobDetail', component: JobDetailsTableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
