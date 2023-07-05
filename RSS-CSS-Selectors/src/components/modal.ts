import { Game } from "../utils/game";

export function createModal(this: Game): void {
  const modal = document.querySelector(".modal") as HTMLElement | null;
  const closeBtn = document.querySelector(".close") as HTMLElement | null;
  const newGameBtn = document.querySelector(
    ".new-game-btn"
  ) as HTMLElement | null;

  closeBtn?.addEventListener("click", () => {
    if (!modal) return;
    modal.style.display = "none";
  });

  newGameBtn?.addEventListener("click", () => {
    if (!modal) return;
    modal.style.display = "none";
    this.levelLinkClickHandler(0);
  });
}
