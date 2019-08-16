import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSF36Page } from './form-sf36.page';

describe('FormSF36Page', () => {
  let component: FormSF36Page;
  let fixture: ComponentFixture<FormSF36Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSF36Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSF36Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
