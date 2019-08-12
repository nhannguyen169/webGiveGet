/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlbcComponent } from './qlbc.component';

describe('QlbcComponent', () => {
  let component: QlbcComponent;
  let fixture: ComponentFixture<QlbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
