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

  news: NewsArticle = {
    "articleId": "a7217e139c0cef1c43458d8243a94d4a",
    "title": "10 Episode SpongeBob SquarePants yang Wajib Ditonton Ulang Penggemar",
    "creator": "duxxd",
    "shortDescription": "Warisan abadi SpongeBob berasal dari cerita-cerita fenomenalnya, terutama pada musim-musim awal acara ini.",
    "publishDate": new Date("2024-06-03 05:08:26"),
    "imageUrl": "https://lh3.googleusercontent.com/pw/AP1GczOdT5TfdlqgqnQqpFGKM0nW-a1Tm8TlbvXDdIZMkxQ9cWlgjZ3Ne01mdexNFO_PLjDZ3d8vEYDOBy8sbstB9ecmH3WKX3yc8jVmhjiQWzKwUHwpGj1k5UBikUiRXVVn9KAVzMQ_cx4STJTkHiUNmtTstl0XybDVuADy7b_alkIniX9JQ-HQkjUQzYl0QiGxBnJ41YJiQk0obctJi6dbcpE-Hg5CTWNeRvf8yq7ThpPbg3pZrpXyg0fqQ_uImE4Hn5QMVwUxsfKqSmDKJwVZBT6hdUS8b9Ryt7VwlE06JGpvmRQQYwzy2yhkP9_sdAkoIghg2OhZAvdW8Y-wENQX4vjt-MLmg0_vRIdpZiS0wRlR4W5zEBpvwCBN8ysplGQNVK0AqRsQHDZPy5cHJGwFL4gfwIAXXw-E1gzAErKlqJsvy7gJ6uNcW5XZtOpHJ8b9oDTY5ZlOp-RiaJPde37PImZQsQtZqMPhmtbGvUC9fm-kKquUO1Lqg0k2k3SNMYswOl2DLCEdYh-Cf0hLXmPWc_PI7mwbvBry1TZAF1zDzyzpCDhMYIVI-TD4l1JPQIIO0VhHrX5XotcxGwNA7QuKeWNOAlBDbDATeGn39g-CJYFp-xTyPmU1tVF5aahs1K5nQoPYvQhoG6lXP4wZjMmr63Pgw7fTKvBwn5fpVDYHpt3LNJcYUnZEV9cJQnP3QVHFU5Cj3K-HEaji8k-M566LPyFAdoBYI03uS8WvP9GE8SvpUH08y9KFtits-7rJfmlQDTRW9roSsz4YfNdFgyWrjfF4zv5qvWwu8F_CMx3c4xSKv-JpwBzF3_wiAG2DTA3r6AjR2lr3V1vPeJAH7l6qr_m_G3v-hXblHpBcvmEMNXLNQp8DEiOqY0HSbqjb7Tw0h0dq9MX-ul4Xz_EedGphwcg3srDY=w556-h989-s-no-gm?authuser=0",
    "categories": [
        "top"
    ],
    "fullContent": "ONLY AVAILABLE IN PAID PLANS",
  }
}
