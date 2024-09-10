import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../users/userTemplate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  existingUsers: User[] = [];

  constructor(
    private userservice: UserserviceService,
    private routerService: Router
  ) {}
  ngOnInit(): void {
    
    // this.existingUsers = JSON.parse(
    //   sessionStorage.getItem('usersData') || '{}'
    // );

    const storedUsers = sessionStorage.getItem('usersData');
    this.existingUsers = storedUsers ? JSON.parse(storedUsers) : [];

    this.userservice.newUserSubject.subscribe((user:any[]) => {
      if (user.length >= 1) {
        this.existingUsers.push(user[user.length - 1]);
      }
    });

    sessionStorage.setItem('usersData', JSON.stringify(this.existingUsers));
  }

  routeToAddUser() {
    this.routerService.navigateByUrl('/dashboard/adduser');
  }

  deleteUser(index: number) {
    this.existingUsers.splice(index, 1);
    sessionStorage.setItem('usersData', JSON.stringify(this.existingUsers));
  }

  editUser(index: number, users: any) {
    this.userservice.editUserFn(users);

    this.routerService.navigateByUrl('/dashboard/edituser');
  }

  ngOnDestory() {}
}
