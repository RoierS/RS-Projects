import "./style.css";
import { Game } from "./utils/game";

const game = new Game();
game.initGame();

const handleEnterPress = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    console.log(game.inputCss?.value);
    game.checkWinHandler();
  }
};

document.removeEventListener("keydown", handleEnterPress);
document.addEventListener("keydown", handleEnterPress);

// eslint-disable-next-line no-alert
alert("Please rewiew this work at last day of cross-check");

// const levelLinks = document.querySelectorAll(".level-name");
// levelLinks.forEach((link, levelIndex) => {
//   link.addEventListener("click", () => {
//     loadLevel(game, levelIndex);
//   });
// });
