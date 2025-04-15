import { Component, computed, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent  ],
  templateUrl: './gif-history.component.html',
})
export class GifHistoryComponent {
    gifsService = inject(GifsService);
    // Injectamos el ActivatedRoute para obtener el parámetro de la ruta
    // El params es un observable, por lo que se suscribe a él
    // Podemos usar el toSignal para convertir el observable en una señal
    key = toSignal(inject(ActivatedRoute).params.pipe(
        map(params => params['key'])
    ));
    // Señal computada para obtener los gifs por la key
    gifs = computed(() => this.gifsService.getGifsByHistoryKey(this.key()));
}
