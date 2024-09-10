import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdituserComponent } from './edituser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup } from '@angular/forms';

describe('EdituserComponent', () => {
  let component: EdituserComponent;
  let fixture: ComponentFixture<EdituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdituserComponent],
      imports: [ MatCardModule, ReactiveFormsModule ]


    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdituserComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
