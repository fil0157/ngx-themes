# Конфигурация

Настройка конфигурации модуля `NgxThemesModule`

---

## Использование

Для использования всех возможностей `@ngx-eco/ngx-themes` вам необходимо импортировать модуль `NgxThemesModule` в свой `NgModule` с некоторыми параметрами. Вот пример использования:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxThemesModule } from '@ngx-eco/ngx-themes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxThemesModule.forRoot({
        themes: [
            {
                id: 'lightTheme',
                values: {
                    '--color': '#08f',
                    '--background': '#eff',
                }
            },
            {
                id: 'darkTheme',
                values: {
                    '--color': '#fff',
                    '--background': '#3e3e3e',
                }
            }
        ],
        active: 'lightTheme',
        default: 'darkTheme',
        defaultValues: {
            '--color': '#fff',
            '--background': '#000'
        }
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

> *Что бы не 'засорять' `app.module.ts` вы можете пользоваться примером из раздела [для начала](docs/intro)

## Список параметров

### `themes: Theme[]` - список тем

### `active: string` - активная тема

### `default: string` - стандартная тема

### `defaultValues: { [key: string]: string }` - стандартные значения
