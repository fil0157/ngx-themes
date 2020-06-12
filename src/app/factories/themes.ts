// Project
import { ThemesSetup } from '@fil0157/ngx-themes';

// App
import { DarkTheme, LightTheme, BlueTheme } from 'src/app/themes';



export const ThemesFactory: ThemesSetup = {
    themes: [
        LightTheme,
        DarkTheme,
        BlueTheme,
    ],
    active: 'lightTheme',
    default: 'darkTheme',
};
