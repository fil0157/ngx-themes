# Для начала

Как использовать `@fil0157/ngx-themes` в своих проектах

---

## Установка

Для использования `@fil0157/ngx-themes` в своём проекте установите его через [npm](https://www.npmjs.com/package/@fil0157/ngx-themes):

``` 
npm i @fil0157/ngx-themes --save
```

## Внедрение в `Angular`

После установки добавьте ```NgxThemesModule.forRoot()``` в ваш ```NgModule```:

### Файл `app.module.ts`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxThemesModule } from '@fil0157/ngx-themes';
import { NgxThemesConfig } from './ngx-themes.config.ts';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxThemesModule
            .forRoot(NgxThemesConfig)
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Создание файла конфигурации

### Файл `ngx-themes.config.ts`

```typescript
import { ThemesConfig } from '@fil0157/ngx-themes';
import { DarkTheme } from 'src/app/themes/dark.theme.ts';
import { LightTheme } from 'src/app/themes/light.theme.ts';

export const NgxThemesConfig: ThemesConfig = {
    themes: [
        LightTheme,
        DarkTheme,
    ],
    active: 'lightTheme',
    default: 'darkTheme',
};
```

## Создание файлов тем

### Файл `dark.theme.ts`

```typescript
import { Theme } from '@fil0157/ngx-themes';

export const DarkTheme: Theme = {
    id: 'darkTheme',
    values: {
        '--color': '#fff',
        '--color-primary': '#ccc',
        '--color-secondary': '#aaa',
        
        '--background': '#3e3e3e',
        '--background-primary': '#777',
        '--background-secondary': '#555',
        
        '--border': '#ddd',
    }
};
```

### Файл `light.theme.ts`

```typescript
import { Theme } from '@fil0157/ngx-themes';

export const LightTheme: Theme = {
    id: 'lightTheme',
    values: {
        '--color': '#08f',
        '--color-primary': '#777',
        '--color-secondary': '#879aab',
        
        '--background': '#eff',
        '--background-primary': '#ccc',
        '--background-secondary': '#eee',
        
        '--border': '#ddf',
    }
};
```

## Использование

После внедрения модуля вы можете использовать все возможности ```ngx-themes``` в своём проекте:

### Файл `app.component.ts`

```typescript
import { Component } from '@angular/core';
import { NgxThemesService } from '@fil0157/ngx-themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private themes: NgxThemesService,
  ) { }

  toggleTheme(): void {
    this.themes.toggleTheme();
  }

}
```

---

> *Данный пример носит наглядный характер и никого не обязывает к полному копированию. Каждый может писать в привычном для него стиле.
