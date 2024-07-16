import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from './userService';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor( private router:Router, private service:UserService){

  }
  addUserForm = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    address:new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city:new FormControl(),
      zipcode : new FormControl(),
    })
   
  })


  onSubmit() {

    this.service.addToUser(this.addUserForm.value);
    this.router.navigateByUrl('/dashboard')


  }
 

}
