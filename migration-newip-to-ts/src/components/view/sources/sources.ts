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
  private fragment: DocumentFragment;
  private sourceItemTemp: HTMLTemplateElement | null;

  constructor() {
    this.fragment = document.createDocumentFragment();
    this.sourceItemTemp = document.querySelector<HTMLTemplateElement>(
      "#sourceItemTemp"
    );
  }

  public draw(data: Source[]): void {
    data.forEach((item) => {
      if (!this.sourceItemTemp) {
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
      }

      this.fragment.append(sourceClone);
    });

    const sourceContainer = document.querySelector(".sources");
    if (sourceContainer) {
      sourceContainer.append(this.fragment);
    }
  }
}

export default Sources;
