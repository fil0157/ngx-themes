// Project
import { ThemeConfig } from '@fil0157/ngx-themes';

// App
import { DarkTheme, LightTheme, BlueTheme } from 'src/app/themes';



export const ThemesConfig: ThemeConfig = {
    themes: [
        LightTheme,
        DarkTheme,
        BlueTheme,
    ],
    active: 'lightTheme',
    default: 'darkTheme',
};
