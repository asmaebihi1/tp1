import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationirdetailleListComponent } from './declarationirdetaille-list.component';

describe('DeclarationirdetailleListComponent', () => {
  let component: DeclarationirdetailleListComponent;
  let fixture: ComponentFixture<DeclarationirdetailleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationirdetailleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationirdetailleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
