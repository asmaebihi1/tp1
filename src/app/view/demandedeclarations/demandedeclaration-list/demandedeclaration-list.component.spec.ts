import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedeclarationListComponent } from './demandedeclaration-list.component';

describe('DemandedeclarationListComponent', () => {
  let component: DemandedeclarationListComponent;
  let fixture: ComponentFixture<DemandedeclarationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedeclarationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandedeclarationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
