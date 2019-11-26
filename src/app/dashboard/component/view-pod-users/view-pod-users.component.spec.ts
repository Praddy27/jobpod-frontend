import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPodUsersComponent } from './view-pod-users.component';

describe('ViewPodUsersComponent', () => {
  let component: ViewPodUsersComponent;
  let fixture: ComponentFixture<ViewPodUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPodUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPodUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
