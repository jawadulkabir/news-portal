import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {
  article?: NewsArticle;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.newsService.loadArticleById(id!)
      .subscribe(article => {
        this.article = article;
        console.log(this.article);
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }
}
