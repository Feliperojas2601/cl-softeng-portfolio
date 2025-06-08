import { ChangeDetectionStrategy, Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
    title = input.required<string>();

    ngOnChanges(changes: SimpleChanges) {
        // Se ejecuta cuando el componente cambia sus inputs, inputs del component no inputs formularios
        console.log('HomePageComponent ngOnChanges', changes);
        for (const inputName in changes) {
            console.log(`previos ${inputName} - ${changes[inputName].previousValue}`);
            console.log(`current ${inputName} - ${changes[inputName].currentValue}`);
            console.log(`isFirstChange ${changes[inputName].isFirstChange()}`);
        }
    }
}
