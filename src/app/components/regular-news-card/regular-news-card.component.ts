import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';

@Component({
  selector: 'app-regular-news-card',
  templateUrl: './regular-news-card.component.html',
  styleUrls: ['./regular-news-card.component.scss']
})
export class RegularNewsCardComponent {

  @Input() article?: NewsArticle;
}
