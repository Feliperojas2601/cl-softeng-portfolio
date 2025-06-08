import { afterNextRender, afterRender, ChangeDetectionStrategy, Component, effect, signal, SimpleChanges } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { // implements OnInit, ..., qué diferencia hay? Cuando se quiere forzar que se implemente un método de un ciclo de vida
    
    traditionalProperty = 'Hola';
    signalProperty = signal('Hola');

    changeTraditionalProperty() {
        this.traditionalProperty = 'Adios';
    }

    changeSignalProperty() {
        this.signalProperty.set('Adios');
    }
    
    constructor() {
        // Construcción del componente si me voy a otra ruta, se ejecuta el constructor de nuevo pues se destruye y se vuelve a crear
        console.log('HomePageComponent constructor');
        /*setTimeout(() => {
            // Esto con el zonelessChangeDetection no se ejecuta
            this.traditionalProperty = 'Adios';
        }, 3000);

        setTimeout(() => {
            // Esto con el zonelessChangeDetection se ejecuta
            this.signalProperty.set('Adios');
        }, 4000);*/
    }

    ngOnInit() {
        // Se ejecuta cuando el componente inicializa sus inputs, inputs del component no inputs formularios
        console.log('HomePageComponent ngOnInit');
    }

    ngDoCheck() {
        // Se ejecuta cada vez que alguna propiedad o señal cambia
        console.log('HomePageComponent ngDoCheck');
    }

    ngAfterContentInit() {
        // Se ejecuta cuando el componente inicializa sus contenidos, contenido del component no contenido formularios
        console.log('HomePageComponent ngAfterContentInit');
    }

    ngAfterContentChecked() {
        // se ejecuta cada vez que el contenido del componente cambia
        console.log('HomePageComponent ngAfterContentChecked');
    }

    ngAfterViewInit() {
        // Se ejecuta cuando el componente inicializa sus vistas
        console.log('HomePageComponent ngAfterViewInit');
    }

    ngAfterViewChecked() {
        // se ejecuta cada vez que las vistas del componente cambian
        console.log('HomePageComponent ngAfterViewChecked');
    }

    afterNextRenderEffect = afterNextRender(() => {
        // Todos los componentes se renderizan, se ejecutan todos los afterRenderEffect
        console.log('HomePageComponent afterNextRenderEffect');
    });

    afterRenderEffect = afterRender(() => {
        // Todos los componentes se renderizan, se ejecutan todos los afterRenderEffect
        console.log('HomePageComponent afterRenderEffect');
    });

    basicEffect = effect((onCleanup) => {
        // Se ejecuta tan pronto se inicializa el componente, no se aconseja http para eso rxResource
        console.log('HomePageComponent basicEffect');

        onCleanup(() => {
            // Se ejecuta cuando el efecto/componente se destruye, similar a ngOnDestroy
            console.log('HomePageComponent basicEffect cleanup');
        });
    });

    ngOnDestroy() {
        // Se ejecuta cuando se renderiza 
        console.log('HomePageComponent ngOnDestroy');
    }

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
