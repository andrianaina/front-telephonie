import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallhistorymanagerComponent } from './callhistorymanager.component';

describe('CallhistorymanagerComponent', () => {
  let component: CallhistorymanagerComponent;
  let fixture: ComponentFixture<CallhistorymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallhistorymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallhistorymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
