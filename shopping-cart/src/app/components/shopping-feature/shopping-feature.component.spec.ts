import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFeatureComponent } from './shopping-feature.component';

describe('ShoppingFeatureComponent', () => {
  let component: ShoppingFeatureComponent;
  let fixture: ComponentFixture<ShoppingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
