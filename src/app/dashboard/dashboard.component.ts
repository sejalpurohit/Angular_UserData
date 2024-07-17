import { Component, OnInit } from '@angular/core';
import userData from '../helper/userData.json';
import { from, Observable, of } from 'rxjs';
import { UserServiceService } from '../user-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  existingUsers: any[] = [];
  http: any;
  url: string = "app/helper/userData.json"



  constructor(private service: UserServiceService,private router:Router) { }



  ngOnInit(): void {
    this.existingUsers = JSON.parse(localStorage.getItem('userData') || '{}');

    this.service.newUserSubject.subscribe(user => {
      if(user != null){
        this.existingUsers.push(user[0]);
        localStorage.setItem('userData', JSON.stringify(this.existingUsers));
      }
    })

    this.service.newUserSubject.unsubscribe()
    let a = JSON.stringify(this.existingUsers)

  }

  // saveText(text: string, filename: string) {
  //   var a = document.createElement('a');
  //   a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
  //   a.setAttribute('download', filename);
  //   a.click()
  // }

  onDelete(index: number) {
   this.existingUsers.splice(index, 1)
   localStorage.setItem("userData", JSON.stringify(this.existingUsers))
  }


  onEdit(index: number, item: any) {

    this.service.editToUser(item)
    this.router.navigateByUrl('/editUser')
    

  }
}
