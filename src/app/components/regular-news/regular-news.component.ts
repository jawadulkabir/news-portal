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
  regularNews: NewsArticle[] = [];
  sectionHeader = "";
  isLoading = true;

  newsObserver = {
    next: (news: NewsArticle[]) => {
      this.regularNews.push(...news);
      console.log(news);
    },
    error: (err: any) => {
      console.log(err);
      this.isLoading = false;
    },
    complete: () => {
      console.log("Regular News Loaded");
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
    if(!isScrolled)
      this.regularNews = [];

    this.newsService.loadCategorizedNews(category!)
    .subscribe(this.newsObserver);
  }

  getSearchedArticles(searchTerm: string, isScrolled: boolean): void {
    this.sectionHeader = `Search Results`;
    if(!isScrolled)
      this.regularNews = [];

    this.newsService.loadSearchResults(searchTerm!)
    .subscribe(this.newsObserver);
  }

  ngOnInit(isScrolled: boolean = false): void {
    this.isLoading = true;
    const category = this.route.snapshot.paramMap.get('categoryType');
    const searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    
    if(category)
      this.getCategoryArticles(category, isScrolled);
    else if(searchTerm)
      this.getSearchedArticles(searchTerm, isScrolled);
  }
  
  onScroll() {
    console.log("scrolled!!");
    this.ngOnInit(true);
  }
}
