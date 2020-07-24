// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxThemesService } from './services';
import { THEMES, ACTIVE_THEME, DEFAULT_THEME } from './themes';
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
          provide: THEMES,
          useValue: themeConfig.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: themeConfig.active
        },
        {
          provide: DEFAULT_THEME,
          useValue: themeConfig.default
        },
      ]
    };
  }
}
