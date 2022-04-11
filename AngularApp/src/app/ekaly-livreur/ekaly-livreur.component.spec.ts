import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkalyLivreurComponent } from './ekaly-livreur.component';

describe('EkalyLivreurComponent', () => {
  let component: EkalyLivreurComponent;
  let fixture: ComponentFixture<EkalyLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkalyLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkalyLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
