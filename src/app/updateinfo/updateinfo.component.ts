import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatTable} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {
 displayedColumns = ['position', 'firstName', 'lastName', 'email', 'courtno','action'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayList =  ELEMENT_DATA; 
  local_data : any ;
  action : string;
 @ViewChild(MatTable,{static:true}) table: MatTable<any>; 
  constructor( public dialog: MatDialog , 
     @Inject(MAT_DIALOG_DATA) public data: Element) {
    console.log(data);
    this.local_data = {...data};
   this.action = this.local_data.action;
}

  ngOnInit(): void {

  }
applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
   //  this.displayList.filter = filterValue;
	for (let e of this.displayList) {
	if ( e['firstName'].trim().toLowerCase() == filterValue  ) {
	console.log( e,  e['firstName'] ,  e['firstName'].trim().toLowerCase() == filterValue ,  " and ", filterValue ); 
        // this value is found and is to be displayed in the table
        this.OpenDialog("Searched "+e['firstName'], e); 
	} 
        }
	}
 
 rowClicked(row: any): void {
      console.log(row);
    }

 OpenDialog(action:string,row:any) : void {
	row.action = action; 
        const dialogRef = this.dialog.open(DialogBoxComponent,{
	width:'250px' , data:row
      });
	console.log(row , "inside opendialog");
}

   editField:string; 
updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.displayList[id][property] = editField;
//	console.log(editField, id, property , "this will change");
    }

changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
//	console.log("changed value", this.editField, id);
    }
}

/*
 dialogRef.afterClosed().subscribe(result => {

      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });



addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
*/




export interface Element {
    position: number;
   firstName: string;
    lastName: string;
    email: string;
    courtno : number;
    action : string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com',    courtno: 2, action : 'Update'},
    {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.co    m', courtno:1 , action: 'Update'},
    {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.co    m', courtno : 4, action: 'Update'},
    {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.c    om', courtno : 1, action: 'Update'},
    {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com',     courtno:5, action:'Update'}
  ];
