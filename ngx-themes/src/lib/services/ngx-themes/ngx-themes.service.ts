// Angular
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Project
import { Theme } from '../../interfaces/theme';
import { THEMES, ACTIVE_THEME, DEFAULT_THEME } from '../../themes';



@Injectable({
  providedIn: 'root'
})
export class NgxThemesService {


  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public activeTheme: string,
    @Inject(DEFAULT_THEME) public defaultTheme: string,
    @Inject(DOCUMENT) private document: any
  ) {
    this.initService();
  }


  initService(): void {
    if (!this.themes.length) throw new Error(`You have no themes.`);
    if (!this.defaultTheme || (this.themes.findIndex(f => f.identifier === this.defaultTheme) === -1)) {
      this.defaultTheme = (this.themes.findIndex(f => f.identifier === this.defaultTheme) === -1) ? this.themes[0].identifier : this.activeTheme;
    }
    if (!this.activeTheme || (this.themes.findIndex(f => f.identifier === this.activeTheme) === -1)) {
      this.activeTheme = this.defaultTheme || this.themes[0].identifier;
    }
    this.applyTheme(this.activeTheme);
  }


  getTheme(identifier: string): Theme {
    const theme = this.themes.find(f => f.identifier === identifier);
    if (!theme) {
      throw new Error(`Theme not found: '${identifier}'`);
    }
    return theme;
  }


  getThemeOther(identifier: string = this.activeTheme): any | undefined {
    return this.getTheme(identifier).other ? this.getTheme(identifier).other : undefined
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
    return this.themes
  }


  useTheme(identifier: string): void {
    this.activeTheme = identifier;
    this.applyTheme(this.activeTheme);
  }


  useDefaultTheme(): void {
    this.activeTheme = this.defaultTheme;
    this.applyTheme(this.activeTheme);
  }


  toggleTheme(firstTheme: number = 0, secondTheme: number = 1): void {
    if (this.activeTheme === this.themes[firstTheme].identifier) {
      this.activeTheme = this.themes[secondTheme] ? this.themes[secondTheme].identifier : this.defaultTheme;
    } else {
      this.activeTheme = this.themes[firstTheme].identifier;
    }
    this.applyTheme(this.activeTheme);
  }


  addTheme(theme: Theme): void {
    this.themes.push(theme);
  }


  removeTheme(identifier: string) {
    const themeIndex: number = this.themes.findIndex(f => f.identifier === identifier);
    if (themeIndex !== -1) this.themes.splice(themeIndex, 1);
    this.initService();
  }


  updateTheme(identifier: string, values: { [key: string]: string; }) {
    const theme = this.getTheme(identifier);
    theme.values = {
      ...theme.values,
      ...values
    };

    if (identifier === this.activeTheme) {
      this.applyTheme(identifier);
    }
  }


  applyTheme(identifier: string): void {
    const element: HTMLElement = this.getElement();
    const selectTheme: Theme = this.getTheme(identifier);
    for (const key in selectTheme.values) {
      this.setProperty(key, selectTheme.values[key]);
    }
    for (const theme of this.themes) {
      element.classList.remove(this.camelCaseToKebabCase(theme.identifier));
    }
    element.classList.add(this.camelCaseToKebabCase(selectTheme.identifier));
  }


  setProperty(key: string, value: string): void {
    const element = this.getElement();
    element.style.setProperty(key, value);
  }


  getProperty(propertyName: string): string {
    return this.getActiveTheme().values[propertyName];
  }


  getElement(): HTMLElement {
    return this.document.body;
  }


  camelCaseToKebabCase(expression: string): string {
    return expression.replace(/[\w]([A-Z])/g, s => {
      return s[0] + '-' + s[1];
    }).toLowerCase();
  }


}
