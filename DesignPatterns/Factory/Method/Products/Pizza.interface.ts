export interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
    log(): void;
}