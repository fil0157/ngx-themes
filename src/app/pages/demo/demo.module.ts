// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { HeaderModule } from 'src/app/components/layout/header/header.module';
import { FooterModule } from 'src/app/components/layout/footer/footer.module';
import { PopupColorPickerModule } from 'src/app/components/popup-color-picker/popup-color-picker.module';



@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    DemoRoutingModule,
    PopupColorPickerModule,
  ],
  exports: [
    DemoComponent,
  ],
})
export class DemoModule { }
