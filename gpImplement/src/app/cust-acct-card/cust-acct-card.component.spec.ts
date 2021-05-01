import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAcctCardComponent } from './cust-acct-card.component';

describe('CustAcctCardComponent', () => {
  let component: CustAcctCardComponent;
  let fixture: ComponentFixture<CustAcctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAcctCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAcctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
