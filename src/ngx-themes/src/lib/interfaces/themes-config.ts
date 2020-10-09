// Project
import { Theme } from './theme';



export interface ThemesConfig {
    themes: Theme[];
    active?: string;
    default?: string;
    defaultValues?: {
        [key: string]: string;
    };
}
