import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyendungComponent } from './tuyendung.component';

describe('TuyendungComponent', () => {
  let component: TuyendungComponent;
  let fixture: ComponentFixture<TuyendungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuyendungComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
