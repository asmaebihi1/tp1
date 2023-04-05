import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatdeclarationCreateComponent } from './etatdeclaration-create.component';

describe('EtatdeclarationCreateComponent', () => {
  let component: EtatdeclarationCreateComponent;
  let fixture: ComponentFixture<EtatdeclarationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatdeclarationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatdeclarationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
