// eslint-disable-next-line import/no-extraneous-dependencies
import Prism from "prismjs";
import "../prismjs/prism.css";
import { Level } from "../types/types";
import { levels } from "../levels/levels";
import { createModal } from "../components/modal";

class Game {
  gameboard: HTMLElement | null;

  inputCss: HTMLInputElement | null;

  enterBtn: HTMLButtonElement | null;

  htmlFieldView: HTMLElement | null;

  task: HTMLElement | null;

  helpBtn: HTMLElement | null;

  levelsList: HTMLElement | null;

  currentLevel: number;

  levels: Level[];

  constructor() {
    this.gameboard = document.querySelector(".gameboard__table");
    this.inputCss = document.querySelector(".input-css");
    this.enterBtn = document.querySelector(".enter-btn");
    this.helpBtn = document.querySelector(".help-btn");
    this.htmlFieldView = document.querySelector(".html-field__view");
    this.task = document.querySelector(".task");
    this.levelsList = document.querySelector(".levels");
    this.currentLevel = 0;
    this.levels = levels;
  }

  showHelp() {
    this.helpBtn?.addEventListener("click", () => {
      const { selector } = this.levels[this.currentLevel];
      const inputCss = this.inputCss as HTMLInputElement;
      let currentIndex = 0;

      const typeSelector = () => {
        if (currentIndex < selector.length) {
          inputCss.value += selector[currentIndex];
          currentIndex += 1;
          setTimeout(typeSelector, 100);
        }
      };
      typeSelector();
    });
  }

  loadLevel(levelIndex: number): void {
    const level = levels[levelIndex];
    const ruleSelector = level.selector;

    if (
      !this.gameboard ||
      !this.htmlFieldView ||
      !this.task ||
      !this.inputCss ||
      !this.levelsList
    )
      return;

    this.gameboard.innerHTML = "";
    this.htmlFieldView.innerHTML = "";
    this.inputCss.value = "";
    this.levelsList.innerHTML = "";

    this.task.innerText = level.toDo;
    this.gameboard.innerHTML = level.htmlCode;

    const codeLines = level.htmlCode;
    const highlightedCode = Prism.highlight(
      codeLines,
      Prism.languages.markup,
      "markup"
    );

    this.htmlFieldView.innerHTML = `<pre class="line"><code class="language-markup">${highlightedCode}</code></pre>`;

    function createTooltip(element: HTMLElement): HTMLElement {
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      if (
        element.hasAttribute("class") &&
        element.classList.contains("small")
      ) {
        tooltip.textContent = `<${element.tagName.toLowerCase()} class="small"></${element.tagName.toLowerCase()}>`;
      } else {
        tooltip.textContent = `<${element.tagName.toLowerCase()}></${element.tagName.toLowerCase()}>`;
      }
      element.appendChild(tooltip);
      return tooltip;
    }

    const elements = this.gameboard.querySelectorAll<HTMLElement>("*");

    elements.forEach((element) => {
      element.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        const borderStyle = "5px solid rgb(194, 208, 0)";
        element.style.setProperty("border", borderStyle);
      });

      element.addEventListener("mouseout", (event) => {
        event.stopPropagation();
        element.style.removeProperty("border");
      });
    });

    elements.forEach((element) => {
      let tooltip: HTMLElement | null;

      element.addEventListener("mouseover", (event) => {
        if (tooltip) {
          tooltip.style.visibility = "visible";
          tooltip.style.opacity = "1";
        } else {
          tooltip = createTooltip(element);
          tooltip.style.visibility = "visible";
          tooltip.style.opacity = "1";
        }
        event.stopPropagation();
      });

      element.addEventListener("mouseout", (event) => {
        event.stopPropagation();
        if (tooltip) {
          tooltip.style.visibility = "hidden";
          tooltip.style.opacity = "0";
        }
      });
    });

    const selectedElements = document.querySelectorAll(ruleSelector);
    selectedElements.forEach((element) => {
      const children = element.querySelectorAll("*");
      children.forEach((child) => {
        child.classList.add("selectMe");
      });
      element.classList.add("selectMe");
    });

    levels.forEach((lvl, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("level-name");
      listItem.textContent = lvl.name;

      if (index === levelIndex) {
        listItem.classList.add("current-level");
      }

      listItem.addEventListener("click", () => {
        this.levelLinkClickHandler(index);
      });

      this.levelsList?.appendChild(listItem);
    });

    this.enterBtn?.removeEventListener("click", this.checkWinHandler);
    this.enterBtn?.addEventListener("click", this.checkWinHandler);

    this.currentLevel = levelIndex;
  }

  checkWin(correctSelector: string): void {
    const enteredSelector = this.inputCss?.value;
    const selectMeElements = document.querySelectorAll(".selectMe");
    if (enteredSelector === correctSelector) {
      if (this.currentLevel === this.levels.length - 1) {
        const modal = document.querySelector(".modal") as HTMLElement | null;
        if (modal) modal.style.display = "block";
        createModal.call(this);
        return;
      }

      this.currentLevel += 1;
      selectMeElements.forEach((element) => {
        element.classList.add("win-animation");
        element.addEventListener(
          "animationend",
          () => {
            element.classList.remove("win-animation");
          },
          { once: true }
        );
      });
      setTimeout(() => {
        this.loadLevel(this.currentLevel);
      }, 1000);
      console.log("You Win!");
    } else {
      selectMeElements.forEach((element) => {
        element.classList.add("lose-animation");
        element.addEventListener(
          "animationend",
          () => {
            element.classList.remove("lose-animation");
          },
          { once: true }
        );
      });
      console.log("Try again!");
    }
  }

  checkWinHandler = (): void => {
    const currentLevel = this.levels[this.currentLevel];
    const correctSelector = currentLevel.selector;
    this.checkWin(correctSelector);
  };

  levelLinkClickHandler(levelIndex: number): void {
    this.loadLevel(levelIndex);
  }

  initGame(): void {
    this.loadLevel(this.currentLevel);
    this.showHelp();
  }
}

export { Game };
