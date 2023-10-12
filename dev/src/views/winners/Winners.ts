import { getTotalWinnersCount, getWinners } from "../../api/winners/winnersApi";
import { carSvg } from "../../assets/img/carSvg";
import { Car } from "../../models/Car";
import { createNewElement } from "../../utils/createNewElement";

class Winners {
  winnersContainer: HTMLElement | null;

  winnersTable: HTMLTableElement | null;

  paginationContainer: HTMLElement | null;

  winnersData: Car[] = [];

  currentPage: number = 1;

  carsPerPage: number = 10;

  totalCount: number = 0;

  constructor() {
    this.winnersContainer = null;
    this.winnersTable = null;
    this.paginationContainer = null;
    this.winnersData = [];
  }

  async render() {
    const main = document.querySelector(".main");
    if (!main) {
      throw new Error("Main element not found.");
    }

    this.winnersContainer = createNewElement("div", "winners-container");
    const headerWinners = createNewElement("h2", "winners-container__title");
    headerWinners.textContent = "Winners Table";
    this.winnersContainer.appendChild(headerWinners);
    main.appendChild(this.winnersContainer);

    const total = await getTotalWinnersCount();
    this.totalCount = total;

    const totalPages = Math.ceil(this.totalCount / this.carsPerPage);
    await this.loadWinnersData();
    this.renderWinnersTable();
    this.renderPaginationButtons(totalPages);
  }

  async loadWinnersData() {
    try {
      const winners = await getWinners(this.currentPage, this.carsPerPage);
      this.winnersData = winners;
    } catch (error) {
      console.error("error", error);
    }
  }

  async renderWinnersTable(): Promise<void> {
    if (this.winnersTable) {
      this.winnersContainer?.removeChild(this.winnersTable);
    }
    await this.loadWinnersData();
    this.winnersTable = createNewElement(
      "table",
      "winners-table",
    ) as HTMLTableElement;
    this.winnersContainer?.appendChild(this.winnersTable);

    const headerRow = this.winnersTable.insertRow();
    const headers = ["№", "Car image", "Car Name", "Wins", "Best time(s)"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    this.winnersData.forEach((winnersData, index) => {
      this.addCarToTable(winnersData, index + 1);
    });
  }

  createCarImage(color: string): string {
    const updatedSvgCode = carSvg.replace(/#000000/g, color);
    const resultSvgCode = updatedSvgCode.replace(
      /url\(#linearGradient3889\)/g,
      color,
    );
    return resultSvgCode;
  }

  addCarToTable(carData: Car, position: number): void {
    if (this.winnersTable) {
      const row = this.winnersTable.insertRow();
      row.innerHTML = `
      <td>${position}</td>
      <td>${this.createCarImage(carData.color!)}</td>
      <td>${carData.name}</td>
      <td>${carData.wins}</td>
      <td>${carData.time}</td>
    `;
    }
  }

  renderPaginationButtons(totalPages: number): void {
    if (!this.paginationContainer) {
      this.paginationContainer = createNewElement(
        "div",
        "pagination-container",
      );
      this.winnersContainer?.appendChild(this.paginationContainer);
    } else {
      this.paginationContainer.innerHTML = "";
    }
    const prevButton = createNewElement(
      "button",
      "pagination-prev-button",
    ) as HTMLButtonElement;
    prevButton.classList.add("buttons");
    prevButton.textContent = "Previous";
    prevButton.disabled = this.currentPage === 1;
    prevButton.addEventListener("click", () => this.handlePrevButtonClick());
    this.paginationContainer.appendChild(prevButton);

    const currentPageBlock = createNewElement(
      "div",
      "current-page",
    ) as HTMLElement;

    currentPageBlock.textContent = `Page #${this.currentPage}`;
    this.paginationContainer.appendChild(currentPageBlock);

    const totalCountInfo = createNewElement(
      "div",
      "total-count",
    ) as HTMLElement;
    totalCountInfo.textContent = `Winners (${this.totalCount})`;
    currentPageBlock.appendChild(totalCountInfo);

    const nextButton = createNewElement(
      "button",
      "pagination-next-button",
    ) as HTMLButtonElement;
    nextButton.classList.add("buttons");
    nextButton.textContent = "Next";
    nextButton.disabled = this.currentPage === totalPages;

    nextButton.addEventListener("click", () => this.handleNextButtonClick());
    this.paginationContainer.appendChild(nextButton);

    getTotalWinnersCount()
      .then((total) => {
        this.totalCount = total;
        totalCountInfo.textContent = `Winners (${this.totalCount})`;
        nextButton.disabled = this.currentPage === totalPages;
      })
      .catch((error) => {
        console.error("Error fetching total car count:", error);
      });
    currentPageBlock.appendChild(totalCountInfo);
  }

  handlePrevButtonClick(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.renderPaginationButtons(
        Math.ceil(this.totalCount / this.carsPerPage),
      );
      this.renderWinnersTable();
      this.saveWinnersState();
    }
  }

  handleNextButtonClick(): void {
    this.currentPage += 1;
    this.renderPaginationButtons(Math.ceil(this.totalCount / this.carsPerPage));
    this.renderWinnersTable();
    this.saveWinnersState();
  }

  saveWinnersState(): void {
    const currentState = {
      currentPage: this.currentPage,
    };
    sessionStorage.setItem("winnersState", JSON.stringify(currentState));
  }
}

export default Winners;
