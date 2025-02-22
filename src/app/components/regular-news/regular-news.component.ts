import { Component } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { NewsData } from 'src/app/interfaces/news-data';

@Component({
  selector: 'app-regular-news',
  templateUrl: './regular-news.component.html',
  styleUrls: ['./regular-news.component.scss']
})
export class RegularNewsComponent {
  regularNews: NewsArticle[] = [];
  sectionHeader = "";
  isLoading = true;
  nextPage = "";

  newsObserver = {
    next: (newsData: NewsData) => {
      let news = newsData.data;
      this.nextPage = newsData.nextPage;

      this.regularNews.push(...news);
    },
    error: (err: any) => {
      this.isLoading = false;
    },
    complete: () => {
      this.isLoading = false;
    }
  };

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    })
  }

  getCategoryArticles(category: string, isScrolled: boolean): void {
    let formattedCategory: string = category.charAt(0).toUpperCase() + category.slice(1);
    this.sectionHeader = `${formattedCategory} News`;
    if (!isScrolled) {
      this.nextPage = "";
      this.regularNews = [];
    }

    this.newsService.loadCategorizedNews(category!, this.nextPage)
      .subscribe(this.newsObserver);
  }

  getSearchedArticles(searchTerm: string, isScrolled: boolean): void {
    this.sectionHeader = `Search Results`;
    if (!isScrolled) {
      this.nextPage = "";
      this.regularNews = [];
    }

    this.newsService.loadSearchResults(searchTerm!, this.nextPage)
      .subscribe(this.newsObserver);
  }

  ngOnInit(isScrolled: boolean = false): void {
    this.isLoading = true;
    const category = this.route.snapshot.paramMap.get('categoryType');
    const searchTerm = this.route.snapshot.paramMap.get('searchTerm');

    if (category)
      this.getCategoryArticles(category, isScrolled);
    else if (searchTerm)
      this.getSearchedArticles(searchTerm, isScrolled);
  }

  onScroll() {
    this.ngOnInit(true);
  }
}
