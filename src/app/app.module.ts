import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import {ApiService} from "./app.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatPaginatorModule} from '@angular/material/paginator';
import { SummaryComponent } from './summary/summary.component';
import {  SendmessageComponent } from './sendmessage/sendmessage.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { TodaysappointmentComponent } from './todaysappointment/todaysappointment.component';
import { SettingsComponent } from './settings/settings.component'

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SendmessageComponent,
    UpdateinfoComponent,
    TodaysappointmentComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
 BrowserAnimationsModule,
      MatToolbarModule,
  MatPaginatorModule,  
   MatTableModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
