import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  editableUserData:any={};
  existingUsers:any={};

  constructor(private service:UserServiceService, private router: Router){

  }

  ngOnDestroy() {
    this.service.editUserSubject.unsubscribe()
  }

  ngOnInit(): void {

    this.service.editUserSubject.subscribe(editableUser=>{
      this.editableUserData = editableUser[0];
    })
    





  }

  editUser(){
    localStorage.getItem("userData", )
    this.editableUserData

  }

  editUserForm = new FormGroup({
    username: new FormControl({ disabled: true}),
    name: new FormControl(),
    email: new FormControl(),
    address:new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city:new FormControl(),
      zipcode : new FormControl(),
    })
  })


  onSubmit(){

    
    this.existingUsers = JSON.parse(localStorage.getItem('userData') || '{}');
    // let i;
    let item = this.existingUsers.findIndex((i:any) => i.username === this.editUserForm.value.username)
    // item = this.editUserForm
    console.log("Sejal find ", item)
    this.existingUsers[item] = this.editUserForm.value
    localStorage.setItem('userData', JSON.stringify(this.existingUsers))
    // console.log("Sejal updated  ", JSON.stringify(this.existingUsers))
    
    
    
    this.router.navigateByUrl('/dashboard');



  }




  
  }

