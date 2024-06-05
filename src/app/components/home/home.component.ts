import { Component } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homePageNews?: NewsArticle [];
  isLoading: boolean = true;

  constructor(private newsService: NewsService) {}

  loadHomePageNews(): void {
    this.newsService.loadLatestNews()
    .subscribe({
      next: (newsData) => {
        this.homePageNews = newsData.data;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadHomePageNews();
  }
}
