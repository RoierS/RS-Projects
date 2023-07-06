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
