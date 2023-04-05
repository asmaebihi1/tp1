import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationirListComponent } from './declarationir-list.component';

describe('DeclarationirListComponent', () => {
  let component: DeclarationirListComponent;
  let fixture: ComponentFixture<DeclarationirListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationirListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
