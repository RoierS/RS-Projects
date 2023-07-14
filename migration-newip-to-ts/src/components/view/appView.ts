import News from "./news/news";
import Sources, { Source } from "./sources/sources";

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
  source: {
    name: string;
  };
}

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: { articles?: Article[] }): void {
    const values = data?.articles ? data.articles : [];
    this.news.draw(values as Article[]);
  }

  public drawSources(data: { sources?: Source[] }): void {
    const values = data?.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
