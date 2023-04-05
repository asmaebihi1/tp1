import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFactureListComponent } from './type-facture-list.component';

describe('TypeFactureListComponent', () => {
  let component: TypeFactureListComponent;
  let fixture: ComponentFixture<TypeFactureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFactureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeFactureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
