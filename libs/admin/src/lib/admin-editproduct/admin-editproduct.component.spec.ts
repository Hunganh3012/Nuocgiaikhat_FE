import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditproductComponent } from './admin-editproduct.component';

describe('AdminEditproductComponent', () => {
  let component: AdminEditproductComponent;
  let fixture: ComponentFixture<AdminEditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditproductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
