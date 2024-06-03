import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { NewsArticle } from './interfaces/newsArticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-portal';

  constructor() {
    console.log(environment.API_KEY);
  }
}
