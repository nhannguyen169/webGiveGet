/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QllsgdComponent } from './qllsgd.component';

describe('NotificationsComponent', () => {
  let component: QllsgdComponent;
  let fixture: ComponentFixture<QllsgdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QllsgdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QllsgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
