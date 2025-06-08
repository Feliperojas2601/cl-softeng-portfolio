export interface Country {
    name: Name;
    cca3: string;
    borders: string[];
}

export interface Name {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
}

export interface NativeName {
    official: string;
    common: string;
}