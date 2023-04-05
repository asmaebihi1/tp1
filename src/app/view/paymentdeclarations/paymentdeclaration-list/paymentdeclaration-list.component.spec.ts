import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdeclarationListComponent } from './paymentdeclaration-list.component';

describe('PaymentdeclarationListComponent', () => {
  let component: PaymentdeclarationListComponent;
  let fixture: ComponentFixture<PaymentdeclarationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentdeclarationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentdeclarationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
