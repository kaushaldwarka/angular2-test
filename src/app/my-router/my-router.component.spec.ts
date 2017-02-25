/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyRouterComponent } from './my-router.component';

describe('MyRouterComponent', () => {
  let component: MyRouterComponent;
  let fixture: ComponentFixture<MyRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
