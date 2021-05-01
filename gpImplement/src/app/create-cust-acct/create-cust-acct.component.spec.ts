import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustAcctComponent } from './create-cust-acct.component';

describe('CreateCustAcctComponent', () => {
  let component: CreateCustAcctComponent;
  let fixture: ComponentFixture<CreateCustAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustAcctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
