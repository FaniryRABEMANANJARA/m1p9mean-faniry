import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLivreurComponent } from './page-livreur.component';

describe('PageLivreurComponent', () => {
  let component: PageLivreurComponent;
  let fixture: ComponentFixture<PageLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
