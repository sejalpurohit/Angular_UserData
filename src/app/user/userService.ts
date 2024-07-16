import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../assets/userTemplate';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private newUser:any =[];
    public newUserSubject = new BehaviorSubject<User[]>([])
  

    addToUser(item: any) {
        this.newUser.push(item);
        this.newUserSubject.next(this.newUser);
      }
    


}
