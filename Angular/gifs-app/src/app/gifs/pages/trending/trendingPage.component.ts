import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from '../../services/scrollState.service';
@Component({
  selector: 'app-trending-page',
  templateUrl: './trendingPage.component.html',
})
export class TrendingPageComponent implements AfterViewInit {
    gifsService = inject(GifsService);
    scrollStateService = inject(ScrollStateService);
    trendingGifs = this.gifsService.trendingGifs;
    trendingGifsLoading = this.gifsService.trendingGifsLoading;
    trendingGifGroup = this.gifsService.trendingGifGroup;

    // Referencia al div que contiene los gifs con una referencia local # 
    scrollDivRef = viewChild<ElementRef>('groupDiv');

    onScroll(event: Event): void {
        const scrollDiv = this.scrollDivRef()?.nativeElement;
        if (!scrollDiv) return;
        const scrollTop = scrollDiv.scrollTop; // posición actual del scroll
        const scrollHeight = scrollDiv.scrollHeight; // altura total del div
        const height = scrollDiv.clientHeight; // altura visible del div
        const isNearBottom = scrollTop + height >= scrollHeight - 100;
        this.scrollStateService.saveTrendingScrollPosition(scrollTop);
        if (isNearBottom) {
            this.gifsService.loadTrendingGifs();
        }
    }

    // Se ejecuta después de que se ha renderizado el componente, aquí movemos el scroll a la posición guardada en el servicio
    ngAfterViewInit(): void {
        const scrollPosition = this.scrollStateService.getTrendingScrollPosition();
        if (!scrollPosition) return;
        const scrollDiv = this.scrollDivRef()?.nativeElement;
        if (!scrollDiv) return;
        scrollDiv.scrollTop = scrollPosition;
    }
}
