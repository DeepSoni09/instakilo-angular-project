import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitryComponent } from './apitry.component';

describe('ApitryComponent', () => {
  let component: ApitryComponent;
  let fixture: ComponentFixture<ApitryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApitryComponent]
    });
    fixture = TestBed.createComponent(ApitryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
