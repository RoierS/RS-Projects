import "./style.css";
import { Game } from "./utils/game";
import { loadLevel } from "./utils/levelLoader";

const game = new Game();
game.initGame();

const levelLinks = document.querySelectorAll(".level-name");
levelLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    loadLevel(game, index);
  });
});
