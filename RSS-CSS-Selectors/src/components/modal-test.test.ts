import { Game } from "../utils/game";
import { createModal } from "./modal";

describe("createModal", () => {
  let game: Game;
  let modal: HTMLElement | null;
  let closeBtn: HTMLElement | null;
  let newGameBtn: HTMLElement | null;

  beforeEach(() => {
    game = new Game();
    modal = document.createElement("div");
    modal.classList.add("modal");

    closeBtn = document.createElement("div");
    closeBtn.classList.add("close");

    newGameBtn = document.createElement("div");
    newGameBtn.classList.add("new-game-btn");

    document.body.appendChild(modal);
    document.body.appendChild(closeBtn);
    document.body.appendChild(newGameBtn);
  });

  afterEach(() => {
    modal?.remove();
    closeBtn?.remove();
    newGameBtn?.remove();
  });

  test("closeBtn click should hide the modal", () => {
    createModal.call(game);
    closeBtn?.dispatchEvent(new Event("click"));

    expect(modal?.style.display).toBe("none");
  });

  test("newGameBtn click should reset progress and hide the modal", () => {
    const resetProgressSpy = jest.spyOn(game, "resetProgress");
    const levelLinkClickHandlerSpy = jest.spyOn(game, "levelLinkClickHandler");
    createModal.call(game);
    newGameBtn?.dispatchEvent(new Event("click"));
    expect(resetProgressSpy).toHaveBeenCalled();
    expect(levelLinkClickHandlerSpy).toHaveBeenCalledWith(0);
    expect(modal?.style.display).toBe("none");
  });
});
