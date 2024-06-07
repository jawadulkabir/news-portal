import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { NewsArticle } from './interfaces/newsArticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-portal';
}
