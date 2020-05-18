import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarsComponent } from './shopping-cars.component';

describe('ShoppingCarsComponent', () => {
  let component: ShoppingCarsComponent;
  let fixture: ComponentFixture<ShoppingCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
