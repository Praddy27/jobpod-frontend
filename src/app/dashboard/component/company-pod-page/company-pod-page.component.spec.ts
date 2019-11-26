import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPodPageComponent } from './company-pod-page.component';

describe('CompanyPodPageComponent', () => {
  let component: CompanyPodPageComponent;
  let fixture: ComponentFixture<CompanyPodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
