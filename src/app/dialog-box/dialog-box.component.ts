import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Element {
      position: number;
     firstName: string;
      lastName: string;
      email: string;
      courtno : number;
    }




@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  action : string; 
  local_data : any;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
 @Inject(MAT_DIALOG_DATA) public data: Element) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
    console.log(this.local_data);
}

closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
