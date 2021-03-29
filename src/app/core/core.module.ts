// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { NgxThemesConfig } from './configs/ngx-themes/ngx-themes.config';

// Project
import { NgxThemesModule } from '@ngx-eco/ngx-themes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxThemesModule.forRoot(NgxThemesConfig),
  ]
})
export class CoreModule { }
