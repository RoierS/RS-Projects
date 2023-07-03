// import { levels } from "../levels/levels";
// import { Level } from "../types/types";
import { Game } from "./game";

export function loadLevel(game: Game, levelIndex: number): void {
  const { gameboard, htmlFieldView, task, inputCss, levelsList } = game;

  if (!gameboard || !htmlFieldView || !task || !inputCss || !levelsList) return;

  gameboard.innerHTML = "";
  htmlFieldView.innerHTML = "";
  inputCss.value = "";
  levelsList.innerHTML = "";

  const level = game.levels[levelIndex];
  task.innerText = level.toDo;
  gameboard.innerHTML = level.htmlCode;

  const lines = level.htmlCode.trim().split("\n");
  lines.forEach((line) => {
    const lineElement = document.createElement("div");
    lineElement.textContent = line;
    lineElement.classList.add("code-line");

    game.htmlFieldView?.appendChild(lineElement);
  });

  const selectedElements = document.querySelectorAll(level.selector);
  selectedElements.forEach((element) => {
    element.classList.add("selectMe");
  });

  game.levels.forEach((lvl, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("level-name");
    listItem.textContent = lvl.name;

    if (index === levelIndex) {
      listItem.classList.add("current-level");
    }

    levelsList.appendChild(listItem);
  });

  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      game.checkWinHandler();
    }
  };

  game.enterBtn?.removeEventListener("click", game.checkWinHandler);
  console.log(level.selector);
  game.enterBtn?.addEventListener("click", game.checkWinHandler);

  document.addEventListener("keydown", handleEnterPress);

  const levelLinks = document.querySelectorAll(".level-name");
  levelLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      document.removeEventListener("keydown", handleEnterPress);
      loadLevel(game, index);
    });
  });
}
