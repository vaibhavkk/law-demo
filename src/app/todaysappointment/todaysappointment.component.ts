import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-todaysappointment',
  templateUrl: './todaysappointment.component.html',
  styleUrls: ['./todaysappointment.component.css']
})
export class TodaysappointmentComponent implements OnInit {
   displayedColumns = ['position', 'firstName', 'lastName', 'email', 'courtno'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {


  }
 rowClicked(row: any): void {
      console.log(row);
    }

}


export interface Element {
    position: number;
   firstName: string;
    lastName: string;
    email: string;
    courtno : number;
  }
  
  const ELEMENT_DATA: Element[] = [
    {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com',    courtno: 2},
    {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.co    m', courtno:1},
    {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.co    m', courtno : 4},
    {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.c    om', courtno : 1},
    {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com',     courtno:5}
  ];
