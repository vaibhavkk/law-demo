import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SummaryComponent} from './summary/summary.component'
import {SendmessageComponent} from './sendmessage/sendmessage.component'
import {UpdateinfoComponent} from './updateinfo/updateinfo.component'
import {TodaysappointmentComponent} from './todaysappointment/todaysappointment.component'
import {SettingsComponent} from './settings/settings.component'

const routes: Routes = [
  {path:'summary', component:SummaryComponent},
  {path:'sendmessage', component:SendmessageComponent},
  {path:'updateinfo', component:UpdateinfoComponent},
  {path:'settings', component:SettingsComponent},

  {path:'todaysappointment', component:TodaysappointmentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
