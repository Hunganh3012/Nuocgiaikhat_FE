import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddnewsComponent } from './admin-addnews.component';

describe('AdminAddnewsComponent', () => {
  let component: AdminAddnewsComponent;
  let fixture: ComponentFixture<AdminAddnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddnewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAddnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
