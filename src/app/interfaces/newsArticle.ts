export interface NewsArticle {
    article_id: string;
    title?: string | null;
    creator?: string | null;
    image_url?: string | null;
    description?: string | null;
    content?: string | null;
    pubDate?: Date | null;
    category?: string[] | null;
}