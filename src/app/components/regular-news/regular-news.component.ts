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

  getCategoryArticles(category: string): void {
    let formattedCategory: string = category.charAt(0).toUpperCase() + category.slice(1);
    this.sectionHeader = `${formattedCategory} News`;

    this.newsService.loadCategorizedNews(category!)
      .subscribe(articles => {
        this.regularNews = articles;
        console.log(this.regularNews);
    });
  }

  getSearchedArticles(searchTerm: string): void {
    this.sectionHeader = `Search Results`;

    this.newsService.loadSearchResults(searchTerm!)
      .subscribe(articles => {
        this.regularNews = articles;
        console.log(this.regularNews);
    });
  }

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('categoryType');
    const searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    
    if(category)
      this.getCategoryArticles(category);
    else if(searchTerm)
      this.getSearchedArticles(searchTerm);
  }
}
