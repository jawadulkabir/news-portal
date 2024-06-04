import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent {  
  numberOfHeadlines = 3;
  @Input() hotNews?: NewsArticle[];
}
