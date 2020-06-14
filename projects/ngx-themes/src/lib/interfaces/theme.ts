export interface Theme {
    identifier: string;
    name?: string;
    values: {
        [key: string]: string;
    };
    other?: any;
}
