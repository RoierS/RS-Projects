export interface NewsAPIResponse {
  status: string;
  sourses: NewsSource[];
}

export interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

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
