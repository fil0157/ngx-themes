// Angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxThemesService } from './services';
import { THEMES, ACTIVE_THEME, DEFAULT_THEME } from './themes';
import { ThemesSetup } from './interfaces';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    NgxThemesService,
  ],
})
export class NgxThemesModule {
  static forRoot(themesSetup: ThemesSetup): ModuleWithProviders {
    return {
      ngModule: NgxThemesModule,
      providers: [
        {
          provide: THEMES,
          useValue: themesSetup.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: themesSetup.active
        },
        {
          provide: DEFAULT_THEME,
          useValue: themesSetup.default
        },
      ]
    };
  }
}
