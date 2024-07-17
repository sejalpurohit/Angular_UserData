import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { User } from './helper/userTemplate';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //for Add user
  private newUser: any = [];
  public newUserSubject = new BehaviorSubject<User[]>([])

  //for Edit user
  private editUser: any = [];
  public editUserSubject = new BehaviorSubject<User[]>([])


  constructor() { }


  addToUser(item: any) {
    this.newUser.push(item);
    this.newUserSubject.next(this.newUser);
}



editToUser(item:any){

  this.editUser.push(item);
  this.editUserSubject.next(this.editUser);

}



}
