import { Component, enableProdMode, OnInit } from '@angular/core';
import { UserService } from '../user/userService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit {
  existingUsers: any[] = [];
  constructor(private service: UserService) {

  }

  ngOnInit() {
    //existimg Users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.existingUsers = json;
      })



    //new User from User Component
    this.service.newUserSubject.subscribe(data => {
      this.existingUsers.push(data[0])
    })


  }


  onEdit() {

  }


  onDelete() {

  }


}
