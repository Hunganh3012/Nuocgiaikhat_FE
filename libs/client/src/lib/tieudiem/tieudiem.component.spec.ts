import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieudiemComponent } from './tieudiem.component';

describe('TieudiemComponent', () => {
  let component: TieudiemComponent;
  let fixture: ComponentFixture<TieudiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TieudiemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TieudiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
