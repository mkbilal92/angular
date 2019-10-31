import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePracticeComponent } from './service-practice.component';

describe('ServicePracticeComponent', () => {
  let component: ServicePracticeComponent;
  let fixture: ComponentFixture<ServicePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
