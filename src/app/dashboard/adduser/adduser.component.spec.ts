import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { AdduserComponent } from './adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdduserComponent],
      imports: [ MatCardModule, ReactiveFormsModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
