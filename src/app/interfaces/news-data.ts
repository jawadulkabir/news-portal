import { NewsArticle } from "./newsArticle";

export interface NewsData {
    data: NewsArticle[];
    nextPage: string;
}
