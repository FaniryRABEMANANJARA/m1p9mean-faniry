import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLivreurDashboardComponent } from './page-livreur-dashboard.component';

describe('PageLivreurDashboardComponent', () => {
  let component: PageLivreurDashboardComponent;
  let fixture: ComponentFixture<PageLivreurDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLivreurDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLivreurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
