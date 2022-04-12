import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEkalyComponent } from './page-ekaly.component';

describe('PageEkalyComponent', () => {
  let component: PageEkalyComponent;
  let fixture: ComponentFixture<PageEkalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEkalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEkalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
