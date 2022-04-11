import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkalyBeneficeComponent } from './ekaly-benefice.component';

describe('EkalyBeneficeComponent', () => {
  let component: EkalyBeneficeComponent;
  let fixture: ComponentFixture<EkalyBeneficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkalyBeneficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkalyBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
