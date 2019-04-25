import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { PendingComponent } from './pending/pending.component';
import { SetScheduleComponent } from './set-schedule/set-schedule.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { FailedApplicantComponent } from './failed-applicant/failed-applicant.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { ApplicanPremedComponent } from './applican-premed/applican-premed.component';
import { ApplicanPassportComponent } from './applican-passport/applican-passport.component';
import { ApplicantMedicalComponent } from './applicant-medical/applicant-medical.component';
import { ApplicantTesdaComponent } from './applicant-tesda/applicant-tesda.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavComponent,
    HomeComponent,
    EditprofileComponent,
    ApplicantlistComponent,
    ScheduledComponent,
    UpdateStatusComponent,
    PendingComponent,
    SetScheduleComponent,
    FinalApplicantComponent,
    FailedApplicantComponent,
    LoginComponent,
    ChangepasswordComponent,
    FooterComponent,
    FirstpageComponent,
    ApplicantprofileComponent,
    ApplicantdetailsComponent,
    ApplicanPremedComponent,
    ApplicanPassportComponent,
    ApplicantMedicalComponent,
    ApplicantTesdaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
