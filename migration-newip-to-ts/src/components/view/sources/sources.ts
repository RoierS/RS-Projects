import "./sources.css";

export interface Source {
  name: string;
  id: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

class Sources {
  private sourceContainer: HTMLElement | null;
  private sourceItemTemp: HTMLTemplateElement | null;
  private data: Source[];

  constructor() {
    this.sourceContainer = document.querySelector(".sources");
    this.sourceItemTemp = document.querySelector<HTMLTemplateElement>(
      "#sourceItemTemp"
    );
    this.data = [];
  }

  public draw(data: Source[]): void {
    this.clearSources();

    this.data = data;
    this.data.forEach((item) => {
      if (!this.sourceContainer || !this.sourceItemTemp) {
        return;
      }
      const sourceClone = this.sourceItemTemp.content?.cloneNode(
        true
      ) as DocumentFragment;

      const sourceItemName = sourceClone.querySelector<HTMLElement>(
        ".source__item-name"
      );
      if (sourceItemName) {
        sourceItemName.textContent = item.name;
      }

      const sourceItem = sourceClone.querySelector<HTMLElement>(
        ".source__item"
      );
      if (sourceItem) {
        sourceItem.setAttribute("data-source-id", item.id);
        sourceItem.setAttribute("data-category", item.category);
      }

      this.sourceContainer.append(sourceClone);
    });
  }

  public filterByCategory(category: string): void {
    if (category === "") {
      this.draw(this.data);
    }
    const filteredData = this.data.filter(
      (item: Source) => item.category === category
    );
    this.draw(filteredData);
  }

  private clearSources(): void {
    const sourceContainer = document.querySelector(".sources");
    if (sourceContainer) {
      sourceContainer.innerHTML = "";
    }
  }
}

export default Sources;
