import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationirCreateComponent } from './declarationir-create.component';

describe('DeclarationirCreateComponent', () => {
  let component: DeclarationirCreateComponent;
  let fixture: ComponentFixture<DeclarationirCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationirCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationirCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
