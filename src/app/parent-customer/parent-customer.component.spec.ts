import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCustomerComponent } from './parent-customer.component';

describe('ParentCustomerComponent', () => {
  let component: ParentCustomerComponent;
  let fixture: ComponentFixture<ParentCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
