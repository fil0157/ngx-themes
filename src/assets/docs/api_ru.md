# API

Доступные методы `@fil0157/ngx-themes`

---

## Использование

Модуль `@fil0157/ngx-themes` содержит сервис `NgxThemesService`, который предоставлят методы для манипуляции темами. Вот пример как вы можете использовать сервис в любом компоненте:

```typescript
import { Component } from '@angular/core';
import { NgxThemesService } from '@fil0157/ngx-themes';

@Component({
    // ...
})
export class AppComponent {
  constructor( private themes: NgxThemesService ) { }
}
```

## Список методов

### `initService()`

> Возвращает тему по ее идентификатору

#### Returns

`void | Error` Ничего или ошибка

### `getTheme(id: string)`

> Возвращает тему по ее идентификатору

#### Parameters

| параметр          | тип               | описание           |
| :---------------- | :---------------: | :----------------- |
| id                | `string`          | идентификатор темы |

#### Returns

`Theme | Error` Тема с тем же идентификатором или ошибка

### `getThemeOther(id: string = this.activeTheme)`

> Возвращает объект прочее темы по ее идентификатору. 
> По умолчанию обращается к активной теме

#### Parameters

| name              | тип               | описание           |
| :---------------- | :---------------: | :----------------- |
| id                | `string`          | идентификатор темы |

#### Returns

`any | undefined` Объект прочее любого типа или `undefined` при его отсутствии

### `getActiveTheme()`

> Возвращает активную тему

#### Returns

`Theme | Error` Активная тема или ошибка

### `getDefaultTheme()`

> Возвращает дефолтную тему

#### Returns

`Theme | Error` Дефолтная тема или ошибка

### `getAllThemes()`

> Возвращает все темы

#### Returns

`Theme[]` Массив из всех тем

### `useTheme(id: string)`

> Меняет активную тему на выбранную по ее идентификатору

#### Parameters

| name              | тип               | описание           |
| :---------------- | :---------------: | :----------------- |
| id                | `string`          | идентификатор темы |

#### Returns

`void | Error` Ничего или ошибка

### `useDefaultTheme()`

> Меняет активную тему на дефолтную

#### Returns

`void | Error` Ничего или ошибка

### `toggleTheme(firstTheme: number = 0, secondTheme: number = 1)`

> Выбирает активную тему между двумя первыми или выбранными номерами тем

#### Parameters

| name              | тип               | описание              |
| :---------------- | :---------------: | :-------------------- |
| firstTheme        | `number`          | порядковый номер темы |
| secondTheme       | `number`          | порядковый номер темы |

#### Returns

`void | Error` Ничего или ошибка

### `addTheme(theme: Theme)`

> Добавляет пользовательскую тему

#### Parameters

| name              | тип               | описание              |
| :---------------- | :---------------: | :-------------------- |
| theme             | `Theme`           | добавляемая тема      |

#### Returns

`void` Ничего

### `removeTheme(id: string)`

> Удаляет тему по её идентификатору

#### Parameters

| name              | тип               | описание              |
| :---------------- | :---------------: | :-------------------- |
| id                | `string`          | идентификатор темы    |

#### Returns

`void` Ничего

### `updateThemeProperty(id: string, values: { [key: string]: string; })`

> Обновляет одно выбранные значение темы по её идентификатору

#### Parameters

| name              | тип                          | описание                |
| :---------------- | :--------------------------: | :---------------------- |
| id                | `string`                     | идентификатор темы      |
| key               | `string`                     | ключ для обновления     |
| values            | `string`                     | значения для обновления |

#### Returns

`void` Ничего

### `updateTheme(id: string, values: { [key: string]: string; })`

> Обновляет объект значений темы по её идентификатору

#### Parameters

| name              | тип                          | описание                |
| :---------------- | :--------------------------: | :---------------------- |
| id                | `string`                     | идентификатор темы      |
| values            | `{ [key: string]: string; }` | значения для обновления |

#### Returns

`void` Ничего

### `applyTheme(id: string)`

> Применяет тему по её идентификатору

#### Parameters

| name              | тип               | описание              |
| :---------------- | :---------------: | :-------------------- |
| id                | `string`          | идентификатор темы    |

#### Returns

`void` Ничего

### `setProperty(key: string, value: string)`

> Задаёт конкретное свойства по его имени

#### Parameters

| name              | тип               | описание              |
| :---------------- | :---------------: | :-------------------- |
| key               | `string`          | ключь свойства        |
| value             | `string`          | значение свойства     |

#### Returns

`void` Ничего

### `getProperty(propertyName: string)`

> Возвращает конкретное свойства по его имени

#### Parameters

| name              | тип               | описание              |
| :---------------- | :---------------: | :-------------------- |
| propertyName      | `string`          | имя свойства          |

#### Returns

`void` Ничего

### `getElement()`

> Возвращает корневой элемент

#### Returns

`HTMLElement` Элемент `body`

---

> *Чтобы получить более подробную информацию о доступных методах, их параметрах и том, что они возвращают, взгляните на файл [ngx-smart-modal.service.ts](https://github.com/fil0157/ngx-themes/blob/master/src/ngx-themes/src/lib/services/ngx-themes/ngx-themes.service.ts) (хорошо документирован).
