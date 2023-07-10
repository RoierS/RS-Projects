import { Game } from "./game";

describe("Game", () => {
  let game: Game;
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    game = new Game();
    game.helpBtn = document.createElement("button");
    document.body.innerHTML = `
      <div class="gameboard__table"></div>
      <input class="input-css" type="text" />
      <div class="html-field__view"></div>
      <div class="task"></div>
      <button class="enter-btn"></button>
      <div class="gameboard__table></div>">
      <ul class="levels"></ul>
    `;
    game.levels = [
      {
        name: "Level 1",
        toDo: "Select the plates",
        selector: "plate",
        selectorsToSelect: ["plate"],
        htmlCode: `
          <plate></plate>
          <plate></plate>
        `,
      },
      {
        name: "Level 2",
        toDo: "Select the apple on the plate",
        selector: "plate apple",
        selectorsToSelect: ["apple"],
        htmlCode: `
          <plate>
            <apple></apple>
          </plate>
          `,
      },
    ];
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
    document.body.innerHTML = "";
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

  describe("checkWin", () => {
    test("should handle a correct selector and advance to the next level", () => {
      game.currentLevel = 0;
      game.inputCss = document.querySelector(".input-css");
      if (!game.inputCss) return;
      game.inputCss.value = "plate";

      document.body.innerHTML += `
        <plate></plate>
        <li class="level-name"></li>
      `;

      game.checkWin("plate");

      expect(game.currentLevel).toBe(1);
      expect(game.isLevelCompleted[0]).toBe(true);
      expect(game.isLevelCompletedWithHint[0]).toBe(true);
    });
  });
});
