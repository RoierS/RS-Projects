import { createNewElement } from "../../utils/createNewElement";

class Header {
  header: HTMLElement | null;

  headerTitle: HTMLElement | null;

  garageBtn: HTMLButtonElement | null;

  winnersBtn: HTMLButtonElement | null;

  wrapper: HTMLElement | null;

  main: HTMLElement | null;

  constructor() {
    this.header = document.querySelector(".header");
    this.headerTitle = document.querySelector(".header_title");
    this.garageBtn = document.querySelector("garage-btn");
    this.winnersBtn = document.querySelector(".winners-btn");
    this.wrapper = document.querySelector(".wrapper");
    this.main = document.querySelector(".main");
  }

  clearMainContent(): void {
    if (this.main) {
      this.main.innerHTML = "";
    }
  }

  render(): void {
    this.wrapper = createNewElement("div", "wrapper");
    this.header = createNewElement("header", "header");
    this.main = createNewElement("main", "main");

    this.header.innerHTML = `
      <h1 class="header_title">Async Race</h1>
      <div class="header__btns-block">
        <button class="garage-btn"><a class="garage-link" href="#/">Garage</a></button>
        <button class="winners-btn"><a class="winners-link" href="#/winners">Winners</a></button>
      </div>
    `;

    this.wrapper.append(this.header, this.main);
    document.body.prepend(this.wrapper);
  }
}

export default Header;
