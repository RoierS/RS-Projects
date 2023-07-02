import { Game } from "./game";

export function loadLevel(game: Game, levelIndex: number): void {
  const { gameboard, htmlFieldView, task, inputCss } = game;

  if (!gameboard || !htmlFieldView || !task || !inputCss) return;

  gameboard.innerHTML = "";
  htmlFieldView.innerHTML = "";
  inputCss.value = "";

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

  game.enterBtn?.removeEventListener("click", game.checkWinHandler);
  console.log(level.selector);
  game.enterBtn?.addEventListener("click", game.checkWinHandler);

  const selectedElements = document.querySelectorAll(level.selector);
  selectedElements.forEach((element) => {
    element.classList.add("selectMe");
  });
}
