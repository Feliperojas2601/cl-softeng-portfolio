import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import { mapGiphyToGifArray } from '../mappers/gif.mapper';
import { Observable, finalize, map } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class GifsService {
    private readonly http = inject(HttpClient);
    private readonly giphyApiKey = environment.giphyApiKey;
    private readonly giphyApiUrl = environment.giphyApiUrl;

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal<boolean>(true);
    searchGifsLoading = signal<boolean>(true);

    constructor() {
        this.loadTrendingGifs();
    }

    // Retorna un observable, que es un objeto que emite eventos y podemos estar suscritos a estos eventos
    loadTrendingGifs(): void {
        this.trendingGifsLoading.set(true);
        const url = `${this.giphyApiUrl}/gifs/trending`;
        this.http.get<GiphyResponse>(url, {
            params: {
                api_key: this.giphyApiKey,
                limit: 20,
            }
        // subscribe es para suscribirse a los eventos del observable, la petición se ejecuta cuando se suscribe
        }).subscribe((response) => {
            this.trendingGifs.set(mapGiphyToGifArray(response.data));
            this.trendingGifsLoading.set(false);
        });
    }

    searchGif(value: string): Observable<Gif[]> {
        this.searchGifsLoading.set(true);
        const url = `${this.giphyApiUrl}/gifs/search`;
        return this.http.get<GiphyResponse>(url, {
            params: {
                api_key: this.giphyApiKey,
                q: value,
                limit: 20,
            }
        // Pipe en rxjs es para encadenar operaciones
        }).pipe(
            // map es para transformar el observable
            map((response) => mapGiphyToGifArray(response.data)),
            // finalize es para ejecutar una acción cuando el observable se completa
            finalize(() => this.searchGifsLoading.set(false))
        );
    }
}