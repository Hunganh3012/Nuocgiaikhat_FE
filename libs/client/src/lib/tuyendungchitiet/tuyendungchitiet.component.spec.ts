import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyendungchitietComponent } from './tuyendungchitiet.component';

describe('TuyendungchitietComponent', () => {
  let component: TuyendungchitietComponent;
  let fixture: ComponentFixture<TuyendungchitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuyendungchitietComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TuyendungchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
