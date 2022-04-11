import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrestoComponent } from './loginresto.component';

describe('LoginrestoComponent', () => {
  let component: LoginrestoComponent;
  let fixture: ComponentFixture<LoginrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
