import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationirdetailleCreateComponent } from './declarationirdetaille-create.component';

describe('DeclarationirdetailleCreateComponent', () => {
  let component: DeclarationirdetailleCreateComponent;
  let fixture: ComponentFixture<DeclarationirdetailleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationirdetailleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationirdetailleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
