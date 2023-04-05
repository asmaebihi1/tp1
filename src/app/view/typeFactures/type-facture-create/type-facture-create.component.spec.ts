import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFactureCreateComponent } from './type-facture-create.component';

describe('TypeFactureCreateComponent', () => {
  let component: TypeFactureCreateComponent;
  let fixture: ComponentFixture<TypeFactureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFactureCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeFactureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
