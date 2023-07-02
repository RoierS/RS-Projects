import { Level } from "../types/types";
import { loadLevel } from "./levelLoader";

class Game {
  gameboard: HTMLElement | null;

  inputCss: HTMLInputElement | null;

  enterBtn: HTMLButtonElement | null;

  htmlFieldView: HTMLElement | null;

  task: HTMLElement | null;

  currentLevel: number;

  levels: Level[];

  constructor() {
    this.gameboard = document.querySelector(".gameboard__table");
    this.inputCss = document.querySelector(".input-css");
    this.enterBtn = document.querySelector(".enter-btn");
    this.enterBtn = document.querySelector(".enter-btn");
    this.htmlFieldView = document.querySelector(".html-field__view");
    this.task = document.querySelector(".task");
    this.currentLevel = 0;
    this.levels = [
      {
        name: "Level 1",
        toDo: "Select the plates",
        selector: "plate",
        htmlCode: `
        <plate></plate>
        <plate></plate>
        `,
      },
      {
        name: "Level 2",
        toDo: "Select the apple on the plate",
        selector: "plate apple",
        htmlCode: `
        <plate>
          <apple></apple>
        </plate>
        `,
      },
      {
        name: "Level 3",
        toDo: "Select the small apple on the plate",
        selector: ".small",
        htmlCode: `
        <plate>
          <apple></apple>
        </plate>
        <plate>
          <apple class="small"></apple>
        </plate>
        `,
      },
      {
        name: "Level 4",
        toDo: "Select the only small apple on the plate",
        selector: "apple.small",
        htmlCode: `
        <plate>
          <orange class="small"></orange>
        </plate>
        <plate>
          <apple class="small"></apple>
        </plate>
        `,
      },
    ];
  }

  checkWin(correctSelector: string): void {
    const enteredSelector = this.inputCss?.value;
    if (enteredSelector === correctSelector) {
      this.currentLevel += 1;
      loadLevel(this, this.currentLevel);
      console.log("You Win!");
    } else {
      console.log("Try again!");
    }
  }

  checkWinHandler = (): void => {
    const currentLevel = this.levels[this.currentLevel];
    this.checkWin(currentLevel.selector);
  };

  initGame(): void {
    this.currentLevel = 0;
    loadLevel(this, this.currentLevel);
  }
}

export { Game };

// const gameboard = document.querySelector(
//   ".gameboard__table"
// ) as HTMLElement | null;
// const inputCss = document.querySelector(
//   ".input-css"
// ) as HTMLInputElement | null;
// const enterBtn = document.querySelector(
//   ".enter-btn"
// ) as HTMLButtonElement | null;
// const htmlFieldView = document.querySelector(
//   ".html-field__view"
// ) as HTMLElement | null;
// const task = document.querySelector(".task") as HTMLElement | null;

// // levels
// let currentLevel = 0;

// const levels: Level[] = [
//   {
//     name: "Level 1",
//     toDo: "Select the plates",
//     selector: "plate",
//     htmlCode: `
//     <plate></plate>
//     <plate></plate>
//     `,
//   },
//   {
//     name: "Level 2",
//     toDo: "Select the apple on the plate",
//     selector: "plate apple",
//     htmlCode: `
//     <plate>
//       <apple></apple>
//     </plate>
//     `,
//   },
//   {
//     name: "Level 3",
//     toDo: "Select the small apple on the plate",
//     selector: ".small",
//     htmlCode: `
//     <plate>
//       <apple></apple>
//     </plate>
//     <plate>
//       <apple class="small"></apple>
//     </plate>
//     `,
//   },
//   {
//     name: "Level 4",
//     toDo: "Select the only small apple on the plate",
//     selector: "apple.small",
//     htmlCode: `
//     <plate>
//       <orange class="small"></orange>
//     </plate>
//     <plate>
//       <apple class="small"></apple>
//     </plate>
//     `,
//   },
// ];

// // check win
// function checkWin(correctSelector: string) {
//   const enteredSelector = inputCss?.value;
//   if (enteredSelector === correctSelector) {
//     currentLevel += 1;
//     // eslint-disable-next-line no-use-before-define
//     loadLevel(currentLevel);
//     console.log("You Win!");
//   } else {
//     console.log("try again!");
//   }
// }
// const checkWinHandler = () => checkWin(levels[currentLevel].selector);

// // load a level
// function loadLevel(levelIndex: number) {
//   if (!gameboard || !htmlFieldView || !task || !inputCss) return;

//   gameboard.innerHTML = "";
//   htmlFieldView.innerHTML = "";
//   inputCss.value = "";

//   const level = levels[levelIndex];
//   task.innerText = level.toDo;
//   gameboard.innerHTML = level.htmlCode;
//   // htmlFieldView.textContent = level.htmlCode;

//   const lines = level.htmlCode.trim().split("\n");
//   lines.forEach((line) => {
//     const lineElement = document.createElement("div");
//     lineElement.textContent = line;
//     lineElement.classList.add("code-line");

//     htmlFieldView.appendChild(lineElement);
//   });

//   enterBtn?.removeEventListener("click", checkWinHandler);
//   console.log(level.selector);
//   enterBtn?.addEventListener("click", checkWinHandler);
// }

// function initGame() {
//   currentLevel = 0;
//   loadLevel(currentLevel);
// }

// initGame();

// // load level when click on link
// const levelLinks = document.querySelectorAll(".level-name");
// levelLinks.forEach((link, index) => {
//   link.addEventListener("click", () => {
//     loadLevel(index);
//   });
// });
