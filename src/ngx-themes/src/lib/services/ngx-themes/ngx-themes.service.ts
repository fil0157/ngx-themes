// Angular
import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

// Libs
import { camelCaseToKebabCase } from 'functionone/lib/name/functions/camel-case/camel-case-to-kebab-case/camel-case-to-kebab-case';

// Project
import { Theme } from '../../interfaces/theme';
import { THEMES_CONFIG } from '../../tools/themes-token';
import { ThemesConfig } from '../../interfaces/themes-config';



@Injectable({
  providedIn: 'root'
})
export class NgxThemesService {

  public themes: Theme[];
  public activeTheme: string;
  public defaultTheme: string;

  private isBrowser: boolean;

  constructor(
    @Inject(THEMES_CONFIG) public themesConfig: ThemesConfig,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = (isPlatformBrowser(this.platformId));
    this.themes = themesConfig.themes;
    this.activeTheme = themesConfig.active;
    this.defaultTheme = themesConfig.default;
    this.initService();
  }


  initService(): void {
    if (!this.themes.length) throw new Error(`You have no themes.`);
    if (!this.defaultTheme || (this.themes.findIndex(f => f.id === this.defaultTheme) === -1)) {
      this.defaultTheme = (this.themes.findIndex(f => f.id === this.defaultTheme) === -1) ? this.themes[0].id : this.activeTheme;
    }
    if (!this.activeTheme || (this.themes.findIndex(f => f.id === this.activeTheme) === -1)) {
      this.activeTheme = this.defaultTheme || this.themes[0].id;
    }
    this.applyTheme(this.activeTheme);
  }


  getTheme(id: string): Theme {
    const theme = this.themes.find(f => f.id === id);
    if (!theme) {
      throw new Error(`Theme not found: '${id}'`);
    }
    return theme;
  }


  getThemeOther(id: string = this.activeTheme): any | undefined {
    return this.getTheme(id).other ? this.getTheme(id).other : undefined;
  }


  getActiveTheme(): Theme {
    if (this.activeTheme) {
      return this.getTheme(this.activeTheme);
    }
  }


  getDefaultTheme(): Theme {
    if (this.defaultTheme) {
      return this.getTheme(this.defaultTheme);
    }
  }


  getAllThemes(): Theme[] {
    return this.themes;
  }


  useTheme(id: string): void {
    this.activeTheme = id;
    this.applyTheme(this.activeTheme);
  }


  useDefaultTheme(): void {
    this.activeTheme = this.defaultTheme;
    this.applyTheme(this.activeTheme);
  }


  toggleTheme(firstTheme: number = 0, secondTheme: number = 1): void {
    if (this.activeTheme === this.themes[firstTheme].id) {
      this.activeTheme = this.themes[secondTheme] ? this.themes[secondTheme].id : this.defaultTheme;
    } else {
      this.activeTheme = this.themes[firstTheme].id;
    }
    this.applyTheme(this.activeTheme);
  }


  addTheme(theme: Theme): void {
    this.themes.push(theme);
  }


  removeTheme(id: string) {
    const themeIndex: number = this.themes.findIndex(f => f.id === id);
    if (themeIndex !== -1) this.themes.splice(themeIndex, 1);
    this.initService();
  }


  updateTheme(id: string, values: { [key: string]: string; }) {
    const theme = this.getTheme(id);
    theme.values = {
      ...theme.values,
      ...values
    };

    if (id === this.activeTheme) {
      this.applyTheme(id);
    }
  }


  public updateThemeProperty(id: string, key: string, value: string): void {
    const theme = this.getTheme(id);
    theme.values[key] = value;
    if (id === this.activeTheme) {
      this.applyTheme(id);
    }
  }


  applyTheme(id: string): void {
    const element: HTMLElement = this.getElement();
    const selectTheme: Theme = this.getTheme(id);
    for (const key in selectTheme.values) {
      this.setProperty(key, selectTheme.values[key]);
    }
    for (const theme of this.themes) {
      element?.classList.remove(camelCaseToKebabCase(theme.id));
    }
    element?.classList.add(camelCaseToKebabCase(selectTheme.id));
  }


  setProperty(key: string, value: string): void {
    const element = this.getElement();
    element?.style.setProperty(key, value);
  }


  getProperty(propertyName: string): string {
    return this.getActiveTheme().values[propertyName];
  }


  getElement(): HTMLElement {
    if (this.isBrowser) return document.body;
  }


}
