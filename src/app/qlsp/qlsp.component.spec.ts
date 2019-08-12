/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QlspComponent } from './qlsp.component';

describe('TablesComponent', () => {
  let component: QlspComponent;
  let fixture: ComponentFixture<QlspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
