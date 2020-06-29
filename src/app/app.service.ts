import {Injectable} from "@angular/core";
import {Observable } from "rxjs";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

import {User} from "./User";
/*

import 'rxjs/add/observable/of';
*/
@Injectable()
export class ApiService {

  public getUsers(): Observable<any> {
    let fakeUsers : User[] = [{position: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com',courtno:4}, 
      {position: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com',courtno:1},
      {position: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com',courtno:2},
      {position: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com',courtno:6},
    ];
    return of(fakeUsers).pipe(delay(500));
  }

}

