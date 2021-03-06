// Project
import { ThemesConfig } from '@ngx-eco/ngx-themes';

// App
import { DarkTheme } from './themes/dark';
import { LightTheme } from './themes/light';
import { CustomTheme } from './themes/custom';



export const NgxThemesConfig: ThemesConfig = {
    themes: [
        LightTheme,
        DarkTheme,
        CustomTheme,
    ],
    active: 'lightTheme',
    default: 'darkTheme',
};
