import { Game } from "./utils/game";

describe("Game", () => {
  let game: Game;
  let handleEnterPress: (event: KeyboardEvent) => void;

  beforeEach(() => {
    game = new Game();
    game.initGame();

    handleEnterPress = (event: KeyboardEvent): void => {
      if (event.key === "Enter") {
        game.checkWinHandler();
      }
    };

    document.removeEventListener("keydown", handleEnterPress as EventListener);
    document.addEventListener("keydown", handleEnterPress as EventListener);
  });

  afterEach(() => {
    document.removeEventListener("keydown", handleEnterPress as EventListener);
  });

  test("checkWinHandler is called on 'Enter' key press", () => {
    const checkWinHandlerSpy = jest.spyOn(game, "checkWinHandler");
    const enterKeyEvent = new KeyboardEvent("keydown", { key: "Enter" });

    document.dispatchEvent(enterKeyEvent);

    expect(checkWinHandlerSpy).toHaveBeenCalled();
  });
});
