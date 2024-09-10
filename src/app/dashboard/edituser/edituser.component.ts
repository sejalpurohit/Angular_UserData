import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from '../../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css',
})
export class EdituserComponent implements OnInit {
  existingUsers: any;
  editableUserData: any = {};
  editableUserService: any;

  editUserFrom = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      suite: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl(),
    }),
  });

  ngOnInit(): void {
    this.editableUserService = this.userService.editUserSubject.subscribe(
      (user: any) => {
        this.editableUserData = user[user.length - 1] || { address: {} };
      }
    );
  }

  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  onSubmiteditUser() {
    this.editUserFrom.value;

    this.existingUsers = JSON.parse(
      sessionStorage.getItem('usersData') || '{}'
    );

    let item = this.existingUsers.findIndex(
      (i: any) => i.username === this.editUserFrom.value.username
    );
    this.existingUsers[item] = this.editUserFrom.value;
    sessionStorage.setItem('usersData', JSON.stringify(this.existingUsers));

    this.router.navigateByUrl('/dashboard');
  }

  ngOnDestroy(): void {
    this.editableUserService.unsubscribe();
  }
}
