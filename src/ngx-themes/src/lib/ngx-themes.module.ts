// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxThemesService } from './services';
import { THEMES_CONFIG } from './tools';
import { ThemeConfig } from './interfaces';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NgxThemesService,
  ],
})
export class NgxThemesModule {
  static forRoot(themeConfig: ThemeConfig): ModuleWithProviders<NgxThemesModule> {
    return {
      ngModule: NgxThemesModule,
      providers: [
        {
          provide: THEMES_CONFIG,
          useValue: themeConfig,
        },
      ]
    };
  }
}
