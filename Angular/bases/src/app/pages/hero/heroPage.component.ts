import { Component, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    templateUrl: './heroPage.component.html',
    standalone: true, // Para que el componente sea su propio módulo
    imports: [CommonModule] // Importamos el módulo CommonModule para usar el pipe uppercase
})
export class HeroPageComponent {
    public name = signal('ironman');
    // Señal de estado
    public age = signal(45);
    // Señal computada
    public description = computed(() => `${this.name()} - ${this.age()}`);
    public capitalizedName = computed(() => this.name().toUpperCase());

    changeHero() {
        this.name.set('spiderman');
    }

    changeAge() {
        this.age.set(25);
    }

    resetForm() {
        this.name.set('ironman');
        this.age.set(45);
    }
}