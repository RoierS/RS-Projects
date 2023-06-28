class Game {
  private currentLevel: number;

  constructor() {
    this.currentLevel = 1;
  }

  startGame() {
    this.displayLevel();
  }

  displayLevel() {
    const levelElement = document.createElement("h1");
    levelElement.textContent = `Level ${this.currentLevel}`;
    document.getElementById("app")?.appendChild(levelElement);
  }
}

const game = new Game();
game.startGame();
 
