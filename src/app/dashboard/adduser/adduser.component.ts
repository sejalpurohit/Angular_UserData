import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
})
export class AdduserComponent implements OnInit {
  // @Output() newUserFormData: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private userService: UserserviceService
  ) {}
  ngOnInit(): void {}

  addUserFrom = new FormGroup({
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
  onSubmitUser() {
    this.userService.addNewUser(this.addUserFrom.value);
    this.router.navigateByUrl('/dashboard');
  }
}
