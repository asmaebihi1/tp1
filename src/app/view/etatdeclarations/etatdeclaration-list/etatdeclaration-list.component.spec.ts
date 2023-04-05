import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatdeclarationListComponent } from './etatdeclaration-list.component';

describe('EtatdeclarationListComponent', () => {
  let component: EtatdeclarationListComponent;
  let fixture: ComponentFixture<EtatdeclarationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatdeclarationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatdeclarationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
