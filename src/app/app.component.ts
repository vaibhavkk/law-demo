import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {User} from "./User";
import {ApiService} from "./app.service";
import { Inject } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements 	AfterViewInit {
  name : String = "";
  displayedColumns = ['position', 'firstName', 'lastName', 'email', 'courtno'];
  dataSource = new MatTableDataSource<User>();
  
  constructor(private apiService: ApiService, private route: ActivatedRoute){
	
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  rowClicked(row: any): void {
    console.log(row);
  }

  ngOnInit() {


    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });


    this.apiService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
        //this.length = data.result.length;
      }
    );
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
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com',courtno: 2},
  {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com', courtno:1},
  {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com', courtno : 4},
  {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com', courtno : 1},
  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com', courtno:5}
];




