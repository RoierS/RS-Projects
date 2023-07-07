import { Game } from "./game";

describe("Game", () => {
  let game: Game;
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    game = new Game();

    localStorageMock = {};

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: (key: string) => localStorageMock[key],
        setItem: (key: string, value: string) => {
          localStorageMock[key] = value;
        },
        removeItem: (key: string) => {
          delete localStorageMock[key];
        },
      },
      writable: true,
    });
  });

  describe("saveProgress", () => {
    test("should save current level, isLevelCompleted, and isLevelCompletedWithHint in local storage", () => {
      game.saveProgress();

      expect(localStorageMock.currentLevel).toBe(game.currentLevel.toString());
      expect(localStorageMock.isLevelCompleted).toBe(
        JSON.stringify(game.isLevelCompleted)
      );
      expect(localStorageMock.isLevelCompletedWithHint).toBe(
        JSON.stringify(game.isLevelCompletedWithHint)
      );
    });
  });
});
