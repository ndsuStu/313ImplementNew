import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustJobCardComponent } from './cust-order-card.component';

describe('CustJobCardComponent', () => {
  let component: CustJobCardComponent;
  let fixture: ComponentFixture<CustJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustJobCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
