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

  render(): void {
    this.wrapper = createNewElement("div", "wrapper");
    this.header = createNewElement("header", "header");
    this.main = createNewElement("main", "main");

    this.header.innerHTML = `
      <h1 class="header_title">Async Race</h1>
      <button class="garage-btn">Garage</button>
      <button class="winners-btn">Winners</button>
    `;

    this.garageBtn = this.header.querySelector(".garage-btn");
    this.garageBtn?.addEventListener(
      "click",
      this.handleGarageClick.bind(this),
    );

    this.winnersBtn = this.header.querySelector(".winners-btn");
    this.winnersBtn?.addEventListener(
      "click",
      this.handleWinnersClick.bind(this),
    );

    this.wrapper.append(this.header, this.main);
    document.body.prepend(this.wrapper);
  }

  handleGarageClick(): void {
    console.log("garagebtn clicked");
  }

  handleWinnersClick(): void {
    console.log("winnersbtn clicked");
  }
}

export default Header;
