// import {
//   getCars,
//   deleteCar,
//   createCar,
//   updateCar,
//   startStopCarEngine,
//   switchCarEngineToDriveMode,
//   getTotalCarCount,
//   // request,
//   // deleteAllCars,
// } from "../../api/api";
// import { Car } from "../../models/Car";
import { Car } from "../../models/Car";
import { createNewElement } from "../../utils/createNewElement";

class Winners {
  winnersContainer: HTMLElement | null;

  winnersTable: HTMLTableElement | null;

  winnersData: Car[] = [];

  currentPage: number = 1;

  carsPerPage: number = 10;

  totalCount: number = 0;

  constructor() {
    this.winnersContainer = null;
    this.winnersTable = null;
  }

  render() {
    const main = document.querySelector(".main");
    if (!main) {
      throw new Error("Main element not found.");
    }

    this.winnersContainer = createNewElement("div", "winners-container");
    this.winnersContainer.textContent = "Winners Table";
    main.appendChild(this.winnersContainer);

    this.renderWinnersTable();

    // const totalPages = Math.ceil(this.totalCount / this.carsPerPage);
  }

  renderWinnersTable(): void {
    this.winnersTable = createNewElement(
      "table",
      "winners-table",
    ) as HTMLTableElement;
    this.winnersContainer?.appendChild(this.winnersTable);
    const headerRow = this.winnersTable.insertRow();
    const headers = ["№", "Car", "Car Name", "Wins", "Best time(s)"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    // const startIndex = (this.currentPage - 1) * this.carsPerPage;
    // const endIndex = Math.min(
    //   startIndex + this.carsPerPage,
    //   this.winnersData.length,
    // );

    // for (let i = startIndex; i < endIndex; i += 1) {
    //   this.addCarToTable(this.winnersData[i], i + 1);
    // }
  }

  // addCarToTable(carData: Car, position: number): void {
  //   if (this.winnersTable) {
  //     const row = this.winnersTable.insertRow();
  //     row.innerHTML = `
  //     <td>${position}</td>
  //     <td>${carData.wins}</td>
  //     <td>${carData.time}</td>
  //   `;
  //   }
  // }
}

export default Winners;
