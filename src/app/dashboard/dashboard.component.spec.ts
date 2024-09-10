import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // component.existingUsers = [
    //   {
    //     id:32,
    //     name: 'User 1',
    //     username: 'user1',
    //     email: 'user1@example.com',
    //     address: {
    //       street: 'Street 1',
    //       suite: 'Suite 1',
    //       city: 'City 1',
    //       zipcode: '12345'
    //     }
    //   },
    //   {
    //     id:32,
    //     name: 'User 1',
    //     username: 'user1',
    //     email: 'user1@example.com',
    //     address: {
    //       street: 'Street 1',
    //       suite: 'Suite 1',
    //       city: 'City 1',
    //       zipcode: '12345'
    //     }
    //   }
    // ] || [];


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
