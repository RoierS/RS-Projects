import "./style.css";
import { Game } from "./utils/game";

const game: Game = new Game();
game.initGame();

const handleEnterPress = (event: KeyboardEvent): void => {
  if (event.key === "Enter") {
    game.checkWinHandler();
  }
};

document.removeEventListener("keydown", handleEnterPress as EventListener);
document.addEventListener("keydown", handleEnterPress as EventListener);
