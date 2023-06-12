export interface NewsItem {
  urlToImage: string | undefined;
  author: string | undefined;
  source: {
    name: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  url: string;
}
