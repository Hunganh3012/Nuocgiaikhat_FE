import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientComponent } from './admin-client.component';

describe('AdminClientComponent', () => {
  let component: AdminClientComponent;
  let fixture: ComponentFixture<AdminClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
