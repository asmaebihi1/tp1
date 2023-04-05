import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedeclarationdetailleListComponent } from './demandedeclarationdetaille-list.component';

describe('DemandedeclarationdetailleListComponent', () => {
  let component: DemandedeclarationdetailleListComponent;
  let fixture: ComponentFixture<DemandedeclarationdetailleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedeclarationdetailleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandedeclarationdetailleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
