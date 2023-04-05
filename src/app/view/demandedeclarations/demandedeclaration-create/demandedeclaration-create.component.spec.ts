import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedeclarationCreateComponent } from './demandedeclaration-create.component';

describe('DemandedeclarationCreateComponent', () => {
  let component: DemandedeclarationCreateComponent;
  let fixture: ComponentFixture<DemandedeclarationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedeclarationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandedeclarationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
