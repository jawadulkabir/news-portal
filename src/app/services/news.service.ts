import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError } from 'rxjs';
import { NewsArticle } from '../interfaces/newsArticle';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://newsdata.io/api/1/latest?";
  apiKey = environment.API_KEY;

  loadLatestNews(): Observable<NewsArticle[]> {
    let url = `${this.baseUrl}&language=en&apiKey=${this.apiKey}`;
    return this.http.get<any>(url)
      .pipe(
        map(data =>data.results as NewsArticle[])
      )
  }

  loadArticleById(id: string): Observable<NewsArticle> {
    let url = `${this.baseUrl}&apikey=${this.apiKey}&id=${id}`;
    return this.http.get<any>(url)
      .pipe(
        map(data =>data.results[0] as NewsArticle),
      )
  }

  loadCategorizedNews(category: string): Observable<NewsArticle[]> {
    let url = `${this.baseUrl}&language=en&apikey=${this.apiKey}&category=${category}`;
    return this.http.get<any>(url)
      .pipe(
        map(data =>data.results as NewsArticle[])
      )
  }
}
