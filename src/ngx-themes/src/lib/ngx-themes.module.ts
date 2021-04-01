// Angular
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

// Project
import { THEMES_CONFIG } from './tools/themes-token';
import { ThemesConfig } from './interfaces/themes-config';
import { NgxThemesService } from './services/ngx-themes/ngx-themes.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NgxThemesService,
  ],
})
export class NgxThemesModule {
  static forRoot(themeConfig: ThemesConfig): ModuleWithProviders<NgxThemesModule> {
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
