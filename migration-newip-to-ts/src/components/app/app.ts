import AppController from "../controller/controller";
import { Article, AppView } from "../view/appView";
import Sources, { Source } from "../view/sources/sources";

interface DataArticles {
  articles?: Article[];
  sources?: Source[];
}
class App {
  private controller: AppController<DataArticles>;
  private view: AppView;
  private sources: Sources;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.sources = new Sources();
  }

  public start(): void {
    const sourceElement = document.querySelector(".sources");
    if (sourceElement) {
      sourceElement.addEventListener("click", (e: Event) =>
        this.controller.getNews(e, (data: DataArticles) =>
          this.view.drawNews(data)
        )
      );
    }

    const categoryFilter = document.querySelector(
      "#category-select"
    ) as HTMLSelectElement;
    categoryFilter.addEventListener("change", () => {
      const selectedCategory = categoryFilter.value;
      this.sources.filterByCategory(selectedCategory);
    });

    this.controller.getSources((data: DataArticles) => {
      this.view.drawSources(data);
      this.sources.draw(data.sources || []);
    });
  }
}

export default App;
