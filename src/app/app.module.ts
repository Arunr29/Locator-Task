import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { EligibilityTableComponent } from './eligibility-table/eligibility-table.component';
import { EntranceTableComponent } from './entrance-table/entrance-table.component';
import { JobEntranceTableComponent } from './job-entrance-table/job-entrance-table.component';
import { JobDetailsTableComponent } from './job-details-table/job-details-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AdminComponent,
    AdminNavComponent,
    EligibilityTableComponent,
    EntranceTableComponent,
    JobEntranceTableComponent,
    JobDetailsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    // ToastrModule,
    // ToastrModule.forRoot({
    //   preventDuplicates: true,
    //   timeOut: 15000
    // }),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
