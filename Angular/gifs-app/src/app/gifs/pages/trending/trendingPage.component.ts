import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trendingPage.component.html',
})
export class TrendingPageComponent {
    gifsService = inject(GifsService);
    trendingGifs = this.gifsService.trendingGifs;
    trendingGifsLoading = this.gifsService.trendingGifsLoading;
}
