export interface Theme {
    id: string;
    name?: string;
    values: {
        [key: string]: string;
    };
    other?: any;
}
