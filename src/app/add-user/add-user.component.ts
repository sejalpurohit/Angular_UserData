import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
const id=11;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent  implements OnInit{
  constructor( private router:Router, private service:UserServiceService){

  }
  ngOnInit(): void {
    var obj = JSON.parse(localStorage.getItem('userData')  || '{}');
    console.log("Sejal ", JSON.stringify(obj))
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
