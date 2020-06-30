import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.css']
})
export class UpdateinfoComponent implements OnInit {
 displayedColumns = ['position', 'firstName', 'lastName', 'email', 'courtno'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {

  }
applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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
