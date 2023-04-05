import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedeclarationdetailleCreateComponent } from './demandedeclarationdetaille-create.component';

describe('DemandedeclarationdetailleCreateComponent', () => {
  let component: DemandedeclarationdetailleCreateComponent;
  let fixture: ComponentFixture<DemandedeclarationdetailleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedeclarationdetailleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandedeclarationdetailleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
