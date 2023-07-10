import { Game } from "../../utils/game";

export function createModal<T extends Game>(this: T): void {
  const modal: HTMLElement | null = document.querySelector(".modal");
  const closeBtn: HTMLElement | null = document.querySelector(".close");
  const newGameBtn: HTMLElement | null =
    document.querySelector(".new-game-btn");

  closeBtn?.addEventListener("click", () => {
    if (!modal) return;
    modal.style.display = "none";
  });

  newGameBtn?.addEventListener("click", () => {
    if (!modal) return;
    this.resetProgress();
    modal.style.display = "none";
    this.levelLinkClickHandler(0);
  });
}
