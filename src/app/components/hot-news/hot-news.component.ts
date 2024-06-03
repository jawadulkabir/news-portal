import { Component, Input } from '@angular/core';
import { NewsArticle } from 'src/app/interfaces/newsArticle';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent {  

  news: NewsArticle = {
    "articleId": "a7217e139c0cef1c43458d8243a94d4a",
    "title": "10 Episode SpongeBob SquarePants yang Wajib Ditonton Ulang Penggemar",
    "creator": null,
    "shortDescription": "Warisan abadi SpongeBob berasal dari cerita-cerita fenomenalnya, terutama pada musim-musim awal acara ini.",
    "publishDate": new Date("2024-06-03 05:08:26"),
    "imageUrl": "https://cdn0-production-images-kly.akamaized.net/5cXFhmtBE4_CPdqnZ4iW5Bh7szU=/673x379/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/744930/original/075001900_1412142312-v00043-2.png",
    "categories": [
        "top"
    ],
    "fullContent": "ONLY AVAILABLE IN PAID PLANS",
  }
}
