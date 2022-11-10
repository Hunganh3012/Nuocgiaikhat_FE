import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAnnounComponent } from './product-announ.component';

describe('ProductAnnounComponent', () => {
  let component: ProductAnnounComponent;
  let fixture: ComponentFixture<ProductAnnounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAnnounComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAnnounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
