import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GifsService {
    private readonly http = inject(HttpClient);
    private readonly giphyApiKey = environment.giphyApiKey;
    private readonly giphyApiUrl = environment.giphyApiUrl;

    constructor() {
        this.loadTrendingGifs();
    }

    // Retorna un observable, que es un objeto que emite eventos y podemos estar suscritos a estos eventos
    loadTrendingGifs(): Observable<GiphyResponse> {
        const url = `${this.giphyApiUrl}/gifs/trending`;
        return this.http.get<GiphyResponse>(url, {
            params: {
                api_key: this.giphyApiKey,
                limit: 20,
            }
        });
    }
}