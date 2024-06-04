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

  constructor(private newsService: NewsService) {}

  loadHomePageNews(): void {
    this.newsService.loadLatestNews()
    .subscribe({
      next: (news) => {
        this.homePageNews = news;
        console.log(news);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Homepage News Loaded");
      }
    });
  }

  ngOnInit(): void {
    this.loadHomePageNews();
  }
}
