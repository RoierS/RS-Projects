// eslint-disable-next-line import/no-extraneous-dependencies
import Prism from "prismjs";
import "../prismjs/prism.css";
import { Level } from "../types/types";
import { levels } from "../levels/levels";
import { createModal } from "../components/modal/modal";
import { createTooltip } from "../components/createTooltip/tooltip";

class Game {
  gameboard: HTMLElement | null;

  inputCss: HTMLInputElement | null;

  enterBtn: HTMLButtonElement | null;

  htmlFieldView: HTMLElement | null;

  task: HTMLElement | null;

  helpBtn: HTMLElement | null;

  resetBtn: HTMLElement | null;

  levelsList: HTMLElement | null;

  currentLevel: number;

  levels: Level[];

  isLevelCompleted: boolean[];

  isLevelCompletedWithHint: boolean[];

  constructor() {
    this.gameboard = document.querySelector(".gameboard__table");
    this.inputCss = document.querySelector(".input-css");
    this.enterBtn = document.querySelector(".enter-btn");
    this.helpBtn = document.querySelector(".help-btn");
    this.resetBtn = document.querySelector(".reset-btn");
    this.htmlFieldView = document.querySelector(".html-field__view");
    this.task = document.querySelector(".task");
    this.levelsList = document.querySelector(".levels");
    this.currentLevel = parseInt(
      localStorage.getItem("currentLevel") || "0",
      10
    );
    this.levels = levels;
    this.isLevelCompleted = JSON.parse(
      localStorage.getItem("isLevelCompleted") || "[]"
    );
    this.isLevelCompletedWithHint = JSON.parse(
      localStorage.getItem("isLevelCompletedWithHint") || "[]"
    );
  }

  saveProgress(): void {
    localStorage.setItem("currentLevel", this.currentLevel.toString());
    localStorage.setItem(
      "isLevelCompleted",
      JSON.stringify(this.isLevelCompleted)
    );
    localStorage.setItem(
      "isLevelCompletedWithHint",
      JSON.stringify(this.isLevelCompletedWithHint)
    );
  }

  loadSavedProgress(): void {
    const savedCurrentLevel: number = parseInt(
      localStorage.getItem("currentLevel") || "0",
      10
    );

    if (
      !Number.isNaN(savedCurrentLevel) &&
      savedCurrentLevel >= 0 &&
      savedCurrentLevel < levels.length
    ) {
      this.currentLevel = savedCurrentLevel;
    }

    const savedIsLevelCompleted: boolean[] = JSON.parse(
      localStorage.getItem("isLevelCompleted") || "[]"
    );
    if (
      Array.isArray(savedIsLevelCompleted) &&
      savedIsLevelCompleted.length === levels.length
    ) {
      this.isLevelCompleted = savedIsLevelCompleted;
    }

    const savedIsLevelCompletedWithHint: boolean[] = JSON.parse(
      localStorage.getItem("isLevelCompletedWithHint") || "[]"
    );
    if (
      Array.isArray(savedIsLevelCompletedWithHint) &&
      savedIsLevelCompletedWithHint.length === levels.length
    ) {
      this.isLevelCompletedWithHint = savedIsLevelCompletedWithHint;
    }
  }

  showHelp(): void {
    if (this.helpBtn) {
      this.helpBtn.addEventListener("click", () => {
        const { selector }: { selector: string } =
          this.levels[this.currentLevel];
        const inputCss = this.inputCss as HTMLInputElement;
        let currentIndex = 0;

        const typeSelector = (): void => {
          if (currentIndex < selector.length) {
            inputCss.value += selector[currentIndex];
            currentIndex += 1;
            setTimeout(typeSelector, 100);
          }
        };
        typeSelector();
      });
    }
  }

  loadLevel(levelIndex: number): void {
    let currentIndex: number = levelIndex;
    if (currentIndex < 0 || currentIndex >= levels.length) {
      currentIndex = 0;
    }

    const level: Level = levels[currentIndex];
    const ruleSelector: string = level.selector;

    if (
      !this.gameboard ||
      !this.htmlFieldView ||
      !this.task ||
      !this.inputCss ||
      !this.levelsList ||
      !level ||
      !level.selector
    )
      return;

    this.gameboard.innerHTML = "";
    this.htmlFieldView.innerHTML = "";
    this.inputCss.value = "";
    this.levelsList.innerHTML = "";

    this.task.innerText = level.toDo;
    this.gameboard.innerHTML = level.htmlCode;

    const codeLines: string = level.htmlCode;
    const highlightedCode: string = Prism.highlight(
      codeLines,
      Prism.languages.markup,
      "markup"
    );

    this.htmlFieldView.innerHTML = `<pre class="line"><code class="language-markup">${highlightedCode}</code></pre>`;

    const elements: NodeListOf<HTMLElement> =
      this.gameboard.querySelectorAll<HTMLElement>("*");

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

    const selectedElements: NodeListOf<Element> =
      document.querySelectorAll(ruleSelector);
    selectedElements.forEach((element) => {
      const children: NodeListOf<Element> = element.querySelectorAll("*");
      children.forEach((child) => {
        child.classList.add("selectMe");
      });
      element.classList.add("selectMe");
    });

    levels.forEach((lvl, index) => {
      const listItem: HTMLElement = document.createElement("li");
      listItem.classList.add("level-name");
      listItem.textContent = lvl.name;

      if (index === currentIndex) {
        listItem.classList.add("current-level");
      }

      if (this.isLevelCompleted[index]) {
        listItem.classList.add("completed");
      }

      if (this.isLevelCompletedWithHint[index]) {
        listItem.classList.add("completed-with-hint");
      }

      listItem.addEventListener("click", () => {
        this.levelLinkClickHandler(index);
      });

      this.levelsList?.appendChild(listItem);
    });

    this.enterBtn?.removeEventListener("click", this.checkWinHandler);
    this.enterBtn?.addEventListener("click", this.checkWinHandler);

    this.currentLevel = currentIndex;
  }

  checkWin(correctSelector: string): void {
    const enteredSelector: string | undefined = this.inputCss?.value;
    const selectMeElements: NodeListOf<Element> =
      document.querySelectorAll(".selectMe");
    const listItemElements: NodeListOf<Element> =
      document.querySelectorAll(".level-name");
    const allCompleted: boolean = Array.from(listItemElements).every((el) =>
      el.classList.contains("completed")
    );

    if (enteredSelector === correctSelector) {
      const modal: HTMLElement | null = document.querySelector(".modal");
      if (allCompleted) {
        if (modal) {
          modal.style.display = "block";
          createModal.call(this);
        }
        return;
      }
      if (this.currentLevel === this.levels.length - 1 && allCompleted) {
        if (modal) modal.style.display = "block";
        createModal.call(this);
        return;
      }
      this.isLevelCompleted[this.currentLevel] = true;
      this.isLevelCompletedWithHint[this.currentLevel] = true;
      this.saveProgress();
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
    const currentLevel: Level = this.levels[this.currentLevel];
    const correctSelector: string = currentLevel.selector;
    this.checkWin(correctSelector);
  };

  levelLinkClickHandler(levelIndex: number): void {
    this.loadLevel(levelIndex);
    this.saveProgress();
  }

  resetProgress(): void {
    this.currentLevel = 0;
    this.isLevelCompleted = new Array<boolean>(levels.length).fill(false);
    this.isLevelCompletedWithHint = new Array<boolean>(levels.length).fill(
      false
    );
    this.saveProgress();
    this.loadLevel(this.currentLevel);
  }

  initGame(): void {
    this.loadSavedProgress();
    this.loadLevel(this.currentLevel);
    this.showHelp();
    this.resetBtn?.addEventListener("click", () => {
      this.resetProgress();
    });
  }
}

export { Game };
