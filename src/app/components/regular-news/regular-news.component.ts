import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-regular-news',
  templateUrl: './regular-news.component.html',
  styleUrls: ['./regular-news.component.scss']
})
export class RegularNewsComponent {
  @Input() regularNews?: NewsArticle[];
  sectionHeader = "Featured News";

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    })
  }

  getCategoryArticles(): void {
    const category = this.route.snapshot.paramMap.get('categoryType');
    if(!category) return;

    let formattedCategory: string = category.charAt(0).toUpperCase() + category.slice(1);
    this.sectionHeader = `${formattedCategory} News`;

    this.newsService.loadCategorizedNews(category!)
      .subscribe(articles => {
        this.regularNews = articles;
        console.log(this.regularNews);
    });
  }

  ngOnInit(): void {
    this.getCategoryArticles();
  }
}
