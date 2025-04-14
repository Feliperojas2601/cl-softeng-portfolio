import { Component } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trendingPage.component.html',
})
export class TrendingPageComponent { }
