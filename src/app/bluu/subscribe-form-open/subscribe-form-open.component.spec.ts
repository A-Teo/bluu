import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormOpenComponent } from './subscribe-form-open.component';

describe('SubscribeFormOpenComponent', () => {
  let component: SubscribeFormOpenComponent;
  let fixture: ComponentFixture<SubscribeFormOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeFormOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFormOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
