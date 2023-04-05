import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdeclarationCreateComponent } from './paymentdeclaration-create.component';

describe('PaymentdeclarationCreateComponent', () => {
  let component: PaymentdeclarationCreateComponent;
  let fixture: ComponentFixture<PaymentdeclarationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentdeclarationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentdeclarationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
