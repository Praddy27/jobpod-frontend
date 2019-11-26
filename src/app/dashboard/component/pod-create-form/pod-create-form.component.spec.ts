import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodCreateFormComponent } from './pod-create-form.component';

describe('PodCreateFormComponent', () => {
  let component: PodCreateFormComponent;
  let fixture: ComponentFixture<PodCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
