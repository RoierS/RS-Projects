import "./news.css";
import { NewsItem } from "../../../types/index";

class News {
  public draw(data: NewsItem[]): void {
    const news: NewsItem[] =
      data.length >= 10
        ? data.filter((_item: NewsItem, idx: number) => idx < 10)
        : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector(
      "#newsItemTemp"
    );

    news.forEach((item: NewsItem, idx: number): void => {
      const newsClone: DocumentFragment = newsItemTemp?.content.cloneNode(
        true
      ) as DocumentFragment;

      if (idx % 2) {
        const newsItem: HTMLElement | null = newsClone.querySelector(
          ".news__item"
        );
        newsItem?.classList.add("alt");
      }

      const metaPhoto: HTMLElement | null = newsClone.querySelector(
        ".news__meta-photo"
      );
      if (metaPhoto) {
        metaPhoto.style.backgroundImage = `url(${
          item.urlToImage || "img/news_placeholder.jpg"
        })`;
      }

      const metaAuthor: HTMLElement | null = newsClone.querySelector(
        ".news__meta-author"
      );
      if (metaAuthor) {
        metaAuthor.textContent = item.author || item.source.name;
      }

      const metaDate: HTMLElement | null = newsClone.querySelector(
        ".news__meta-date"
      );
      if (metaDate) {
        metaDate.textContent = item.publishedAt
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("-");
      }

      const descriptionTitle: HTMLElement | null = newsClone.querySelector(
        ".news__description-title"
      );
      if (descriptionTitle) {
        descriptionTitle.textContent = item.title;
      }

      const descriptionSource: HTMLElement | null = newsClone.querySelector(
        ".news__description-source"
      );
      if (descriptionSource) {
        descriptionSource.textContent = item.source.name;
      }

      const descriptionContent: HTMLElement | null = newsClone.querySelector(
        ".news__description-content"
      );
      if (descriptionContent) {
        descriptionContent.textContent = item.description;
      }

      const readMoreLink: HTMLElement | null = newsClone.querySelector(
        ".news__read-more a"
      );
      if (readMoreLink) {
        readMoreLink.setAttribute("href", item.url);
      }

      fragment.append(newsClone);
    });

    const newsContainer: HTMLElement | null = document.querySelector(".news");
    if (newsContainer) {
      newsContainer.innerHTML = "";
      newsContainer.appendChild(fragment);
    }
  }
}

export default News;
