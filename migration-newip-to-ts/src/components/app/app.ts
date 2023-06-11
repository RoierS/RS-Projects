import AppController from "../controller/controller";
import { Article, AppView } from "../view/appView";
import { Source } from "../view/sources/sources";

interface DataArticles {
  articles?: Article[] | undefined;
  sources?: Source[] | undefined;
}
class App {
  private controller: AppController<DataArticles>;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
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

    this.controller.getSources((data: DataArticles) =>
      this.view.drawSources(data)
    );
  }
}

export default App;
