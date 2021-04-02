import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallhistoryComponent } from './callhistory.component';

describe('CallhistoryComponent', () => {
  let component: CallhistoryComponent;
  let fixture: ComponentFixture<CallhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
