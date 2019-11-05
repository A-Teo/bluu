import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPayPickComponent } from './modal-pay-pick.component';

describe('ModalPayPickComponent', () => {
  let component: ModalPayPickComponent;
  let fixture: ComponentFixture<ModalPayPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPayPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPayPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
