// Project
import { Theme } from './theme';



export interface ThemeConfig {
    themes: Theme[];
    active?: string;
    default?: string;
    defaultValues?: {
        [key: string]: string;
    };
}
