import { Component, OnInit } from '@angular/core';
import userData from './helper/userData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'userManagement';

  constructor(){
  }
  ngOnInit(): void {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    

  }

}
