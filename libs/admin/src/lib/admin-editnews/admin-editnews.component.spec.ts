import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditnewsComponent } from './admin-editnews.component';

describe('AdminEditnewsComponent', () => {
  let component: AdminEditnewsComponent;
  let fixture: ComponentFixture<AdminEditnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditnewsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEditnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
