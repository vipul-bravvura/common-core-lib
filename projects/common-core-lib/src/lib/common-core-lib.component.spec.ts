import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCoreLibComponent } from './common-core-lib.component';

describe('CommonCoreLibComponent', () => {
  let component: CommonCoreLibComponent;
  let fixture: ComponentFixture<CommonCoreLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCoreLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
