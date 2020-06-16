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
    if (!this.defaultTheme || (this.themes.findIndex(f => f.name === this.defaultTheme) === -1)) {
      this.defaultTheme = (this.themes.findIndex(f => f.name === this.defaultTheme) === -1) ? this.themes[0].name : this.activeTheme;
    }
    if (!this.activeTheme || (this.themes.findIndex(f => f.name === this.activeTheme) === -1)) {
      this.activeTheme = this.defaultTheme || this.themes[0].name;
    }
    this.applyTheme(this.activeTheme);
  }


  getTheme(name: string): Theme {
    const theme = this.themes.find(f => f.name === name);
    if (!theme) {
      throw new Error(`Theme not found: '${name}'`);
    }
    return theme;
  }


  getThemeOther(name: string = this.activeTheme): any | undefined {
    return this.getTheme(name).other ? this.getTheme(name).other : undefined
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


  useTheme(name: string): void {
    this.activeTheme = name;
    this.applyTheme(this.activeTheme);
  }


  useDefaultTheme(): void {
    this.activeTheme = this.defaultTheme;
    this.applyTheme(this.activeTheme);
  }


  toggleTheme(firstTheme: number = 0, secondTheme: number = 1): void {
    if (this.activeTheme === this.themes[firstTheme].name) {
      this.activeTheme = this.themes[secondTheme] ? this.themes[secondTheme].name : this.defaultTheme;
    } else {
      this.activeTheme = this.themes[firstTheme].name;
    }
    this.applyTheme(this.activeTheme);
  }


  addTheme(theme: Theme): void {
    this.themes.push(theme);
  }


  removeTheme(name: string) {
    const themeIndex: number = this.themes.findIndex(f => f.name === name);
    if (themeIndex !== -1) this.themes.splice(themeIndex, 1);
    this.initService();
  }


  updateTheme(name: string, values: { [key: string]: string; }) {
    const theme = this.getTheme(name);
    theme.values = {
      ...theme.values,
      ...values
    };

    if (name === this.activeTheme) {
      this.applyTheme(name);
    }
  }


  applyTheme(name: string): void {
    const element: HTMLElement = this.getElement();
    const selectTheme: Theme = this.getTheme(name);
    for (const key in selectTheme.values) {
      this.setProperty(key, selectTheme.values[key]);
    }
    for (const theme of this.themes) {
      element.classList.remove(this.camelCaseToKebabCase(theme.name));
    }
    element.classList.add(this.camelCaseToKebabCase(selectTheme.name));
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


  camelCaseToKebabCase(str: string): string {
    return str.replace(/[\w]([A-Z])/g, s => {
      return s[0] + '-' + s[1];
    }).toLowerCase();
  }


}
