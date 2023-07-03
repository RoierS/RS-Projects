// import { levels } from "../levels/levels";
// import { Level } from "../types/types";
import { Game } from "./game";

export function loadLevel(game: Game, levelIndex: number): void {
  const { gameboard, htmlFieldView, task, inputCss, levelsList } = game;

  // current rule selector
  console.log(game.levels[levelIndex].selector);

  if (!gameboard || !htmlFieldView || !task || !inputCss || !levelsList) return;

  gameboard.innerHTML = "";
  htmlFieldView.innerHTML = "";
  inputCss.value = "";
  levelsList.innerHTML = "";

  const level = game.levels[levelIndex];
  const ruleSelector = level.selector;

  task.innerText = level.toDo;
  gameboard.innerHTML = level.htmlCode;

  const lines = level.htmlCode.trim().split("\n");
  lines.forEach((line) => {
    const lineElement = document.createElement("div");
    lineElement.textContent = line;
    lineElement.classList.add("code-line");

    game.htmlFieldView?.appendChild(lineElement);
  });

  const selectedElements = document.querySelectorAll(ruleSelector);
  selectedElements.forEach((element) => {
    const children = element.querySelectorAll("*");
    children.forEach((child) => {
      child.classList.add("selectMe");
    });
    element.classList.add("selectMe");
  });

  // rule selector
  console.log(level.selector);

  // generate levels list items
  game.levels.forEach((lvl, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("level-name");
    listItem.textContent = lvl.name;

    if (index === levelIndex) {
      listItem.classList.add("current-level");
    }

    levelsList.appendChild(listItem);
  });

  game.enterBtn?.removeEventListener("click", game.checkWinHandler);
  game.enterBtn?.addEventListener("click", game.checkWinHandler);

  const levelLinks = document.querySelectorAll(".level-name");
  levelLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      console.log(index);
      loadLevel(game, index);
    });
  });
}
