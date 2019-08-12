import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientInputPage } from './pacient-input.page';

describe('PacientInputPage', () => {
  let component: PacientInputPage;
  let fixture: ComponentFixture<PacientInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
