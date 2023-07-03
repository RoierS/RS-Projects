import "./style.css";
import { Game } from "./utils/game";
// import { loadLevel } from "./utils/levelLoader";
// import { levels } from "./levels/levels";
// import { Level } from "./types/types";

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

// const levelLinks = document.querySelectorAll(".level-name");
// levelLinks.forEach((link, levelIndex) => {
//   link.addEventListener("click", () => {
//     loadLevel(game, levelIndex);
//   });
// });
