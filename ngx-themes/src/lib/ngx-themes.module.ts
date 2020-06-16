// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxThemesService } from './services';
import { THEMES, ACTIVE_THEME, DEFAULT_THEME } from './themes';
import { ThemesConfig } from './interfaces';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NgxThemesService,
  ],
})
export class NgxThemesModule {
  static forRoot(themesConfig: ThemesConfig): ModuleWithProviders {
    return {
      ngModule: NgxThemesModule,
      providers: [
        {
          provide: THEMES,
          useValue: themesConfig.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: themesConfig.active
        },
        {
          provide: DEFAULT_THEME,
          useValue: themesConfig.default
        },
      ]
    };
  }
}
