import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScrollStateService {
    private readonly trendingScrollPosition = signal<number>(0);

    saveTrendingScrollPosition(scrollTop: number): void {
        this.trendingScrollPosition.set(scrollTop);
    }

    getTrendingScrollPosition(): number {
        return this.trendingScrollPosition();
    }
}