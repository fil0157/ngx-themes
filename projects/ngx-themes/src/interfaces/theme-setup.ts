// Project
import { Theme } from './theme';



export interface ThemesSetup {
    themes: Theme[];
    active?: string;
    default?: string;
    defaultValues?: {
        [key: string]: string;
    };
    other?: any;
}
