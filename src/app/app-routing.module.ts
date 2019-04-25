import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { ApplicanPremedComponent } from './applican-premed/applican-premed.component';
import { ApplicanPassportComponent } from './applican-passport/applican-passport.component';
import { ApplicantMedicalComponent } from './applicant-medical/applicant-medical.component';
import { ApplicantTesdaComponent } from './applicant-tesda/applicant-tesda.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
	},
	{
    path: 'first',
    component: FirstpageComponent,
    children:[
      {
        path:'',
        component:DashboardComponent,
      },
      {
        path:'home',
        component:HomeComponent,
			},
			{
				path: 'editprofile',
				component: EditprofileComponent
			},		
			{
				path: 'applicantlist',
				component: ApplicantlistComponent		
			},
			{
				path: 'applicantprofile',
				component: ApplicantprofileComponent,
				children:[
					{
						path:'',
						component: ApplicantdetailsComponent
					},
					{
						path: 'applicantPremed',
						component: ApplicanPremedComponent	
					},
					{
						path: 'applicantdetails',
						component: ApplicantdetailsComponent
					},
					{
						path: 'applicantPassport',
						component: ApplicanPassportComponent
					},
					{
						path: 'applicantMedical',
						component: ApplicantMedicalComponent
					},
					{
						path: 'applicantTesda',
						component: ApplicantTesdaComponent
					},
				]
			},
			
			{
				path: 'scheduled',
				component: ScheduledComponent
			},
			{
				path: 'pending',
				component: PendingComponent
			},
			{
				path: 'final',
				component: FinalApplicantComponent
			},
			{
				path: 'failed',
				component: FailedApplicantComponent
			},
			{
				path: 'changepassword',
				component: ChangepasswordComponent
			},
			{
				path: 'update',
				component: UpdateStatusComponent
			},
			{
				path: 'setschedule',
				component: SetScheduleComponent
			},
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
