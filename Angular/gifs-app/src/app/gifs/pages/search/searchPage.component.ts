import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './searchPage.component.html',
})
export class SearchPageComponent {
    gifsService = inject(GifsService);
    searchGifs = signal<Gif[]>([]);
    searchGifsLoading = this.gifsService.searchGifsLoading;

    searchGif(value: string): void {
        // Ese subscribe está ejecutando la petición
        this.gifsService.searchGif(value).subscribe((gifs) => {
            this.searchGifs.set(gifs);
        });
    }
}
