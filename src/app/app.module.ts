import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import {ApiService} from "./app.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatPaginatorModule} from '@angular/material/paginator';
import { SummaryComponent } from './summary/summary.component';
import {  SendmessageComponent } from './sendmessage/sendmessage.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
import { TodaysappointmentComponent } from './todaysappointment/todaysappointment.component';
import { SettingsComponent } from './settings/settings.component'
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SendmessageComponent,
    UpdateinfoComponent,
    TodaysappointmentComponent,
    SettingsComponent, 
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
 BrowserAnimationsModule,
      MatToolbarModule,
  MatPaginatorModule,  
  MatDialogModule,
   MatTableModule,
    AppRoutingModule
  ],
  providers: [ApiService, 
  {provide : MAT_DIALOG_DATA,useValue: {}},
],
  bootstrap: [AppComponent], 
  entryComponents : [DialogBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
