import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';

@Component({
  selector: 'app-hot-news-card',
  templateUrl: './hot-news-card.component.html',
  styleUrls: ['./hot-news-card.component.scss']
})
export class HotNewsCardComponent {
  @Input() article?: NewsArticle;
  
}
