import { Game } from "./game";

describe("Game", () => {
  let game: Game;
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    game = new Game();
    game.helpBtn = document.createElement("button");
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
    game.loadSavedProgress();
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  // describe("loadSavedProgress", () => {
  //   test("should load current level, isLevelCompleted, and isLevelCompletedWithHint from local storage", () => {
  //     // localStorageMock.currentLevel = "2";
  //     console.log(localStorageMock.currentLevel);
  //     console.log(game.currentLevel);
  //     localStorageMock.isLevelCompleted = JSON.stringify([true, false, true]);
  //     localStorageMock.isLevelCompletedWithHint = JSON.stringify([
  //       false,
  //       true,
  //       true,
  //     ]);
  //     game.saveProgress();

  //     // expect(game.currentLevel).toBe(2);
  //     expect(game.isLevelCompleted).toEqual([true, false, true]);
  //     expect(game.isLevelCompletedWithHint).toEqual([false, true, true]);
  //   });
  // });

  describe("showHelp", () => {
    test("should add event listener to helpBtn", () => {
      const addEventListenerMock = jest.spyOn(
        game.helpBtn as HTMLElement,
        "addEventListener"
      );
      game.showHelp();
      expect(addEventListenerMock).toHaveBeenCalledWith(
        "click",
        expect.any(Function)
      );
    });
  });
});
