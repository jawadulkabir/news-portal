export interface NewsArticle {
    articleId: string;
    title?: string | null;
    creator?: string | null;
    imageUrl?: string | null;
    shortDescription?: string | null;
    fullContent?: string | null;
    publishDate?: Date | null;
    categories?: string[] | null;
}