// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { AngularColorfulModule } from 'angular-colorful';

// App
import { PopupColorPickerComponent } from './popup-color-picker.component';



@NgModule({
  declarations: [
    PopupColorPickerComponent,
  ],
  imports: [
    CommonModule,
    AngularColorfulModule,
  ],
  exports: [
    PopupColorPickerComponent,
  ],
})
export class PopupColorPickerModule { }
