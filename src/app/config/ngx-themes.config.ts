// Project
import { ThemesConfig } from '@fil0157/ngx-themes';

// App
import { DarkTheme, LightTheme, CustomTheme } from 'src/app/themes';



export const NgxThemesConfig: ThemesConfig = {
    themes: [
        LightTheme,
        DarkTheme,
        CustomTheme,
    ],
    active: 'lightTheme',
    default: 'darkTheme',
};
