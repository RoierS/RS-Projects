import { Level } from "../types/types";
import { loadLevel } from "./levelLoader";
import { levels } from "../levels/levels";

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

  checkWin(correctSelector: string): void {
    const enteredSelector = this.inputCss?.value;
    const selectMeElements = document.querySelectorAll(".selectMe");
    if (enteredSelector === correctSelector) {
      if (this.currentLevel === this.levels.length - 1) {
        const modal = document.querySelector(".modal") as HTMLElement | null;
        if (modal) modal.style.display = "block";
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
        loadLevel(this, this.currentLevel);
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

  initGame(): void {
    this.currentLevel = 0;
    this.levels.forEach((level, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("level-name");
      listItem.textContent = level.name;

      if (index === this.currentLevel) {
        listItem.classList.add("current-level");
      }
      this.levelsList?.appendChild(listItem);
    });

    loadLevel(this, this.currentLevel);
  }

  // loadLevel(levelIndex: number): void {
  //   this.currentLevel = levelIndex;
  // }
}

export { Game };
