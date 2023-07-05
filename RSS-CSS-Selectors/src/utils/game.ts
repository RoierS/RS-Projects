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

  levelsList: HTMLElement | null;

  currentLevel: number;

  levels: Level[];

  constructor() {
    this.gameboard = document.querySelector(".gameboard__table");
    this.inputCss = document.querySelector(".input-css");
    this.enterBtn = document.querySelector(".enter-btn");
    this.enterBtn = document.querySelector(".enter-btn");
    this.htmlFieldView = document.querySelector(".html-field__view");
    this.task = document.querySelector(".task");
    this.levelsList = document.querySelector(".levels");
    this.currentLevel = 0;
    this.levels = levels;
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

    console.log(currentLevel);
    console.log(correctSelector);

    this.checkWin(correctSelector);
  };

  levelLinkClickHandler(levelIndex: number): void {
    this.loadLevel(levelIndex);
  }

  initGame(): void {
    this.loadLevel(this.currentLevel);
  }
}

export { Game };
