import { Component, OnInit } from '@angular/core';
import usersData from './users/users.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'user_management';
  ngOnInit(): void {
    if (sessionStorage.getItem('usersData') === null) {
      sessionStorage.setItem('usersData', JSON.stringify(usersData));
    }
  }
}
