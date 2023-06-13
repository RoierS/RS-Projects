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
  private allData: Source[];
  private filteredData: Source[];

  constructor() {
    this.sourceContainer = document.querySelector(".sources");
    this.sourceItemTemp = document.querySelector<HTMLTemplateElement>(
      "#sourceItemTemp"
    );
    this.allData = [];
    this.filteredData = [];
  }

  public draw(data: Source[]): void {
    this.allData = data;
    this.filteredData = data;
    this.renderSources();
  }
  private renderSources(): void {
    if (!this.sourceContainer || !this.sourceItemTemp) {
      return;
    }

    this.clearSources();

    this.filteredData.forEach((item) => {
      const sourceContent = this.sourceItemTemp?.content;

      if (!sourceContent) {
        return;
      }

      const sourceClone = this.sourceItemTemp?.content.cloneNode(
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
      this.sourceContainer?.append(sourceClone);
    });
  }

  public filterByCategory(category: string): void {
    if (category === "") {
      this.filteredData = this.allData;
    } else {
      this.filteredData = this.allData.filter(
        (item: Source) => item.category === category
      );
    }
    this.renderSources();
  }

  private clearSources(): void {
    if (this.sourceContainer) {
      this.sourceContainer.innerHTML = "";
    }
  }
}

export default Sources;
