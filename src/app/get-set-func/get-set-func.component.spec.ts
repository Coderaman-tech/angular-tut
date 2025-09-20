import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetFuncComponent } from './get-set-func.component';

describe('GetSetFuncComponent', () => {
  let component: GetSetFuncComponent;
  let fixture: ComponentFixture<GetSetFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSetFuncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSetFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
