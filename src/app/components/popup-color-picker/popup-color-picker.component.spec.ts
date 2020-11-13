import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupColorPickerComponent } from './popup-color-picker.component';

describe('PopupColorPickerComponent', () => {
  let component: PopupColorPickerComponent;
  let fixture: ComponentFixture<PopupColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
