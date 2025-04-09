import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './heroPage.component.html',
})
export class HeroPageComponent {
    public name = signal('ironman');
    public age = signal(45);

    getHeroDescription() {
        return `${this.name()} - ${this.age()}`;
    }

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

    capitalizedName() {
        return this.name().toUpperCase();
    }
}