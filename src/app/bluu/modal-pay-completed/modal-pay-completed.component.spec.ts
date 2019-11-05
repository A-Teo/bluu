import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPayCompletedComponent } from './modal-pay-completed.component';

describe('ModalPayCompletedComponent', () => {
  let component: ModalPayCompletedComponent;
  let fixture: ComponentFixture<ModalPayCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPayCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPayCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
