// Project
import { ThemesConfig } from '@fil0157/ngx-themes';

// App
import { DarkTheme, LightTheme, BlueTheme } from 'src/app/themes';



export const NgxThemesConfig: ThemesConfig = {
    themes: [
        LightTheme,
        DarkTheme,
        BlueTheme,
    ],
    active: 'lightTheme',
    default: 'darkTheme',
};
