import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from './users/userTemplate';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() {}

  //creating Behaviour subject for adding new User
  private newUser: any = [];
  public newUserSubject = new BehaviorSubject<User[]>([]);

  //function to subscribe for new User
  addNewUser(userObj: any) {
    this.newUser.push(userObj);
    this.newUserSubject.next(this.newUser);
  }
  //creating Behaviour subject for adding edit User
  private editUser: any = [];
  public editUserSubject = new BehaviorSubject<User[]>([]);
  // public editUserSubject = new Subject();
  //function to subscribe for editUser
  editUserFn(editObj: {}) {
    this.editUser.push(editObj);
    this.editUserSubject.next(this.editUser);
  }



  

}
